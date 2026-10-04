#!/usr/bin/env python3
"""Upload staged Ark site videos to Cloudflare R2 and report the public URL.

Dashboard prerequisites (one-time, all free — done by parent via browser task):
  1. Cloudflare Dashboard > R2 Object Storage > Enable R2 (one click).
  2. Create bucket `ark-site-videos`.
  3. R2 > Manage API Tokens > Create API Token (Account token,
     Object Read & Write, scoped to `ark-site-videos` only).
     Copy the Access Key ID + Secret Access Key (shown once).
  4. Bucket > Settings > Public access: enable the r2.dev public URL
     (or connect a custom domain) and note the public base URL.

Then run (keys are transient for this one upload only, never written to disk):
  R2_ACCESS_KEY_ID=... R2_SECRET_ACCESS_KEY=... \\
  /home/hatch/workspace/.venv-deploy/bin/python3 ~/workspace/ark-website/r2-staging/upload_r2.py

What it does:
  - Uploads r2-staging/<id>.mp4 -> videos/<id>.mp4 (skips objects already
    present with matching size), Content-Type video/mp4.
  - Verifies total bytes vs the 10 GB free tier and prints a summary.
  - Prints the NEXT step: set R2_BASE in build_site.py, rebuild, deploy.

Nothing billable is enabled. Drive originals are untouched.
"""
import os
import sys

ACCOUNT_ID = "1f510d341f61f6dedd9634d7c156c84f"
BUCKET = "ark-site-videos"
STAGING = os.path.dirname(os.path.abspath(__file__))
FREE_TIER_BYTES = 10 * 1024**3


def main():
    ak = os.environ.get("R2_ACCESS_KEY_ID")
    sk = os.environ.get("R2_SECRET_ACCESS_KEY")
    if not ak or not sk:
        print("Need R2_ACCESS_KEY_ID and R2_SECRET_ACCESS_KEY in the environment.")
        print("Create them at: Cloudflare Dashboard > R2 > Manage API Tokens")
        sys.exit(2)
    import boto3
    s3 = boto3.client(
        "s3", endpoint_url=f"https://{ACCOUNT_ID}.r2.cloudflarestorage.com",
        aws_access_key_id=ak, aws_secret_access_key=sk, region_name="auto")
    # never keep the secret longer than this process
    del os.environ["R2_SECRET_ACCESS_KEY"]

    ids = open(os.path.join(STAGING, "ids.txt")).read().split()
    uploaded, skipped, failed, total = 0, 0, [], 0
    for fid in ids:
        local = os.path.join(STAGING, f"{fid}.mp4")
        if not os.path.exists(local):
            failed.append((fid, "missing local file")); continue
        size = os.path.getsize(local)
        key = f"videos/{fid}.mp4"
        try:
            head = s3.head_object(Bucket=BUCKET, Key=key)
            if head.get("ContentLength") == size:
                skipped += 1; total += size; continue
        except Exception:
            pass
        try:
            s3.upload_file(local, BUCKET, key, ExtraArgs={"ContentType": "video/mp4"})
            uploaded += 1; total += size
            print(f"up {fid} {size/1e6:.1f}MB", flush=True)
        except Exception as e:
            failed.append((fid, str(e)[:120])); print(f"FAIL {fid}: {e}")
    print(f"\nuploaded={uploaded} skipped={skipped} failed={len(failed)}")
    print(f"R2 usage: {total/1e9:.2f} GB of {FREE_TIER_BYTES/1e9:.0f} GB free tier")
    for fid, why in failed:
        print("  FAILED:", fid, why)
    if failed:
        sys.exit(1)
    print("\nNEXT:")
    print("  1. Note the bucket's public base URL (r2.dev URL or custom domain).")
    print("  2. In ~/workspace/ark-website/build_site.py set R2_BASE to it.")
    print("  3. cd ~/workspace/ark-website && python3 build_site.py")
    print("  4. /home/hatch/workspace/.venv-deploy/bin/python3 "
          "~/workspace/ark-website/deploy-cloudflare.py")
    print("  5. Verify live: posters load, videos play.")


if __name__ == "__main__":
    main()
