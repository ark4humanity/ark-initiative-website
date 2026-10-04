#!/bin/bash
# Generate self-hosted poster thumbnails from staged mp4s. Idempotent: skips existing.
SRC=/home/hatch/workspace/ark-website/r2-staging
DST=/home/hatch/workspace/ark-website/img
for f in "$SRC"/*.mp4; do
  id=$(basename "$f" .mp4)
  out="$DST/vposter-$id.jpg"
  [ -f "$out" ] && continue
  if ! ffmpeg -y -loglevel error -ss 1 -i "$f" -vframes 1 -vf scale=800:-2 -q:v 4 "$out" 2>/dev/null; then
    ffmpeg -y -loglevel error -ss 0.3 -i "$f" -vframes 1 -vf scale=800:-2 -q:v 4 "$out" 2>/dev/null || echo "THUMB FAIL $id"
  fi
  [ -f "$out" ] && echo "thumb $id $(du -h "$out" | cut -f1)"
done
echo THUMBS_DONE
