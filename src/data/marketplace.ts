// Single source of truth for the Elgato Marketplace page.
// Covers live in public/design-lab/marketplace/<slug>.png, 960x480 downscales of the hero that is LIVE on each listing
//   (1920x960) from BUSINESS/Brand-and-Marketing/ElgatoMarketplace/<product>/Gallery/. Published listings keep the
//   hero Elgato shows today (BF6 = Marketplace-2026-10-10, Tactical Circuit = original 2026-09-13 grid cover), not
//   the newest unsubmitted revision.
//
// 2026-10-14: catalog cut to the 14 products that exist in Maker Console (12 published, 2 pending review).
//   Every rejected or never-submitted listing was deleted from the console by Dustin; their site entries and
//   covers moved to ElgatoMarketplace/Archive/Website-Covers-Before-2026-10-14/. Library of record:
//   BUSINESS/Brand-and-Marketing/ElgatoMarketplace/README.md + START-HERE.html.
// Titles, categories, prices and URLs: read off the published listings / Maker Console. Taglines, alt text
//   and notes: condensed from each product's DESCRIPTION.txt / LISTING.json. Nothing here is written from scratch.
// status: live = published and purchasable; pending = submitted, Elgato review not finished, no public URL yet.

export type Product = {
  slug: string;                         // public/design-lab/marketplace/<slug>.png
  title: string;                        // exact listing title
  category: 'Icons' | 'Profiles' | 'Plugins';
  tagline: string;                      // one line, condensed from the listing copy
  alt: string;                          // describes the cover art
  note?: string;                        // constraint carried over from the listing itself
  price?: string;                       // current price on the listing, or the submitted price while pending
  url?: string;                         // canonical public listing URL (live only)
  status: 'live' | 'pending';
  version?: string;
  support?: string;
};

// The date every price and URL below was read off the listing pages / Maker Console.
export const observed = '14 October 2026';

export const storefront = 'https://marketplace.elgato.com/@almnjoy';

export const products: Product[] = [
  // Plugins first: they are the products with the most going on.
  {
    slug: 'range-finder',
    title: 'Range Finder Companion',
    category: 'Plugins',
    tagline: 'Map coordinates, bearing, distance and supply requests on one Stream Deck key for WARDOGS players, with 15-key and XL profiles, three styles, calibration reset and input troubleshooting.',
    alt: 'Range Finder Companion cover: a Stream Deck photographed on a desk showing set, reset, ammo, supply, zoom and bearing keys.',
    note: 'Independent companion for WARDOGS, not an official game product. Range uses captured coordinates and the configured map scale; ballistic elevation is not calculated.',
    price: '$3.99',
    url: 'https://marketplace.elgato.com/product/range-finder-companion-dc521771-db4a-4fd7-a462-22f3790a043b',
    status: 'live',
    version: '0.7.0',
    support: '/support/range-finder/',
  },
  {
    slug: 'bf6-field-kit',
    title: 'BF6 Field Kit',
    category: 'Plugins',
    tagline: 'A 15-key infantry layout with its own companion plugin for Battlefield 6 players: map, scoreboard, ping, interact, reload, weapon and gadget slots, plus a manual round timer and Steam player count.',
    alt: 'BF6 Field Kit cover: a Stream Deck with map, scoreboard, ping, reload and weapon slot keys in white line art over a ruined city.',
    note: 'Independent AllemanIT work, not an official Battlefield or EA product. Key bindings are configurable shortcuts; in-game defaults may differ.',
    price: '$3.99',
    url: 'https://marketplace.elgato.com/product/bf6-field-kit-515cf902-34bf-4cb4-a42b-b09b987cb43d',
    status: 'live',
    version: '1.0.0',
  },

  // Profiles
  {
    slug: 'wardogs-tactical-circuit',
    title: 'WARDOGS - Tactical Circuit',
    category: 'Profiles',
    tagline: 'Tactical Circuit artwork for WARDOGS on a 15-key Stream Deck: infantry, vehicle, helicopter and building sets, ivory symbols on orange and blue circuits.',
    alt: 'WARDOGS - Tactical Circuit cover: fifteen ivory tactical symbols on orange and blue circuit fragments, Your deck, your control.',
    note: 'Independent ALMNJOY work, not an official WARDOGS, BULKHEAD or Elgato product. Button images are static and do not report live game state.',
    price: '$1.99',
    url: 'https://marketplace.elgato.com/product/wardogs-tactical-circuit-f5fee548-35a8-4015-92a6-b42bf4534821',
    status: 'live',
  },

  // Icon packs, published
  {
    slug: 'quest-journal',
    title: 'Quest Journal',
    category: 'Icons',
    tagline: '64 static designs for RPG players and tabletop hosts: quest journal, map, party, ready check, backpack, dice.',
    alt: 'Quest Journal cover: a Stream Deck photographed on a desk showing the pack artwork.',
    note: 'Original artwork, not affiliated with any game publisher.',
    price: '$4.99',
    url: 'https://marketplace.elgato.com/product/quest-journal-c434f149-c56a-4851-90d3-163ec5b77ec7',
    status: 'live',
  },
  {
    slug: 'prompt-bench',
    title: 'Prompt Bench',
    category: 'Icons',
    tagline: '56 static designs for writers and educators who arrange their own AI-assisted workflows: summarize, rewrite, translate, dictate, review.',
    alt: 'Prompt Bench cover: a Stream Deck photographed on a desk showing the pack artwork.',
    price: '$4.99',
    url: 'https://marketplace.elgato.com/product/prompt-bench-007f17e6-d576-4cb4-a705-437b049908b8',
    status: 'live',
  },
  {
    slug: 'pocket-gremlins',
    title: 'Pocket Gremlins',
    category: 'Icons',
    tagline: '24 static designs and 24 animated alternatives of an original sprout-eared creature: coffee, be right back, quiet please, rage pause, applause.',
    alt: 'Pocket Gremlins cover: a Stream Deck photographed on a desk showing the pack artwork.',
    note: 'Animations are decorative and run independently of actions.',
    price: '$3.99',
    url: 'https://marketplace.elgato.com/product/pocket-gremlins-44745cc4-856f-4e4f-9888-8dcfe5fb053b',
    status: 'live',
  },
  {
    slug: 'meeting-mode',
    title: 'Meeting Mode',
    category: 'Icons',
    tagline: '48 static designs for remote workers and educators: microphone, camera, screen share, hand raise, agenda, captions, breaks.',
    alt: 'Meeting Mode cover: a Stream Deck photographed on a desk showing the pack artwork.',
    price: '$3.99',
    url: 'https://marketplace.elgato.com/product/meeting-mode-e4ed008e-bc4b-45b5-806d-d1b395202f65',
    status: 'live',
  },
  {
    slug: 'long-haul',
    title: 'Long Haul',
    category: 'Icons',
    tagline: '72 static designs for truck simulator players: wipers, headlights, hazards, parking brake, cruise, retarder, trailer, coupling.',
    alt: 'Long Haul cover: a Stream Deck photographed on a desk showing the pack artwork.',
    note: 'Original artwork, not affiliated with any game publisher.',
    price: '$4.99',
    url: 'https://marketplace.elgato.com/product/long-haul-1a827cd7-170c-4a42-bdd7-2dd492abc0f0',
    status: 'live',
  },
  {
    slug: 'home-glow',
    title: 'Home Glow (V2 coming)',
    category: 'Icons',
    tagline: '64 static designs and 24 animated alternatives for room and lighting control: desk lights, reading, cinema, curtains, fan, heating.',
    alt: 'Home Glow cover: a Stream Deck photographed on a desk showing the pack artwork.',
    note: 'Animations are decorative and run independently of actions.',
    price: '$5.99',
    url: 'https://marketplace.elgato.com/product/home-glow-d4706fa6-8ec8-4bbb-b845-7e3aaa4019d0',
    status: 'live',
  },
  {
    slug: 'hearth-pixels',
    title: 'Hearth Pixels',
    category: 'Icons',
    tagline: '48 static designs and 48 animated alternatives in original pixel art: backpack, crafting, map, journal, lantern, watering can, chest.',
    alt: 'Hearth Pixels cover: a Stream Deck photographed on a desk showing the pack artwork.',
    note: 'Original artwork, not affiliated with any game publisher. Animations are decorative.',
    price: '$5.99',
    url: 'https://marketplace.elgato.com/product/hearth-pixels-de07261b-2ac5-487f-b2a6-15110b2ba069',
    status: 'live',
  },
  {
    slug: 'cutroom',
    title: 'Cutroom',
    category: 'Icons',
    tagline: '80 static designs for video editors and film students: blade, ripple trim, roll, slip, markers, in and out points, snapping, export.',
    alt: 'Cutroom cover: a Stream Deck photographed on a desk showing the pack artwork.',
    price: '$5.99',
    url: 'https://marketplace.elgato.com/product/cutroom-34b38344-e275-4e11-af93-afb055873edc',
    status: 'live',
  },
  {
    slug: 'packet-lab',
    title: 'Packet Lab',
    category: 'Icons',
    tagline: '80 static designs for network engineers, homelab builders and IT support: DNS lookup, ping, packet capture, subnet planning, VPN, racks.',
    alt: 'Packet Lab cover: a Stream Deck photographed on a desk showing the pack artwork.',
    price: '$5.99',
    url: 'https://marketplace.elgato.com/product/packet-lab-45717b3a-be56-4aa6-ac42-74fde83d2f86',
    status: 'live',
  },

  // Icon packs, submitted and waiting on Elgato. No public URL until approved.
  {
    slug: 'on-air-motion',
    title: 'On Air Motion',
    category: 'Icons',
    tagline: '30 studio designs for streamers, podcasters and creators, each with two static states (60 PNGs), plus 8 animated GIFs: microphone, camera, recorder, bell, mixer, music, live antenna, coffee break.',
    alt: 'On Air Motion cover: six studio icons in charcoal, cream and orange, including a microphone, camera, mixer and coffee cup.',
    note: 'GIF motion is decorative. Automatic state changes need an action or plugin that supports them.',
    price: '$6.99',
    status: 'pending',
    version: '1.0.0',
  },
  {
    slug: 'war-pack-animated-icons',
    title: 'War Pack Animated Icons',
    category: 'Icons',
    tagline: '40 animated GIF designs with 40 matching static PNGs of realistic military artwork for shooter setups: infantry, vehicles, helicopters, weapons, ammunition, maps, movement, comms.',
    alt: 'War Pack Animated Icons cover: a Stream Deck photographed on a desk showing soldiers, vehicles, helicopters and weapons.',
    note: 'Word-free artwork, not affiliated with any game developer. Animations are decorative loops, not live game status. Icon collection only, no profile or plugin.',
    price: '$2.99',
    status: 'pending',
    version: '1.0.0',
  },
];

export const counts = {
  total: products.length,
  live: products.filter((p) => p.status === 'live').length,
  pending: products.filter((p) => p.status === 'pending').length,
};
