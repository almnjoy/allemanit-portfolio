// Single source of truth for the Elgato Marketplace page.
// Covers live in public/design-lab/marketplace/<slug>.png, 960x480 crops of the listing covers.
//
// Titles, categories, prices and URLs: Scout's verified listing facts, observed 2026-09-25.
//   /opt/paperclip/work/shared-out/2026-09-25-elgato-listing-facts/findings.md
// Taglines, alt text and notes: condensed from the approved listing copy in
//   /opt/paperclip/work/reference/elgato/art/<slug>/DESCRIPTION.txt (or description.txt / LISTING-COPY.txt).
// Nothing here is written from scratch. Adding a product is one object in `products`.

export type Product = {
  slug: string;                         // public/design-lab/marketplace/<slug>.png
  title: string;                        // exact published listing title
  category?: 'Icons' | 'Profiles';      // Marketplace category, omitted when there is no listing to read it from
  tagline: string;                      // one line, condensed from the approved listing copy
  alt: string;                          // describes the cover art
  note?: string;                        // constraint carried over from the listing itself
  price?: string;                       // current price shown on the listing, not a quote from us
  url?: string;                         // canonical public listing URL
  status: 'live' | 'coming-soon';
  version?: string;
};

// The date every price and URL below was read off the listing pages.
export const observed = '25 September 2026';

export const storefront = 'https://marketplace.elgato.com/@almnjoy';

export const products: Product[] = [
  {
    slug: 'quest-journal',
    title: 'Quest Journal',
    category: 'Icons',
    tagline: '64 static designs for RPG players and tabletop hosts: quest journal, map, party, ready check, backpack, dice.',
    alt: 'Quest Journal cover: fifteen Stream Deck keys in charcoal with ivory equipment silhouettes and muted gold, showing a book, scroll, map, compass, pin, party, ready check, backpack, chest, key, door, tent, bed, cloak and boot.',
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
    alt: 'Prompt Bench cover: fifteen Stream Deck keys with cream folded-paper symbols on ink blue, in violet and apricot, showing summarize, rewrite, translate, question, idea, compare, quote, sources, library, dictate, approve, search, duplicate, reject and notes.',
    price: '$4.99',
    url: 'https://marketplace.elgato.com/product/prompt-bench-007f17e6-d576-4cb4-a705-437b049908b8',
    status: 'live',
  },
  {
    slug: 'pocket-gremlins',
    title: 'Pocket Gremlins',
    category: 'Icons',
    tagline: '24 static designs and 24 animated alternatives of an original sprout-eared creature: coffee, be right back, quiet please, rage pause, applause.',
    alt: 'Pocket Gremlins cover: fifteen Stream Deck keys on plum, each with an ivory sprout-eared creature holding coffee, a clock, a muted microphone, a pause bar, a star, applause, a phone, sleep, a warning, notes, a camera, music, bread, a heart and a cross.',
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
    alt: 'Meeting Mode cover: fifteen Stream Deck keys in soft charcoal with cream, sage green and coral symbols for microphone, camera, hand raise, screen share, participants, agenda, notes, calendar, chat, captions, headphones, volume, record and leave.',
    price: '$3.99',
    url: 'https://marketplace.elgato.com/product/meeting-mode-e4ed008e-bc4b-45b5-806d-d1b395202f65',
    status: 'live',
  },
  {
    slug: 'long-haul',
    title: 'Long Haul',
    category: 'Icons',
    tagline: '72 static designs for truck simulator players: wipers, headlights, hazards, parking brake, cruise, retarder, trailer, coupling.',
    alt: 'Long Haul cover: fifteen Stream Deck keys in warm enamel panels with ivory controls and brass accents, showing engine, ignition, headlights, beams, hazards, wipers, horn, parking brake, differential lock, speedometer, retarder, axles, trailer and gear shift.',
    note: 'Original artwork, not affiliated with any game publisher.',
    price: '$4.99',
    url: 'https://marketplace.elgato.com/product/long-haul-1a827cd7-170c-4a42-bdd7-2dd492abc0f0',
    status: 'live',
  },
  {
    slug: 'home-glow',
    title: 'Home Glow',
    category: 'Icons',
    tagline: '64 static designs and 24 animated alternatives for room and lighting control: desk lights, reading, cinema, curtains, fan, heating.',
    alt: 'Home Glow cover: fifteen Stream Deck keys in deep indigo with opal lamps and peach light spill, showing desk lamps, pendant lights, a reading lamp, a screen, a heater, brightness, bulbs, curtains, a ceiling fan and a radiator.',
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
    alt: 'Hearth Pixels cover: fifteen Stream Deck keys in forest green with cream, moss and peach pixel art, showing a backpack, a tool, a map, a book, a bag, a watering can, a chest, a sign, music, a bed, a coffee cup, a seedling, a leaf, a flower and a tree.',
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
    alt: 'Cutroom cover: fifteen Stream Deck keys in ink black with cream clip panels, cyan highlights and chartreuse cut marks, showing blade, ripple trim, roll, slip, slide, select, transform, in point, out point, marker, add marker, list, magnet snapping, link and unlink.',
    price: '$5.99',
    url: 'https://marketplace.elgato.com/product/cutroom-34b38344-e275-4e11-af93-afb055873edc',
    status: 'live',
  },
  {
    slug: 'packet-lab',
    title: 'Packet Lab',
    category: 'Icons',
    tagline: '80 static designs for network engineers, homelab builders and IT support: DNS lookup, ping, packet capture, subnet planning, VPN, racks.',
    alt: 'Packet Lab cover: fifteen Stream Deck keys on graphite with ivory topology symbols, mint indicators and amber details, showing a topology tree, a switch, a router, a disc, a rack shelf, a patch panel, a server, a stack, a VPN tunnel, wifi, a globe and network maps.',
    price: '$5.99',
    url: 'https://marketplace.elgato.com/product/packet-lab-45717b3a-be56-4aa6-ac42-74fde83d2f86',
    status: 'live',
  },
  {
    slug: 'wardogs-tactical-circuit',
    title: 'WARDOGS - Tactical Circuit',
    // The listing sits under Profiles on Elgato's shelf, but it delivers the icon
    // library. Dustin confirmed 2026-09-25; the chip describes what the buyer gets.
    category: 'Icons',
    tagline: 'Tactical Circuit artwork for WARDOGS on a 15-key Stream Deck: infantry, vehicle, helicopter and building sets, ivory symbols on orange and blue circuits.',
    alt: 'WARDOGS Tactical Circuit cover: fifteen badge icons in ivory with orange and blue circuit bursts, labelled infantry, vehicles, heli, building, map, inventory, squad, local, tip and bribe, reject tip, fire mode, sights, bipod, map minus and map plus.',
    note: 'Independent ALMNJOY work, not an official WARDOGS, BULKHEAD or Elgato product. Button images are static and do not report live game state.',
    price: '$1.99',
    url: 'https://marketplace.elgato.com/product/wardogs-tactical-circuit-f5fee548-35a8-4015-92a6-b42bf4534821',
    status: 'live',
  },
  {
    // No public listing found on 2026-09-25, so there is no category, price or link to show yet.
    slug: 'range-finder',
    title: 'Range Finder Companion',
    tagline: 'Map coordinates, bearing, distance and supply requests on one Stream Deck key for WARDOGS players, with three matching 15-key profile pages.',
    alt: 'Range Finder Companion cover: the Ultimate Artillery Deck layout, fifteen illustrative key states in amber on dark green showing position and target set, bearing and range, coordinates reset, open map, request ammo, request supplies, recenter, zoom, fire, Steam status, news and calibration.',
    note: 'Independent companion for WARDOGS, not an official game product. Range uses captured coordinates and the configured map scale; ballistic elevation is not calculated.',
    status: 'coming-soon',
    version: '0.6.1',
  },
];

export const counts = {
  total: products.length,
  live: products.filter((p) => p.status === 'live').length,
  comingSoon: products.filter((p) => p.status === 'coming-soon').length,
};
