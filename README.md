# AllemanIT Portfolio (allemanit.com)

Astro static site. Markdown-driven projects, deploys to Cloudflare Pages.

## Edit content
Projects live as Markdown in `src/content/projects/*.md`. Add a file, set frontmatter, done.

## Run locally
```
npm install
npm run dev
```

## Deploy (Cloudflare Pages, free)
1. Push this folder to a GitHub repo (public or private).
2. Cloudflare dashboard > Workers & Pages > Create > Pages > connect the repo.
3. Build command: `npm run build` — Output dir: `dist`.
4. Add custom domain `allemanit.com` (move the domain's DNS to Cloudflare first).

## Before launch
- Set the YouTube URL: replace `YOUTUBE_URL_TBD` in `src/components/Footer.astro` and `src/pages/index.astro`.
- Confirm the access-form webhook in `src/pages/contact.astro` (`WEBHOOK_URL`) points at a live n8n flow.

## Your photo
Drop a portrait at `public/me.jpg` (portrait orientation, ~800x1000). Until you do, a placeholder shows.
