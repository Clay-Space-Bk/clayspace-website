# Work Breakdown Structure

Everything between here and a live site that transacts. Sections 1–5 are built.
**6 is the gate**, and inside it **6.1 gates the rest of 6.**

Status: ✅ done · 🔲 open · ⛔ blocked by something above it

| Phase | State | Rough size |
|---|---|---|
| 1–5 · The site itself | ✅ complete | — |
| 6 · Studio ONE integration | 🔲 **the launch gate** | see below |
| 7 · Content gaps | 🔲 open | days |
| 8 · Scaffolding cleanup | ✅ mostly done | hours |
| 9 · Pre-launch quality | 🔲 open | 1–2 weeks |
| 10 · Cutover | 🔲 open | days, mostly waiting |

---

## 1–5 · The site itself — ✅ complete

**1 · Foundation** — scaffolding audited, home page rebuilt, dev server on
`:3007`, content sourced from the 243-page live-site export.

**2 · Brand system** *(Brand Exploration R3, direction locked)* — palette
sampled from the deck artwork, which carries no hex list; Apfel Grotezk in four
weights with its licence; the `.cs-brand` scope layer re-pointing the base
custom properties; serif dropped site-wide; `ClayCutout` SVG-mask vessel windows;
icon set recoloured from the existing ceramic line-art.

**3 · Home page** — hero, quote/video, `ClayClassCards` (four pinned stacking
cards), gallery, testimonials, workshops, amenities, counters, journal, CTA.
Promoted to `/`, animations re-keyed.

**4 · Site chrome** — `ClayNavRail` (five branches plus cart), `ClayAuthPanel`,
cart drawer on the same 460px geometry, footer with address, hours, inboxes,
Instagram and mailing list.

**5 · Content pages** — adults and kids programmes, membership on the shared
card pattern, about, team, FAQ (24 pairs), careers, contact, journal, events,
Centered in Equity, and the three request forms.

---

## 6 · Studio ONE integration — the launch gate

Studio ONE (`clayspace-admin`) is the system of record: 44 Postgres tables with
members, sessions, enrollments (capacity-checked, Cal.com-fed), membership
plans, support tickets, firings, waivers and a general ledger. **The website's
job is to call it, not to rebuild it.**

More of this exists than you would guess. `src/lib/apiAuth.ts` in Studio ONE is
already correct — a member's acting email comes from their signed cookie and
never from the request body, so a member cannot act as anyone else. The nine
routes this site needs are guarded properly. What is missing is authentication
worth the name, a reachable deployment, and a website that makes any HTTP calls
at all.

### 6.1 🔲 Real member authentication — **do this first**

`POST /api/portal-auth/login` currently issues a **30-day member session on an
email address alone**. No password, no code, no link:

```
POST /api/portal-auth/login  {"email":"someone@example.com"}
  → so_member cookie, valid 30 days
```

That is fine while Studio ONE is local and staff-operated — everyone who can
reach it is already trusted. It stops being fine the moment a public website can
call it: anyone who knows a member's email address gets that member's
enrollments, purchases, tickets and membership. `memberAuth.ts` says as much in
its own header comment.

**Magic link is the natural fit.** Members are already identified by email, and
Studio ONE already has mail infrastructure (`MAILPIT_URL`). One-time codes work
equally well. Either way:

- single-use token, short expiry, stored server-side or signed with a nonce
- rate-limit by email and by IP
- keep the existing `so_member` cookie as the session it issues — that part is
  sound

**Nothing else in section 6 should ship before this does.**

### 6.2 ⛔ Studio ONE has to be reachable

It runs `next start` locally today against five environment dependencies:

| Variable | For |
|---|---|
| `STUDIOONE_DATABASE_URL` | the 44-table Postgres |
| `CALCOM_DATABASE_URL` | the Cal.com booking feed |
| `MINIO_ROOT_USER` · `MINIO_ROOT_PASSWORD` | file storage |
| `MAILPIT_URL` | outbound mail |
| `AUTH_SECRET` | staff sessions and the member cookie signature |

Deploying that — the GCP move — is a project of its own, not a step in this one.
It is the long pole in the whole plan.

**The website never receives any of these.** Not the database URL, not
`AUTH_SECRET`. That boundary is the security model, not a preference.

### 6.3 ⛔ Origins and cookies

Studio ONE's auth is `httpOnly`, `SameSite=Lax` cookies read through
`next/headers` — built for same-origin. A static export served from another
origin cannot use them as they stand, and **none of Studio ONE's 128 API routes
send CORS headers or handle a preflight `OPTIONS`.**

Prefer subdomains over cross-site cookies:

```
www.clayspacebk.com     the site (this repo, static)
api.clayspacebk.com     Studio ONE
cookie Domain=.clayspacebk.com   → same-site, SameSite=Lax still works
```

Then add CORS with `credentials: true` on the specific routes the site calls —
not blanket across the API. `SameSite=None; Secure` also works and is worse: it
is the configuration browsers keep tightening.

### 6.4 ⛔ An API client on this side

The site makes **zero HTTP calls today**. Eight forms, every one of them
`preventDefault()` and a confirmation message. This is the bulk of the website's
own work:

- a small client module — base URL from an env var, `credentials: "include"`,
  typed responses, one place that turns `{ok:false,error}` into a thrown error
- auth state in `src/provider/AppProvider.tsx` alongside the cart, hydrated from
  `GET /api/portal-auth/session`
- real loading, error and empty states on every form. A form that silently fails
  is worse than one that never submitted

Routes, and what they already enforce:

| Route | Guard | Serves |
|---|---|---|
| `portal-auth/login` · `logout` · `session` | — | sign in, sign out, who am I |
| `studio/portal` | member cookie | portal dashboard |
| `studio/portal/enroll` | member cookie | class registration, capacity-checked |
| `studio/portal/purchase` · `studio/checkout` | member cookie | payment |
| `studio/portal/membership` | member cookie | membership state |
| `studio/portal/ticket` | member cookie | contact and request forms |
| `studio/bench` · `bench/book` · `bench/buy` | member cookie | bench time |
| `studio/waivers` | member cookie | waiver signing |
| `studio/classes` | member cookie | class catalog |
| `studio/shop` | **none** | shop and firing-fee catalog |

`studio/shop` returns a public product catalog with no personal data, so
unguarded is defensible — but make that a decision on purpose before the API
faces the internet.

**Sawyer is not needed.** Enrollment with capacity checking already works.

### 6.5 ⛔ Payment

`studio/checkout` already writes a balanced double-entry ledger transaction —
debit Cash/Stripe, credit Class Revenue — and flips `enrollments.paid`. It has a
documented Stripe seam gated on `STRIPE_SECRET_KEY`; without a key it records
the payment as manual/pending, so the ledger and reconciliation work today.

Still to do: no key, no webhook, and no Stripe package installed anywhere in the
estate.

- From a static export, use **Stripe Checkout redirect** or Elements. Card data
  must never touch this origin.
- The **webhook belongs to Studio ONE**, not the website. It writes
  `enrollments`, `members` and `ledger_entries`.

### 6.6 🔲 Decide the fate of the federated sign-in buttons

`/login` shows Google, Apple and Facebook buttons that are UI only. Wire them or
delete them. A sign-in that cannot sign anyone in is worse than no button.

### 6.7 🔲 The remaining form destinations

- Request forms → `support_tickets`; firing enquiries → `firings`
- Contact form delivery — `support_tickets` has a `reply` column and the studio
  manager owns the queue
- Mailing list → EmailOctopus, which is what the live site already uses

Acuity, Gusto, Mailchimp and Typeform are stubbed and deliberately not wired.

---

## 7 · Content gaps

- 🔲 7.1 Events: 8 built vs 20 live
- 🔲 7.2 Member Gallery (20 images) on Our Story
- 🔲 7.3 COVID-19 protocols page — present in the live global footer
- 🔲 7.4 Team: verify 43 entries against the live page
- ✅ 7.5 Bench time is **3 hrs/week**, owner-confirmed. Stated once, on
  `/classes/`

## 8 · Scaffolding cleanup

- ✅ 8.1 Demo routes deleted; 117 pages → 41
- ✅ 8.2 `/shop-details` removed; `/shop`, `/wishlist`, `/my-account` retitled
- ✅ 8.3 `/home-2` removed
- 🔲 8.4 **Decide:** `/outside-firing-portal` vs `/firing-inquiry` — both exist
  and overlap
- ✅ 8.5 Four redirect stubs render a heading, a visible link and a
  `meta refresh`, carry `noindex, follow`, and are out of the sitemap
- ✅ 8.6 **558 unreachable modules deleted** — `src/` 719 files → 162, from an
  import graph rooted at the route entry points
- ✅ 8.7 The three dangling CTAs are repointed. All 82 internal links across the
  41 exported pages resolve
- 🔲 8.8 **No product detail route** — six named products all link to `/shop`.
  `/shop/[slug]` needs `generateStaticParams` under `output: "export"`
- ✅ 8.9 **Dead data pruned** — `animationConfig` keyed 41 routes for 3 that
  exist; `blogData` / `portfolioData` / `testimonialData` held 43 / 60 / 59
  entries for the 3 / 6 / 4 that render. Removed ~40 GSAP functions, 3 modules,
  230 demo images and two exports of invented design awards

## 9 · Pre-launch quality

- 🔲 9.1 Replace the placeholder YouTube id `VCPGMjCW0is`
- ✅ 9.2 `next.config.ts` cleaned; `typescript.ignoreBuildErrors` removed so type
  errors fail the build
- ✅ 9.3 `tsc --noEmit` clean; lint clean and enforced in CI
- 🔲 9.4 **Accessibility pass** — focus states, contrast, keyboard navigation on
  all three drawers. Not started
- 🔲 9.5 Real metadata and OG images per route
- 🔲 9.6 Analytics
- 🔲 9.7 **Cross-browser and device testing** — no Safari, Firefox or
  real-device pass has been run
- 🔲 9.8 Confirm social handles beyond Instagram (`@clayspace_bk` is the only
  verified one)
- 🔲 9.9 Café photography — menu copy is real, pictures are one placeholder
- 🔲 9.10 Real phone number, then add `telephone` to
  `src/lib/structured-data.ts`

## 10 · Cutover

- 🔲 10.1 **Decide where the export is hosted.** GitHub Pages cannot serve this
  repo — the org is on the Free plan and the repo is private. Any static bucket
  or CDN works; see [DEPLOYING.md](DEPLOYING.md)
- 🔲 10.2 Domain and DNS — `www.clayspacebk.com`, apex 301 to `www`, and
  `api.` if 6.3 goes the subdomain route
- 🔲 10.3 **Map the seven Squarespace URLs that would 404** at cutover
- 🔲 10.4 Script the `PAGES_BASE_PATH` post-build `/assets/` prefix pass if a
  subpath deploy is ever used — manual today and the easiest thing to forget

---

## Outside this repository

- **The live Squarespace business settings say `273` Calyer, not `275`.** The
  structured data on the site customers see today is wrong. Fix it there; it is
  already correct here.
- Studio ONE's GCP deployment (6.2) is tracked in that repository, not this one.

---

## Sequencing, in one line

**6.1 real auth → 6.2 deploy Studio ONE → 6.3 origins and CORS → 6.4 the
website's API layer → 6.5 payment → 9 quality → 10 cutover.**

7, 8 and most of 9 are independent and can run alongside any of it. Rough
weights: auth is days, the website's API layer is a week or two, and Studio
ONE's deployment is the long pole. The site itself is the part that is finished.
