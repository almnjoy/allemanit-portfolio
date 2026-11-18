# Resume sources

`resume-general.html` is the source of truth for **public/Dustin-Alleman-Resume.pdf**
(the general network-engineer resume linked from /resume/).

Rebuild: `./build-pdf.sh` (needs Chrome or Chromium; see the script header for why
LibreOffice is not used).

`resume-cisco.html` is the source of truth for **public/Dustin-Alleman-Resume-Cisco.pdf**
(the Cisco/SE angle linked from /resume/cisco/). Rebuilt from HTML since 2026-11-18; the
old LibreOffice Writer export (2026-07-15, no source) is gone. `./build-pdf.sh` builds both.

Rules (2026-11-18): no phone number on either PDF or page. Degree wording everywhere is
"Bachelor of Science, Information Technology Management, Western Governors University (Nov 2026)".

Page copy lives in `src/data/resume.ts` (`angles.general` / `angles.cisco`), not here.
Keep the two in sync when facts change: certs, dates, job titles.
