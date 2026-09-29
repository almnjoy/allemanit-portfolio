// Repos I run on. Public page: /repos
// Source of truth for the list: PRODUCTION-1 review doc github-repos-inventory.md (2026-09-28).
// Rules: only things actually deployed or used. No hostnames, no IPs, no private lab tools.
// status: 'running' = deployed on a box right now, 'daily' = a tool I use, 'tried' = ran it, moved on.

export type RepoStatus = 'running' | 'daily' | 'tried';
export interface Repo { slug: string; name?: string; url?: string; why: string; status: RepoStatus; where?: string; pick?: boolean; projects?: string[] }
export interface RepoGroup { id: string; title: string; blurb: string; repos: Repo[] }

export const reviewed = 'September 2026';

export const groups: RepoGroup[] = [
  {
    id: 'ai',
    title: 'AI and agents',
    blurb: 'The agent layer. Most of what I build lately is some mix of these talking to each other.',
    repos: [
      { slug: 'openclaw/openclaw', projects: ['ai-agents', 'madeformeai'], why: 'My everything-agent lives here. Email, shopping, phone calls, fleet checks, all from a chat thread.', status: 'running', where: 'Cloud box', pick: true },
      { slug: 'paperclipai/paperclip', projects: ['ai-agents'], why: 'Runs my agent company: six agents with roles, tickets and handoffs instead of one giant chat.', status: 'running', where: 'Cloud box', pick: true },
      { slug: 'anthropics/claude-code', projects: ['ai-agents'], why: 'Daily driver. Most of this site, the fleet docs and the brain repo got written through it.', status: 'daily', where: 'Every machine' },
      { slug: 'openai/codex', projects: ['ai-agents'], why: 'Second lane. Codex builds a drop, Claude integrates and ships it.', status: 'daily', where: 'Workstation' },
      { slug: 'open-webui/open-webui', projects: ['homelab'], why: 'Private chat front end for every model I pay for or run locally.', status: 'running', where: 'Homelab' },
      { slug: 'BerriAI/litellm', projects: ['homelab'], why: 'One OpenAI-shaped endpoint in front of all of them, so apps never care which model answers.', status: 'running', where: 'Homelab' },
      { slug: 'ollama/ollama', projects: ['homelab'], why: 'Local models on the lab GPU.', status: 'running', where: 'GPU VM' },
      { slug: 'Comfy-Org/ComfyUI', why: 'Image and video generation on the workstation GPU. Node graphs beat prompt roulette.', status: 'daily', where: 'Workstation' },
      { slug: 'THU-MAIC/OpenMAIC', projects: ['ccnp-study-bot'], why: 'Turns a cert blueprint into an interactive class with AI teachers. My study lab.', status: 'daily', where: 'Workstation', pick: true },
      { slug: 'jamiepine/voicebox', why: 'Local voice cloning and TTS. It narrates my demo videos.', status: 'daily', where: 'Workstation' },
      { slug: 'vercel-labs/agent-browser', projects: ['ai-agents'], why: 'A real browser an agent can drive without me babysitting a Selenium script.', status: 'running', where: 'Homelab' },
      { slug: 'm1k1o/neko', projects: ['ai-agents'], why: 'Shared browser in a container. I can watch the agent click, and take over when it gets stuck.', status: 'running', where: 'Cloud box' },
      { slug: 'openclaw/gogcli', why: 'Google Workspace from the command line. How my agent reads and sends mail.', status: 'daily' },
    ],
  },
  {
    id: 'business',
    title: 'Business stack',
    blurb: 'What runs QuickIT and MadeForMeAI. All self-hosted, all open source.',
    repos: [
      { slug: 'twentyhq/twenty', projects: ['quickit-sales', 'pocketops'], why: 'The hub. CRM, projects board, sales, newsletters. Four instances, two of them for paying clients.', status: 'running', where: 'Cloud boxes', pick: true },
      { slug: 'n8n-io/n8n', projects: ['quickit-sales', 'ai-agents'], why: 'Glue for everything: lead intake, email, calls, nightly jobs. Two instances, one personal, one business.', status: 'running', where: 'Homelab + cloud', pick: true },
      { slug: 'calcom/cal.diy', projects: ['quickit-sales'], why: 'Booking. The MIT community fork now that Cal.com went closed.', status: 'running', where: 'Cloud box' },
      { slug: 'gitroomhq/postiz-app', why: 'Social scheduling. Agents draft, I approve, Postiz posts.', status: 'running', where: 'Cloud box' },
      { slug: 'docusealco/docuseal', why: 'E-signatures for contracts without paying per envelope.', status: 'running', where: 'Cloud box' },
      { slug: 'umami-software/umami', why: 'Cookieless analytics on all four of my sites, including this one.', status: 'running', where: 'VPS' },
      { slug: 'karakeep-app/karakeep', why: 'Bookmarks with AI tagging. Where links go instead of 40 open tabs.', status: 'running', where: 'VPS' },
      { slug: 'paperless-ngx/paperless-ngx', why: 'Scanned mail and documents, OCRd and searchable.', status: 'running', where: 'Homelab' },
    ],
  },
  {
    id: 'infra',
    title: 'Infrastructure and identity',
    blurb: 'The plumbing. Edge, identity, secrets, overlay network. The stuff that has to just work.',
    repos: [
      { slug: 'tailscale/tailscale', projects: ['homelab', 'network-design'], why: 'The overlay for the whole fleet, with two subnet routers so losing one box never cuts off the lab.', status: 'running', where: 'Everywhere', pick: true },
      { slug: 'goauthentik/authentik', projects: ['homelab', 'madeformeai'], why: 'SSO for two brands and the homelab. Social login, MFA, per-brand recovery email.', status: 'running', where: 'Homelab + cloud', pick: true },
      { slug: 'traefik/traefik', projects: ['homelab'], why: 'Edge proxy for the homelab. Labels in, routes out.', status: 'running', where: 'Homelab' },
      { slug: 'caddyserver/caddy', projects: ['madeformeai'], why: 'Edge for the cloud boxes. Automatic TLS and a config I can read.', status: 'running', where: 'Cloud boxes' },
      { slug: 'Infisical/infisical', projects: ['homelab'], why: 'Every app secret, pushed from the box it lives on. Nothing lives only in a .env.', status: 'running', where: 'Homelab' },
      { slug: 'dani-garcia/vaultwarden', projects: ['homelab'], why: 'Account logins. Bitwarden clients, my server.', status: 'running', where: 'Homelab' },
      { slug: 'AdguardTeam/AdGuardHome', projects: ['homelab', 'network-design'], why: 'LAN DNS, twice, so one reboot never takes the house offline.', status: 'running', where: 'Homelab' },
      { slug: 'deuxfleurs-org/garage', projects: ['homelab'], name: 'Garage', url: 'https://git.deuxfleurs.fr/Deuxfleurs/garage', why: 'S3 for every CRM attachment. Replaced MinIO when upstream went quiet.', status: 'running', where: 'Cloud + homelab' },
      { slug: 'getarcaneapp/arcane', why: 'Docker UI across every box, when I want to look instead of type.', status: 'running', where: 'Cloud box' },
      { slug: 'lejianwen/rustdesk-server', why: 'Self-hosted remote desktop. The fork, on purpose: it answers client logins the stock server does not.', status: 'running', where: 'VPS' },
      { slug: 'jetkvm/kvm', projects: ['homelab'], why: 'Out-of-band console on the Proxmox host. BIOS changes from a browser.', status: 'running', where: 'Homelab' },
      { slug: 'searxng/searxng', projects: ['ai-agents'], why: 'Private web search for the agents. No API key, no rate limit surprises.', status: 'running', where: 'Three boxes' },
    ],
  },
  {
    id: 'observability',
    title: 'Monitoring and dashboards',
    blurb: 'How I know something broke before someone texts me.',
    repos: [
      { slug: 'grafana/grafana', projects: ['homelab'], why: 'Dashboards and alerts to Discord. The Container DOWN rule stays strict on purpose.', status: 'running', where: 'Homelab' },
      { slug: 'grafana/loki', projects: ['homelab'], why: 'Logs from every box in one place.', status: 'running', where: 'Homelab' },
      { slug: 'grafana/alloy', why: 'The collector that ships them.', status: 'running', where: 'Homelab + cloud' },
      { slug: 'TwiN/gatus', projects: ['homelab'], why: 'Outside-in uptime checks from a box that is not in the lab.', status: 'running', where: 'VPS', pick: true },
      { slug: 'gethomepage/homepage', projects: ['homelab'], why: 'One tile per service. If it is not on Homepage, it does not exist.', status: 'running', where: 'Homelab' },
      { slug: 'getwud/wud', why: 'Tells me when an image has an update. I decide when to take it.', status: 'running', where: 'Homelab' },
    ],
  },
  {
    id: 'home',
    title: 'Home, media and fun',
    blurb: 'The off-the-clock half of the lab.',
    repos: [
      { slug: 'immich-app/immich', why: 'Family photos off Google, on my NAS, with face search that actually works.', status: 'running', where: 'NAS', pick: true },
      { slug: 'home-assistant/core', why: 'Smart home. Runs on the NAS so it survives a lab rebuild.', status: 'running', where: 'NAS' },
      { slug: 'chrisbenincasa/tunarr', projects: ['media-stack'], why: 'Ten live TV channels built from my own library, with commercials. Plex tunes them like cable.', status: 'running', where: 'GPU VM', pick: true },
      { slug: 'Sonarr/Sonarr', projects: ['media-stack'], why: 'TV library automation.', status: 'running', where: 'Homelab' },
      { slug: 'Radarr/Radarr', projects: ['media-stack'], why: 'Same, for movies.', status: 'running', where: 'Homelab' },
      { slug: 'seerr-team/seerr', projects: ['media-stack'], why: 'Family asks for a show here instead of texting me.', status: 'running', where: 'Homelab' },
      { slug: 'Tautulli/Tautulli', projects: ['media-stack'], why: 'Who watched what, and when the server is actually busy.', status: 'running', where: 'Homelab' },
      { slug: 'Yooooomi/your_spotify', why: 'My real listening stats. The lanes on my music page are cut from it.', status: 'running', where: 'Homelab' },
      { slug: 'koala73/worldmonitor', why: 'A global news and events wall. Fun to leave on a second screen.', status: 'running', where: 'Homelab' },
      { slug: 'bilawalsidhu/gods-eye-view', why: 'Live public data on a 3D globe. Flights, satellites, cameras.', status: 'running', where: 'Homelab' },
      { slug: 'excalidraw/excalidraw', projects: ['network-design'], why: 'Whiteboard for every network diagram before it becomes a real one.', status: 'running', where: 'Homelab' },
    ],
  },
  {
    id: 'build',
    title: 'What my own stuff is built on',
    blurb: 'Frameworks under the projects on this site.',
    repos: [
      { slug: 'withastro/astro', why: 'This site. Static pages, content collections, zero JS unless a page asks for it.', status: 'daily' },
      { slug: 'tailwindlabs/tailwindcss', why: 'Styling here and on MadeForMeAI.', status: 'daily' },
      { slug: 'expo/expo', projects: ['pocketops'], why: 'PocketOps, my Twenty CRM app on the App Store, built from a Windows box.', status: 'daily', pick: true },
      { slug: 'mrdoob/three.js', why: 'The 3D board in CrackTown and the desk in Life as Dustin.', status: 'daily' },
      { slug: 'microsoft/playwright', why: 'Screenshots, demo videos and the mobile audit this page came out of.', status: 'daily' },
      { slug: 'cloudflare/workers-sdk', why: 'Wrangler. Every push to this repo deploys through it.', status: 'daily' },
      { slug: 'elgatosf/streamdeck', why: 'Packing and validating my Stream Deck plugins for the Elgato Marketplace.', status: 'daily' },
    ],
  },
  {
    id: 'kits',
    title: 'Skills and prompt kits',
    blurb: 'Small repos that change how the AI writes and draws.',
    repos: [
      { slug: 'hardikpandya/stop-slop', why: 'Runs on every piece of prose I publish. It is why this page does not sound like a chatbot.', status: 'daily', pick: true },
      { slug: 'cathrynlavery/diagram-design', why: 'Architecture and flow diagrams in my brand colors instead of default boxes and arrows.', status: 'daily' },
      { slug: 'anthropics/skills', why: 'The reference for writing my own skills: handoff, SEO pass, branded docs.', status: 'daily' },
    ],
  },
  {
    id: 'tried',
    title: 'Tried and moved on',
    blurb: 'Good projects that did not stick for me. Part of the list on purpose.',
    repos: [
      { slug: 'NousResearch/hermes-agent', why: 'Ran it as an always-on agent for a while, then consolidated on OpenClaw.', status: 'tried' },
      { slug: 'minio/minio', why: 'Object storage for years. Swapped for Garage once the community edition stopped shipping.', status: 'tried' },
      { slug: 'containrrr/watchtower', why: 'Auto-updates. Archived upstream, and I would rather choose when things update.', status: 'tried' },
      { slug: 'topoteretes/cognee', why: 'Knowledge-graph memory for agents. A plain markdown brain in git won.', status: 'tried' },
    ],
  },
];

export const all = groups.flatMap((g) => g.repos);
export const counts = {
  total: all.length,
  running: all.filter((r) => r.status === 'running').length,
  groups: groups.length,
};
export const repoUrl = (r: Repo) => r.url ?? `https://github.com/${r.slug}`;
export const repoName = (r: Repo) => r.name ?? r.slug.split('/')[1];
export const repoOwner = (r: Repo) => (r.url ? '' : r.slug.split('/')[0]);

export const repoId = (r: Repo) => r.slug.replace(/[^a-z0-9]+/gi, '-').toLowerCase();
export const reposFor = (project: string) => all.filter((r) => r.projects?.includes(project) && r.status !== 'tried');
