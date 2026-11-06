#!/usr/bin/env python3
"""The backup gate checks real chunk hashes and recorded Drive ids."""
import hashlib
import json
import sys
import tempfile
import unittest
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))
from verify_split_backup import REQUIRED_CHUNKS, main, verify_manifest, BackupGateError


def _write_backup(directory: Path, mutate=None):
    chunks = []
    for i in range(REQUIRED_CHUNKS):
        name = f"ark-site-backup-part{i + 1:02d}"
        blob = f"chunk-{i}-".encode() + bytes([i]) * 32
        path = directory / name
        path.write_bytes(blob)
        drive = f"1naJzbUju36iNeYSjtO4jTTHToh55Q{i:02d}abc"
        (directory / f"{name}.drive-id").write_text(drive + "\n", encoding="utf-8")
        chunks.append({
            "name": name,
            "sha256": hashlib.sha256(blob).hexdigest(),
            "bytes": len(blob),
            "drive_id": drive,
        })
    manifest = {"kind": "SPLIT_BACKUP", "chunks": chunks}
    if mutate:
        mutate(manifest, directory)
    path = directory / "SPLIT_BACKUP.json"
    path.write_text(json.dumps(manifest), encoding="utf-8")
    return path


class SplitBackupTests(unittest.TestCase):
    def test_five_chunks_pass(self):
        with tempfile.TemporaryDirectory() as tmp:
            manifest = _write_backup(Path(tmp))
            result = verify_manifest(manifest)
            self.assertEqual(len(result["chunks"]), 5)
            self.assertEqual(main([str(manifest)]), 0)

    def test_hash_mismatch_fails(self):
        with tempfile.TemporaryDirectory() as tmp:
            directory = Path(tmp)

            def mutate(manifest, folder):
                (folder / manifest["chunks"][2]["name"]).write_bytes(b"tampered")

            manifest = _write_backup(directory, mutate)
            with self.assertRaises(BackupGateError):
                verify_manifest(manifest)

    def test_missing_drive_id_file_fails(self):
        with tempfile.TemporaryDirectory() as tmp:
            directory = Path(tmp)

            def mutate(manifest, folder):
                (folder / (manifest["chunks"][0]["name"] + ".drive-id")).unlink()

            manifest = _write_backup(directory, mutate)
            with self.assertRaises(BackupGateError):
                verify_manifest(manifest)

    def test_short_backup_fails(self):
        with tempfile.TemporaryDirectory() as tmp:
            directory = Path(tmp)

            def mutate(manifest, folder):
                manifest["chunks"] = manifest["chunks"][:4]

            manifest = _write_backup(directory, mutate)
            with self.assertRaises(BackupGateError):
                verify_manifest(manifest)

    def test_skip_flag_is_refused(self):
        self.assertEqual(main(["--skip", "SPLIT_BACKUP.json"]), 2)
        self.assertEqual(main(["--bypass"]), 2)


if __name__ == "__main__":
    unittest.main()
