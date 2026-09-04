# Clay Space — Style Guide

Derived from **Brand Exploration R3** (direction locked). The palette is
implemented in [`@clayspace/tokens`](https://github.com/Clay-Space-Bk/clayspace-tokens),
shared with the admin app; `src/app/clayspace-brand.scss` consumes it and adds
this site's `@font-face` and `.cs-brand` scope.

A live version renders at **`/style-guide`** — run `npm run dev` and open
<http://localhost:3007/style-guide>. Prefer it to this file when checking a
colour; it renders the real tokens.

For how the style layers stack, see
[docs/ARCHITECTURE.md §4](docs/ARCHITECTURE.md#4--styling-in-three-layers).

---

## Palette

The deck carries no hex values — these were sampled from its artwork.

### Primary

| Token | Hex | Use |
|---|---|---|
| `--cs-orange` | `#EE552B` | Primary. The logo blob, CTAs, accents |
| `--cs-cream` | `#FAF1E0` | Primary background |
| `--cs-oxblood` | `#5D1509` | Ink, dark grounds |

### Muted — sections, cards, grounds

| Token | Hex | |
|---|---|---|
| `--cs-ochre` | `#805D1B` | For Adults card |
| `--cs-green` | `#404E41` | For Kids card |
| `--cs-brown` | `#614338` | Membership card |
| `--cs-aubergine` | `#3E2B59` | Outside Firing card |

### Accent

| Token | Hex | |
|---|---|---|
| `--cs-orange-light` | `#FE8441` | |
| `--cs-butter` | `#FFE890` | Clay Play yellow |
| `--cs-pink` | `#F9B5C0` | |
| `--cs-lavender` | `#CFB5FF` | |
| `--cs-blue` | `#ADC8CF` | |
| `--cs-olive` | `#C0BA62` | |
| `--cs-wine` | `#85233C` | |
| `--cs-navy` | `#263866` | |

### Off-palette but load-bearing

| Hex | Where | Why |
|---|---|---|
| `#6B5D54` | Nav rail ground, hero CTA | Taupe, predates the token set |
| `#E9E0D6` | Classes section ground | Muted step down from cream |
| `#F2EBE5` | Hero backing | Sampled from `homev3.jpg` so the art blends seamlessly |
| `#FFFCF6` | Form field fill | |

> Worth consolidating these into tokens before launch.

---

## Typography

**Apfel Grotezk** — Collletttivo, Luigi Gorlero. SIL Open Font License 1.1.
Self-hosted, `public/assets/fonts/`, licence alongside.

| Weight | Cut | Use |
|---|---|---|
| 400 | Regular | Body |
| 500 | Mittel | Labels, meta, nav |
| 700 | Fett | Headings, buttons |
| 900 | Satt | Installed, unused |

```
--cs-ff: 'ApfelGrotezk', 'Helvetica Neue', Arial, sans-serif;
```

**One family throughout.** R2 feedback: *"prefers this font over serif."* The
template's Playfair Display is overridden — `--tp-ff-playfair` and every other
`--tp-ff-*` point at `--cs-ff`. Where the inherited styles used serif italics for
emphasis, we use upright type in orange instead.

There is no 600 cut. The stylesheets ask for it in ~30 places; CSS resolves those
upward to Fett — a real weight, not synthesised.

### Scale

| Element | Size | Weight |
|---|---|---|
| Home H1 | 48pt / 64px, `line-height: 1.08` | 700 |
| Section H2 | `clamp(1.6rem, 3.2vw, 2.2rem)` | 700 |
| Card title | `clamp(1.9rem, 4vw, 3.6rem)` | 700 |
| Body | 1.02rem, `line-height: 1.65` | 400 |
| Meta / labels | .82rem, uppercase, `.12em` tracking | 600–700 |

---

## The `.cs-brand` scope

The brand layer is scoped, not global:

```scss
.cs-brand {
  --cs-orange: #EE552B;
  /* … */
  --tp-ff-playfair: var(--cs-ff);   /* re-point template tokens */
  --tp-common-brown: var(--cs-oxblood);
  font-family: var(--cs-ff);
}
```

Applying `.cs-brand` to a page re-points the inherited custom properties at
brand values, restyling everything inside without touching other routes.

**Gotcha:** descendants that don't reference a `--tp-ff-*` var inherit their
family from `<body>`, which sits outside the scope. That's why `font-family` is
set on the scope root too.

**Deliberately outside the scope**, in `globals.scss` — these render on pages
without the class:

- `.cartmini__*` — cart drawer
- `.cs-footer-meta` — footer contact strip
- `.cs-mailing` — mailing list

---

## Components

### Drawers — 460px, one system

Three share geometry exactly. Verified identical.

| | Width | Ground |
|---|---|---|
| `ClayNavRail` | `min(100vw, 460px)` | `#6B5D54` |
| `ClayAuthPanel` | `min(100vw, 460px)` | `#FAF1E0` |
| Cart | `min(100vw, 460px)` | `#FAF1E0` |

```
transition: right .42s cubic-bezier(.2, .7, .2, 1);
backdrop: rgba(26,20,17,.45)
full-width below 600px
Escape closes
```

### `ClayCutout`

Brand-colour field with a vessel-shaped window; photo behind.

```tsx
<ClayCutout
  src="/assets/img/clayspace/products/product-01.jpg"
  alt="A pot being thrown on the wheel"
  shape="jug"       // "jug" | "mug" | "amphora"
  color="#EE552B"
  ratio={1}         // 1 = square
  align="center"    // wide cards: park it right, type left
  scale={1}
/>
```

An SVG **mask**, not a clip: the photo paints the frame, the colour rect covers
it, and the vessel is painted black into the mask so colour is withheld there.
The colour is the foreground; the vessel is the hole.

Handle strokes end **inside** the body outline or they render as detached rings.

### `ProgramMain`

Most content pages. Sections with headings, body, priced items, CTAs.

```tsx
{ title: "Center & Throw", priceNum: 760, id: 1 }        // adds to cart
{ title: "Communal", price: "$210 / mo", href: "/apply" } // links out
```

### `ClayFormMain`

Request forms. Hero, numbered "How it works", two-column field grid, "Before you
send" notes. Posts nowhere yet.

---

## Shape language

**Square corners** on interactive elements — buttons, inputs, cart, auth panel.

**Organic blobs** for brand marks only: the logo, and the hero CTA
(`border-radius: 58% 42% 47% 53% / 46% 55% 45% 54%`).

Cards keep `border-radius: 18px`.

### Icons

Flat, chunky, single-colour cut-outs. No gradients, no outlines, no interior
detail. R2 feedback: *"chunky, rustic forms hit right with me."*

The nav rail uses line-art ceramic icons from `public/assets/img/ceramic-icons/`.

---

## Voice

From the manuscript, not invented:

- **"We believe everyone is creative."** The core line.
- Mission: *cultivate a sharing culture that uplifts and nurtures clay artists
  and makers at every level of growth.*
- Plain and specific. "8¢ per cubic inch" beats "affordable firing."
- Values: creativity as a right, community at the center, a culture of sharing,
  mindfulness and respect.

### Facts to keep straight

| | |
|---|---|
| Address | 275 Calyer Street, Greenpoint, Brooklyn, NY 11222 |
| Hours | Mon–Sat 10am–9:30pm · Sun 10am–9pm · Members 24/7 |
| Founded | 2006, as Clay Space 1205 |
| Studio | 6 kilns (1.4–16 cu ft), 30+ house-made glazes, 22 wheels |
| Firing | Members 4¢/cu in · students 8¢ combined · outside 8¢ per firing |
| Semester | 12 weeks, $760 adults / $650 kids |
| Membership | $210–$650/mo, 3-month minimum |
| Email | info@ (general) · education@ (classes) · support@ (firing) |
| Instagram | [@clayspace_bk](https://www.instagram.com/clayspace_bk/) |
| Bench time | **3 hrs/week**, owner-confirmed. Stated once, on `/classes/` |
| Phone | Placeholder `XXX-XXX-XXXX` until a studio line exists — and deliberately **absent** from the structured data |
