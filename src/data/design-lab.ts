// Single source of truth for everything the Design Lab shows.
// Shots live in public/design-lab/shots/<img>.jpg, 1440x900 captures.

export type Site = {
  img: string;
  title: string;
  stack: string;      // used for the filter chips, keep the vocabulary small
  note: string;
  url: string;
  story?: string;     // internal project page, when one exists
  year?: string;
};

export const production: Site[] = [
  { img: 'quickit-v2', title: 'quickitprojects.com', stack: 'React', note: 'The consulting front door. Intake form posts to n8n, which files it in Twenty CRM. Redesigned September 2026.', url: 'https://quickitprojects.com', year: '2026' },
  { img: 'madeformeai', title: 'madeformeai.com', stack: 'React', note: 'Product site for the hosted AI workspace. Signup flows through Authentik.', url: 'https://madeformeai.com', year: '2026' },
  { img: 'allemanit', title: 'allemanit.com', stack: 'Astro', note: 'This site. Content collections for projects and the blog, a daily page that feeds itself, and this lab.', url: '/', year: '2026' },
  { img: 'packet-labs', title: 'allemanit.com/packet-labs', stack: 'Static', note: 'Six guided Wireshark labs with synthetic traces. No backend, no dependencies.', url: '/packet-labs/', year: '2026' },
  { img: 'family-zone', title: 'family.allemanit.com', stack: 'Flask', note: 'Calendar, recipes, resources, a helper you can talk to. Family only, behind Authentik.', url: '/family', story: '/family', year: '2026' },
  { img: 'allemanac', title: 'allemanac.allemanit.com', stack: 'Python', note: 'A private wardrobe almanac. Catalogue the closet, build an outfit, and see it on a real body reference with an AI try-on. Mine only, behind Authentik.', url: 'https://allemanac.allemanit.com', year: '2026' },
];

export const clients: Site[] = [
  { img: 'boltbrow', title: 'boltbrow.madeformeai.com', stack: 'Static', note: 'Redesign for a five-artist permanent makeup studio in Philadelphia. Booking, artists, prep and aftercare, all of it phone-first.', url: 'https://boltbrow.madeformeai.com', year: '2026' },
  { img: 'opusdiecast', title: 'opusdiecastmi.com', stack: 'Static', note: 'A diecast collector\'s public catalogue with a private vault behind it. Cars get in by filming the shelf.', url: 'https://opusdiecastmi.com', story: '/design-lab/opus/', year: '2026' },
  { img: 'skate-map', title: 'skate-map.com', stack: 'Static', note: 'A world map of skate crews, night skates and rinks. 900-plus communities in 48 countries, seeded from real links only.', url: 'https://skate-map.com', year: '2026' },
  { img: 'lumara', title: 'lumarafunctional.com', stack: 'Static', note: 'Bilingual site for a functional nutrition coach. Calm, earthy, and it reads right in Spanish first.', url: 'https://lumarafunctional.com', year: '2026' },
  { img: 'allemanchildcare', title: 'allemanchildcare.com', stack: 'Static', note: 'A licensed in-home childcare in Holt, Michigan. Warm, hand-drawn, built to be read on a parent\'s phone.', url: 'https://allemanchildcare.com', year: '2026' },
];

export const personal: Site[] = [
  { img: 'almnjoy', title: 'almnjoy.dev', stack: 'Static', note: 'A Windows 98 desktop as a personal site. Windows open, the Start menu works.', url: 'https://almnjoy.dev', year: '2025' },
  { img: '66unique', title: '66 Unique Antiques (concept)', stack: 'Static', note: 'An unofficial redesign for an antique mall in Nashville, Michigan. Built as a demo, clearly labeled as one.', url: '/66unique/', year: '2026' },
  { img: 'old-blog', title: 'almnjoy.dev, the WordPress era', stack: 'WordPress', note: 'The Win98 theme on WordPress, fed by an n8n + GPT drafting pipeline. Killed in July for markdown and git.', url: '/blog/killed-my-windows-98-blog', year: '2025' },
];

export const quickitVersions = [
  { img: 'quickit-v1', title: 'V1, the one that shipped in July', note: 'Nine equal service cards, blue and orange fighting for the eye. Fine. Not great.' },
  { img: 'quickit-c01', title: 'Concept 01, Project Desk', note: 'Three starting problems ahead of the catalog, the owner up front. The base for what shipped.' },
  { img: 'quickit-c02', title: 'Concept 02, Control Room', note: 'Dark, technical, dense. Right for a tooling page, wrong for a small-business front door.' },
  { img: 'quickit-c03', title: 'Concept 03, Field Notes', note: 'Editorial and personal. Reads like the Daily page. Too quiet for a sales site.' },
  { img: 'quickit-c04', title: 'Concept 04, Orange Studio', note: 'The orange personality I liked, borrowed into the winner as the action labels.' },
  { img: 'quickit-v2', title: 'V2, live now', note: 'Concept 01 plus 04\'s labels, the real speedometer mark, an interactive project desk, and an inquiry demo that is labeled as a demo.' },
];

export const allemanitVersions = [
  { img: 'allemanit-terminal', title: 'Terminal', note: 'This site as a shell prompt. whoami.sh and all.', url: '/design1/' },
  { img: 'allemanit-profile', title: 'Editorial profile', note: 'Serif, numbered sections, magazine pacing. This voice became /daily.', url: '/design2/' },
  { img: 'allemanit-swiss', title: 'Swiss', note: 'Grid, one accent, nothing decorative.', url: '/design3/' },
  { img: 'allemanit-comic', title: 'Comic', note: 'Hard outlines and drop shadows. Fun for a week.', url: '/design4/' },
];

export const journey = [
  { when: 'WordPress years', what: 'Themes, plugins, a page builder on top of a page builder.', lesson: 'Every site was a maintenance job. Updates broke things, plugins fought each other, and the attack surface grew with every feature I bolted on. Not to mention the hours sunk into bending it to look the way I wanted without paying for one more plugin.' },
  { when: 'The vibe-coder phase', what: 'Hostinger Horizons, Replit, Lovable: describe the site or app and get one.', lesson: 'A great learning point and my pivot into AI. But the builders lock you into their platform, the plans are ugly, and every site comes out looking like the same SaaS template.' },
  { when: 'GitHub + Cloudflare Pages', what: 'Every site is a repo. A push is a deploy.', lesson: 'Framework picked per job: Astro for content sites, React where the page is an app, plain HTML when it should just be a file. Brand tokens shared across all of them.' },
  { when: 'The lab', what: 'Managing the stack.', lesson: 'Full control of the stack, free Cloudflare Pages, and my own design engine. It\'s all fun from here.' },
];

export const patterns = ['Navigation with a single CTA', 'Intake and contact forms wired to n8n', 'Docs portals (Mintlify)', 'Auth behind Authentik', 'Dashboards and status pages', 'Scheduling (cal.com)', 'Chat widgets', 'Lead-capture landing pages', 'Brand tokens synced into every repo', 'Public site, private vault, one database'];

export const counts = {
  sites: production.length + clients.length + personal.length,
  versions: quickitVersions.length + allemanitVersions.length,
  skins: 32,
};
