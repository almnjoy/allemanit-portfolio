// One spine, two angles. Facts live once; only the framing changes per angle.
// /resume/        -> angles.general  (network engineer, broadly)
// /resume/cisco/  -> angles.cisco    (Cisco / solutions-engineer pitch, noindex)

export const links = [
  { href: 'https://www.linkedin.com/in/dustin-alleman/', label: 'LinkedIn' },
  { href: 'https://www.youtube.com/@Almnjoy', label: 'YouTube' },
  { href: 'https://github.com/almnjoy', label: 'GitHub' },
];

export const credentials = [
  { k: 'Based in', v: 'Chicago, IL (remote)' },
  { k: 'Experience', v: '10+ yrs networking, 5 in cloud-managed enterprise' },
  { k: 'Certifications', v: 'CCNA, CWNA, Meraki Specialist, CCNP (in progress)' },
  { k: 'Education', v: 'B.S. Business Management, WGU (Nov 2026)' },
  { k: 'Teaching', v: 'CCNA instructor, City Colleges of Chicago' },
  { k: 'Service', v: 'U.S. Marine Corps veteran' },
];

// Shared across both angles. Mirrors the skills blocks in the tailored resumes.
export const skills = [
  { k: 'Routing & switching', v: 'BGP, OSPF, EIGRP, 802.1Q VLANs, STP/RSTP, EtherChannel, QoS, route redistribution' },
  { k: 'Wireless & WAN', v: 'Enterprise wireless design (CWNA), RF planning, SD-WAN, IPSec VPN, ISP redundancy and failover' },
  { k: 'Security & access', v: 'Segmentation, ACL and firewall policy, Zero Trust, 802.1X, SSO/identity, multi-vendor edge' },
  { k: 'Automation & platform', v: 'Python, REST APIs, Docker, Kubernetes, Proxmox, Traefik, Grafana, n8n' },
  { k: 'Operations', v: 'Incident triage, root cause analysis, Wireshark, syslog and SNMP, change management, runbooks' },
  { k: 'Platforms', v: 'Cisco IOS/IOS-XE and Meraki (MX/MS/MR), Juniper, Palo Alto, Fortinet, Azure, Proxmox, Linux' },
];

// Timeline entries keyed so an angle can select and override.
const t = {
  usmc: {
    year: '2013-2017',
    title: 'U.S. Marine Corps, where it started',
    body: 'Cyber and network specialist. Learned to make mission-critical networks just work, under pressure.',
  },
  ccna: {
    year: '2019',
    title: 'CCNA and first network gig',
    body: 'Earned my CCNA at Mesa CC and moved into enterprise network admin at OneNeck across Cisco, Juniper, and Palo Alto.',
  },
  meraki: {
    year: '2021',
    title: 'Enterprise cloud networking',
    body: 'Moved into cloud-managed networking at scale: routing, switching, and wireless for enterprise customers.',
  },
  hightouch: {
    year: '2022',
    title: 'High Touch and started teaching',
    body: 'White-glove Fortune 500 support, and I started teaching CCNA at City Colleges of Chicago. Instantly hooked on the teaching.',
  },
  fedramp: {
    year: '2023',
    title: 'Federal networks',
    body: 'Technical lead for U.S. federal agency customers on a FedRAMP-authorized cloud platform. Compliance requirements on one side, mission uptime on the other.',
  },
  build: {
    year: '2024-2025',
    title: 'Build everything',
    body: 'A homelab that runs like production, AI agents, automation. If I could break it and learn it, I did.',
  },
  next: {
    year: '2026',
    title: "What's next",
    body: 'CCNP in progress, degree wrapping in November, and looking for the seat where design, automation, and customer-facing work all count.',
  },
};

export const angles = {
  general: {
    slug: '/resume/',
    pdf: '/Dustin-Alleman-Resume.pdf',
    umami: 'resume-download',
    indexable: true,
    title: 'Resume | Dustin Alleman',
    description:
      'Network engineer in Chicago. 10+ years across routing, switching, wireless, and cloud-managed infrastructure, plus the automation and labs built on top of it.',
    eyebrow: 'Network engineer, Chicago',
    blurb:
      'A decade of enterprise networking. I design it, run it, automate it, and build the tools and labs that prove it out.',
    why: {
      eyebrow: 'How I work',
      heading: 'Design it, run it, automate it, then explain it.',
      body: 'Ten years across help desk, network admin, enterprise support, and cloud-managed infrastructure. Routing, switching, and wireless at the packet level; containers, APIs, and automation on top. The last five years I have been the technical lead on Fortune 500 and federal agency networks, which means the job was never just the config: it was the root cause, the executive readout, and the runbook that kept it from happening twice.',
      note: 'Everything on <a href="/" class="text-brand-orange underline underline-offset-2">allemanit.com</a> is the proof: the homelab, the agents, the products, the labs.',
    },
    stats: [
      { n: '10+', l: 'years in networking' },
      { n: '5', l: 'years on F500 and federal networks' },
      { n: '3+', l: 'years teaching CCNA' },
      { n: '1', l: 'homelab run like prod' },
    ],
    timelineHeading: 'The road here',
    timelineSub: 'Marine Corps to enterprise networks to whatever the lab is breaking this week.',
    timeline: [t.usmc, t.ccna, t.meraki, t.hightouch, t.fedramp, t.build, t.next],
    ciscoLive: null,
    about: [
      "I'm Dustin. I've spent over a decade in IT: support, help desk, networking, engineering, infrastructure. It started long before the paycheck. I was the kid taking computers apart, breaking things and figuring out how to fix them. That curiosity turned into the career.",
      'I did IT in the Marine Corps, carried it through a few companies after that, and these days I work on cloud-managed enterprise networking in a FedRAMP environment. I came up on the hands-on side: packet captures, escalations, enterprise gear. The goal was always to design and own networks, not just support them, and to build the tools I wished I had along the way.',
      'So I build. Dashboards, AI agents, automation, a homelab that grew from scavenged gear into something that runs like production. A lot of it exists because I wanted the tool and nobody had made it yet, and because proving a thing out and explaining it clearly turns out to be most of the job. I also teach CCNA-level networking at colleges around Chicago, which is some of the most rewarding work I do.',
    ],
  },

  cisco: {
    slug: '/resume/cisco/',
    pdf: '/Dustin-Alleman-Resume-Cisco.pdf',
    umami: 'resume-download-cisco',
    indexable: false,
    title: 'Resume (Cisco) | Dustin Alleman',
    description:
      'Network engineer moving into solutions engineering. 10+ years in Cisco networking, a homelab that runs like production, and the tools I build on top of it.',
    eyebrow: 'Networking to solutions engineering, Chicago',
    blurb:
      'A decade in Cisco networking. I lead the technical relationship, translate it for whoever is in the room, and build the tools and labs to prove it out.',
    why: {
      eyebrow: 'Why solutions engineering',
      heading: 'Five years inside Cisco, and I still geek out about this stuff.',
      body: 'The portfolio keeps getting bigger and smarter, from Meraki and Catalyst to the whole AgenticOps and Cloud Control direction, and I get to teach it, break it in my lab, and help customers actually use it. Moving into a Solutions Engineer role is the natural next step: same passion, pointed at the solution and the sale.',
      note: 'Everything on <a href="/" class="text-brand-orange underline underline-offset-2">allemanit.com</a> is the proof: the homelab, the agents, the products, the labs.',
    },
    stats: [
      { n: '10+', l: 'years in networking' },
      { n: '5', l: 'years inside Cisco' },
      { n: '3+', l: 'years teaching CCNA' },
      { n: '1', l: 'homelab run like prod' },
    ],
    timelineHeading: 'The road here',
    timelineSub: 'Marine Corps to Cisco to the SE seat.',
    timeline: [
      t.usmc,
      t.ccna,
      { ...t.meraki, title: 'Joined Cisco (Meraki)', body: 'Made it to the mothership. Routing, switching, and wireless for enterprise customers.' },
      t.hightouch,
      { ...t.fedramp, title: 'FedRAMP team', body: 'Technical advisor for federal agencies on the Cisco FedRAMP cloud. Embedded-SE work, just without the title.' },
      t.build,
      { year: '2025', title: 'Cisco Live', body: 'My favorite week of the year. Ran into old colleagues, geeked out on the roadmap, came home with a list of things to try.' },
      { ...t.next, title: 'Next up: Solutions Engineer', body: 'CCNP in progress, degree wrapping in November, and aiming squarely at the SE seat.' },
    ],
    ciscoLive: {
      eyebrow: 'Cisco Live 2025',
      heading: 'My favorite week of the year.',
      body: 'Keynotes, the World of Solutions floor, sessions until my badge died, and running into people I have not seen in years. I come back every time with a notebook full of things to lab and a fresh read on where the portfolio is going.',
    },
    about: [
      "I'm Dustin. I've spent over a decade in IT: support, help desk, networking, engineering, infrastructure. It started long before the paycheck. I was the kid taking computers apart, breaking things and figuring out how to fix them. That curiosity turned into the career.",
      'I did IT in the Marine Corps, carried it through a few companies after that, and these days I work on Cisco networking in a FedRAMP environment. I came up on the hands-on side: packet captures, escalations, enterprise gear. The goal was always to architect and solution networks, not just support them, and to build the tools I wished I had along the way.',
      'So I build. Dashboards, AI agents, automation, a homelab that grew from scavenged gear into something that runs like production. A lot of it points at one goal: moving into a solutions engineer role, which is why so many of these projects are about proving a thing out and explaining it clearly. I also teach CCNA-level networking at colleges around Chicago, which is some of the most rewarding work I do.',
    ],
  },
};
