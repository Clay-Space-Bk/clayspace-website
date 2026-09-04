# Roadmap

What is built, what is left, and what actually blocks launch.

**The gate is §6.** Nothing on the site can be bought, booked or submitted.
Everything else on this page is finishing work.

---

## ✅ Complete

**1 · Foundation**
- 1.1 Scaffolding audited, home page identified and rebuilt
- 1.2 Dev server on `:3007`, preview config
- 1.3 Content sourced from the 243-page live-site export

**2 · Brand system** — *Brand Exploration R3, direction locked*
- 2.1 Palette extracted from the deck — 15 colours sampled from artwork; the
  deck carries no hex list
- 2.2 Apfel Grotezk installed, 4 weights, licence included
- 2.3 `.cs-brand` scope layer re-pointing the base custom properties
- 2.4 Serif removed site-wide; one grotesk throughout
- 2.5 `ClayCutout` — SVG-mask vessel windows over photography
- 2.6 Icon set recoloured from the existing ceramic line-art

**3 · Home page**
- 3.1 Hero: illustration background at 25% strength, H1, CTA
- 3.2 Quote / video section
- 3.3 `ClayClassCards` — four pinned, stacking cards with cutouts
- 3.4 Gallery, testimonials, workshops, amenities, counters, journal, CTA
- 3.5 Promoted to `/`, old showcase redirected, animations re-keyed

**4 · Site chrome**
- 4.1 `ClayNavRail` — right rail, five top-level items, cart
- 4.2 `ClayAuthPanel` — sign in / sign up drawer, federated options
- 4.3 Cart drawer matched to the same 460px geometry
- 4.4 Footer: address, hours, inboxes, Instagram, mailing list

**5 · Content pages**
- 5.1 Adults: classes, workshops
- 5.2 Kids: camps hub + after-school, clay camp, trydays, clay date, private
  lessons
- 5.3 Membership rebuilt on the shared card pattern with a real path to purchase
- 5.4 About, team, FAQ (24 pairs), careers, contact, journal, events
- 5.5 Centered in Equity
- 5.6 Forms: membership application, firing inquiry, commissions

---

## ⬜ 6 · Backend — this is the launch gate

Most of this is **integration, not construction**. Studio ONE already owns the
data and the logic: 44 Postgres tables with live members, sessions, enrollments
(capacity-checked, Cal.com-fed), membership plans, support tickets, firings,
waivers and a general ledger.

The website's job is to call it. It gets a narrow HTTPS API and **never**
database credentials.

| | Work | Notes |
|---|---|---|
| 6.1 | Request forms → `support_tickets`; firing enquiries → `firings` | |
| 6.2 | Mailing list → EmailOctopus | What the live site already uses |
| 6.3 | Auth | Member login already exists in Studio ONE as a signed cookie. Scope it to `.clayspacebk.com` for SSO. The Google / Apple / Facebook buttons are **UI only** — wire them or remove them. A sign-in that cannot sign anyone in is worse than none |
| 6.4 | Checkout → Stripe | The webhook belongs to the API, not the website. It writes to `enrollments`, `members` and `ledger_entries` |
| 6.5 | Class registration → the existing `/api/studio/portal/enroll` | **Sawyer is not needed.** Enrollment with capacity checking already works |
| 6.6 | Contact form delivery | `support_tickets` has a `reply` column; the studio manager owns the queue |

Acuity, Gusto, Mailchimp and Typeform are stubbed and deliberately not wired.

## ⬜ 7 · Content gaps

- 7.1 Events: 8 built vs 20 live
- 7.2 Member Gallery (20 images) on Our Story
- 7.3 COVID-19 protocols page — present in the live global footer
- 7.4 Team: verify 43 entries against the live page
- ✅ 7.5 Bench time is **3 hrs/week**, owner-confirmed. Stated once, on
  `/classes/`

## 8 · Scaffolding cleanup — *mostly done*

- ✅ 8.1 Demo routes deleted; 117 pages → 41
- ✅ 8.2 `/shop-details` removed; `/shop`, `/wishlist`, `/my-account` retitled
  and kept
- ✅ 8.3 `/home-2` removed
- ⬜ 8.4 **Decide:** `/outside-firing-portal` vs `/firing-inquiry` — both still
  exist and overlap
- ✅ 8.5 The four redirect stubs (`/amenities`, `/our-story`, `/trynight`,
  `/private-lessons-events`) render a heading, a visible link and a
  `meta refresh`, carry `noindex, follow`, and are excluded from the sitemap
- ✅ 8.6 **558 unreachable modules deleted** — `src/` 719 files → 162. Computed
  from an import graph rooted at the route entry points, not a name heuristic;
  validated by a clean build and a 41/41 route sweep
- ✅ 8.7 The three dangling CTAs are repointed. All 82 distinct internal links
  across the 41 exported pages resolve; no 404s remain
- ⬜ 8.8 **No product detail route** — six named products all link to `/shop`.
  `/shop/[slug]` needs `generateStaticParams` under `output: "export"`
- ✅ 8.9 **Dead data pruned.** `animationConfig` keyed 41 routes for the 3 that
  exist; `blogData`, `portfolioData` and `testimonialData` held 43 / 60 / 59
  entries for the 3 / 6 / 4 that render. Trimmed to what renders and switched
  to id-based selection, removing ~40 GSAP functions, 3 modules and 230 demo
  images. Two exports of invented design awards went with them

## ⬜ 9 · Pre-launch

- 9.1 Replace the placeholder YouTube id `VCPGMjCW0is` in the video section
- ✅ 9.2 `next.config.ts` cleaned — deprecated `eslint` key removed, and
  `typescript.ignoreBuildErrors` removed so type errors now fail the build
- ✅ 9.3 All type errors fixed — `tsc --noEmit` is clean
- 9.4 **Accessibility pass** — focus states, contrast, keyboard navigation on
  all three drawers. Not started
- 9.5 Real metadata and OG images per route
- 9.6 Analytics
- 9.7 **Cross-browser and device testing** — no Safari, Firefox or real-device
  pass has been run
- 9.8 Confirm social handles beyond Instagram (`@clayspace_bk` is the only
  verified one)
- 9.9 Café photography — the menu copy is real, the pictures are one brand
  placeholder
- 9.10 Real phone number, and add `telephone` to `src/lib/structured-data.ts`
  once it exists

---

## Also outstanding, outside this repo

- **The live Squarespace business settings show `273` Calyer, not `275`.** The
  structured data on the *live* site is wrong today. Fix it there.
- Seven Squarespace URLs would 404 at cutover. Map them before the DNS switch.
