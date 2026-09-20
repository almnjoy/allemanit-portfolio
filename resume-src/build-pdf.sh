#!/usr/bin/env bash
# Rebuild public/Dustin-Alleman-Resume.pdf from resume-general.html.
#
# Renderer: headless Chrome/Chromium. It is the only one that honors the
# @page box and keeps this to one Letter page - LibreOffice ignores @page
# on HTML import and silently produces a 2-page A4 file.
#
# Set CHROME=... if your binary is somewhere else.
set -euo pipefail
cd "$(dirname "$0")"
CHROME="${CHROME:-}"
if [ -z "$CHROME" ]; then
  for c in google-chrome chromium chromium-browser \
           "/c/Program Files/Google/Chrome/Application/chrome.exe" \
           "/mnt/c/Program Files/Google/Chrome/Application/chrome.exe"; do
    if command -v "$c" >/dev/null 2>&1 || [ -x "$c" ]; then CHROME="$c"; break; fi
  done
fi
[ -n "$CHROME" ] || { echo "No Chrome/Chromium found. Set CHROME=/path/to/chrome"; exit 1; }
"$CHROME" --headless --disable-gpu --no-pdf-header-footer \
  --print-to-pdf="../public/Dustin-Alleman-Resume.pdf" \
  "file://$PWD/resume-general.html"
echo "wrote public/Dustin-Alleman-Resume.pdf"
