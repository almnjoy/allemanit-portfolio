# Deploy allemanit.com (Astro → Cloudflare Pages)

## Step 1 — Push to GitHub
Create an empty repo at https://github.com/new named `allemanit-portfolio` (public is fine for a portfolio; private also works). Do NOT add a README/gitignore.

Then in PowerShell:
```powershell
cd "Z:\CustomApps\BUSINESS\PRODUCTION-1\Websites\allemanit-portfolio"
git init
git add .
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin https://github.com/almnjoy/allemanit-portfolio.git
git push -u origin main
```
(GitHub login window pops the first time. If remote exists: `git remote set-url origin <url>`.)

## Step 2 — Deploy on Cloudflare Pages (live in minutes, no domain change yet)
1. Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git → pick `allemanit-portfolio`.
2. Build settings:
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Output directory: `dist`
3. Save and Deploy. You get a free URL like `allemanit-portfolio.pages.dev`. **The site is now live there.** Review it.

Every `git push` after this auto-redeploys.

## Step 3 — Point allemanit.com at it (do carefully)
allemanit.com currently carries your homelab subdomains (opscanvas, browser, infra, etc.). Moving the zone to Cloudflare must NOT drop those.

1. Cloudflare → Add a site → `allemanit.com`. Cloudflare scans existing DNS and imports records.
2. **VERIFY every existing record imported** — especially each homelab subdomain (opscanvas, browser, infra, and anything else). If any are missing, add them by hand before continuing.
3. Set all homelab/self-hosted records to **DNS only (grey cloud, not proxied)** — they run through your own Traefik/Authentik/Twingate and proxying them through Cloudflare can break SSL and SSO.
4. Cloudflare gives you 2 nameservers. At your domain registrar, change allemanit.com's nameservers to those. (Propagation: minutes to a few hours.)
5. Back in your Pages project → Custom domains → add `allemanit.com` (and `www`). Cloudflare wires the records automatically.

## Before/after launch
- **Contact form webhook**: `src/pages/contact.astro` posts to `https://n8n.quickitprojects.com/webhook/allemanit-access` (placeholder). Confirm that n8n flow exists, or submissions will error.
- **Photo**: save as `public/me.jpg` (lowercase). iPhone exports `.JPEG` — rename it.
- Content/images are easy to edit later: project writeups are Markdown in `src/content/projects/`.
