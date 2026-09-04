# Clay Space — website

Marketing and commerce site for **Clay Space**, a community ceramic center at
275 Calyer Street, Greenpoint, Brooklyn. Classes, workshops, camps, studio
memberships, outside firing, a shop and a café.

Next.js 16 · React 19 · TypeScript · Sass · **static export**.

---

## Quickstart

```bash
npm install
npm run dev
```

Open **http://localhost:3007**. That's it — no database, no API keys, no
`.env` file. Every page renders from data committed to this repo.

| | |
|---|---|
| **Node** | 22 or newer (CI runs 22) |
| **Port** | 3007. `:3000` is reserved for Studio ONE, the admin app |
| **Env vars** | None required. One optional: `PAGES_BASE_PATH` (see [docs/DEPLOYING.md](docs/DEPLOYING.md)) |

```bash
npm run build      # static export into out/
npm start          # serve out/ on :3008 — `next start` will not work, see below
npm run typecheck  # tsc --noEmit
npm run lint
```

> **Stop the dev server before you build.** `next dev` and `next build` share
> `.next/`, and running both corrupts it. This has cost real time — see
> [Traps](docs/DEVELOPING.md#traps-that-have-already-cost-time).

---

## The one thing to know first

**This site is a static export.** `next.config.ts` sets `output: "export"`, so
the whole site compiles to plain HTML in `out/` and is served from a bucket or
GitHub Pages with no Node process behind it.

That buys simple, cheap hosting. It costs you four Next features, and adding any
of them **fails the build**:

- no dynamic route segments (`[slug]`) without `generateStaticParams`
- no route handlers (`app/**/route.ts`)
- no server actions
- no `next/headers`, `cookies()` or `draftMode()`

If you need any of those, that is a deliberate architecture change, not a
convenience — read [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) first.

**Nothing on the site transacts.** Every form shows a confirmation and posts
nowhere. That is the launch gate, not a bug you found. The backend is Studio
ONE, a separate app; see [docs/WBS.md](docs/WBS.md) §6.

---

## Where things live

| Path | What's there |
|---|---|
| `src/app/` | Routes — one directory per URL. Parenthesised groups (`(shops)`, `(contacts)`) organise files without appearing in the URL |
| `src/app/layout.tsx` | Root layout, site metadata, site-wide JSON-LD |
| `src/app/clayspace-brand.scss` | **Brand layer** — `@font-face`, the `.cs-brand` scope, and the `--tp-*` re-pointing. The palette itself comes from `@clayspace/tokens` |
| `src/app/globals.scss` | Global styles, and branded components that render outside `.cs-brand` |
| `src/app/robots.ts` · `sitemap.ts` | Generate `/robots.txt` and `/sitemap.xml` |
| `src/components/clayspace/` | Every Clay Space component. Start here |
| `src/components/pages/ClaySpaceHome.tsx` | The composition rendered at `/` |
| `src/lib/structured-data.ts` | The business as schema.org data |
| `src/data/` | Content arrays — products, journal, workshops, testimonials |
| `src/layouts/` | Header and footer |
| `src/provider/AppProvider.tsx` | Cart state |
| `public/assets/scss/` | The Sass layer everything else builds on |
| `public/assets/img/clayspace/` | Clay Space photography and illustration |
| `public/assets/fonts/` | Apfel Grotezk, 4 weights, SIL OFL |

41 routes, every one of them a Clay Space page. Everything under `src/` is
reachable from a route — there is no dead code to ignore.

---

## Documentation

| Read this | When |
|---|---|
| [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) | How the site is put together, and the static-export contract |
| [docs/DEVELOPING.md](docs/DEVELOPING.md) | **Recipes** — add a page, add a section, style it, and the traps that bite |
| [docs/DEPLOYING.md](docs/DEPLOYING.md) | Building, the two deploy targets, CI |
| [docs/SITEMAP.md](docs/SITEMAP.md) | Every route, its title, and the navigation hierarchy |
| [docs/WBS.md](docs/WBS.md) | Work breakdown — what is done, what is left, and the dependency order to launch |
| [STYLE-GUIDE.md](STYLE-GUIDE.md) | Brand tokens and component patterns. Renders live at `/style-guide` |
| [ATTRIBUTION.md](ATTRIBUTION.md) | Font licences — all resolved, nothing bundled is unlicensed |
| [LICENSE](LICENSE) | Proprietary. Shared for Clay Space work only, not open source |
| [CLAUDE.md](CLAUDE.md) | The same ground, condensed for coding agents |

---

## Brand, in one table

Full detail in [STYLE-GUIDE.md](STYLE-GUIDE.md); these are the ones people get
wrong.

| Rule | Value |
|---|---|
| Orange | `#EE552B` — **not** `#F95C20`, which litters older references |
| Ink, dark grounds | `#5D1509` oxblood |
| Ground | `#FAF1E0` cream |
| Nav rail | taupe `#6B5D54`, `min(100vw, 460px)` |
| Typeface | Apfel Grotezk — 400 / 500 / 700. There is no 600 cut |
| Cards | 18px radius; interactive elements square |
| Organic blobs | brand marks only — the logo and the hero CTA |

Prefer `var(--cs-*)` over a hex value. The palette is defined once, in
[`@clayspace/tokens`](https://github.com/Clay-Space-Bk/clayspace-tokens) —
shared with the admin app, so a colour change lands in both. Edit `tokens.json`
there and rebuild; adding a `--cs-*` to this repo is how the two drifted apart
before.

---

## Known placeholders

These are deliberate and tracked. Don't "fix" them without the real asset.

- **Phone number** reads `XXX-XXX-XXXX` on `/contact`, pending a studio line. It
  is deliberately absent from the structured data — that is machine-read, and a
  fake number there is worse than none.
- **Café photography** is one brand placeholder standing in until the café is
  shot. The menu copy is real.
- **The home page video** carries a placeholder YouTube id.

---

## Related systems

- **Studio ONE** (`clayspace-admin`) — the studio's admin app and system of
  record: 44 Postgres tables covering members, sessions, enrollments,
  memberships, support tickets, firings, waivers and a general ledger. It runs
  locally on `:3000`.
- This website will call Studio ONE over a **narrow HTTPS API**. It never
  receives database credentials or auth secrets, and it never deploys alongside
  it. Keep that boundary.
- **Studio ONE's member login is not yet real authentication** — it issues a
  30-day session on an email address alone. That has to be fixed before this
  site can call it. See
  [WBS §6.1](docs/WBS.md#61--real-member-authentication--do-this-first).
