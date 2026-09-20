# Resume sources

`resume-general.html` is the source of truth for **public/Dustin-Alleman-Resume.pdf**
(the general network-engineer resume linked from /resume/).

Rebuild: `./build-pdf.sh` (needs Chrome or Chromium; see the script header for why
LibreOffice is not used).

`public/Dustin-Alleman-Resume-Cisco.pdf` is the older Cisco/SE resume, exported from
LibreOffice Writer on 2026-07-15. Its .odt source was never checked in. It is linked
from /resume/cisco/ and is kept as-is. If it ever needs an edit, rebuild it as a
second HTML file here rather than hunting for the Writer doc.

Page copy lives in `src/data/resume.ts` (`angles.general` / `angles.cisco`), not here.
Keep the two in sync when facts change: certs, dates, job titles.
