#!/usr/bin/env python3
"""Verify a split site backup before anyone deploys.

This does not deploy, upload, contact Drive, or read credentials.
A backup passes only when the SPLIT_BACKUP manifest lists exactly five
local chunks, each chunk's SHA-256 matches the file on disk, and each
chunk has a recorded Drive file id in both the manifest and a sibling
``<chunk>.drive-id`` file.

There is no flag that skips the gate.
"""
from __future__ import annotations

import hashlib
import json
import re
import sys
from pathlib import Path

REQUIRED_CHUNKS = 5
DRIVE_ID_RE = re.compile(r"^[A-Za-z0-9_-]{20,}$")
BANNED_IDS = {"bypass", "skip", "todo", "redacted", "none", "null", "placeholder"}


class BackupGateError(Exception):
    pass


def _fail(message: str) -> None:
    raise BackupGateError(message)


def verify_manifest(manifest_path: Path) -> dict:
    path = Path(manifest_path)
    if not path.is_file():
        _fail(f"BACKUP GATE: manifest not found: {path}")
    try:
        data = json.loads(path.read_text(encoding="utf-8"))
    except json.JSONDecodeError as exc:
        _fail(f"BACKUP GATE: manifest is not JSON ({exc})")
    if data.get("kind") != "SPLIT_BACKUP":
        _fail("BACKUP GATE: manifest kind must be SPLIT_BACKUP")
    chunks = data.get("chunks")
    if not isinstance(chunks, list):
        _fail("BACKUP GATE: chunks must be a list")
    if len(chunks) != REQUIRED_CHUNKS:
        _fail(
            f"BACKUP GATE: expected {REQUIRED_CHUNKS} chunks, found {len(chunks)}. "
            "Refusing a short backup."
        )
    seen = set()
    base = path.parent
    checked = []
    for index, chunk in enumerate(chunks, start=1):
        if not isinstance(chunk, dict):
            _fail(f"BACKUP GATE: chunk {index} is not an object")
        name = chunk.get("name")
        sha = (chunk.get("sha256") or "").strip().lower()
        drive = (chunk.get("drive_id") or "").strip()
        if not name or "/" in name or name.startswith("."):
            _fail(f"BACKUP GATE: chunk {index} needs a local file name")
        chunk_path = base / name
        if not chunk_path.is_file():
            _fail(f"BACKUP GATE: missing local chunk {name}")
        digest = hashlib.sha256(chunk_path.read_bytes()).hexdigest()
        if not re.fullmatch(r"[0-9a-f]{64}", sha) or digest != sha:
            _fail(f"BACKUP GATE: hash mismatch for {name}")
        if "bytes" in chunk and int(chunk["bytes"]) != chunk_path.stat().st_size:
            _fail(f"BACKUP GATE: size mismatch for {name}")
        if drive.lower() in BANNED_IDS or not DRIVE_ID_RE.fullmatch(drive):
            _fail(f"BACKUP GATE: recorded Drive id missing or unusable for {name}")
        if drive in seen:
            _fail(f"BACKUP GATE: duplicate Drive id for {name}")
        seen.add(drive)
        side = Path(str(chunk_path) + ".drive-id")
        if not side.is_file():
            _fail(f"BACKUP GATE: no recorded Drive id file for {name}")
        recorded = side.read_text(encoding="utf-8").strip()
        if recorded != drive:
            _fail(f"BACKUP GATE: Drive id file does not match the manifest for {name}")
        checked.append({"name": name, "sha256": digest, "drive_id": drive, "bytes": chunk_path.stat().st_size})
    return {"ok": True, "chunks": checked}


def main(argv: list[str]) -> int:
    if any(arg.startswith("-") for arg in argv):
        print("BACKUP GATE: flags are refused. Pass the SPLIT_BACKUP manifest path only.", file=sys.stderr)
        return 2
    if len(argv) != 1:
        print("Usage: python3 verify_split_backup.py SPLIT_BACKUP.json", file=sys.stderr)
        return 2
    try:
        result = verify_manifest(Path(argv[0]))
    except BackupGateError as exc:
        print(str(exc), file=sys.stderr)
        return 1
    print(
        f"BACKUP GATE: {len(result['chunks'])} chunks verified "
        "(local hashes and recorded Drive ids)."
    )
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
