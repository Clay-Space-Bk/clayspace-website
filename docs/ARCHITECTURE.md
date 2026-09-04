# Architecture

Why the site is shaped the way it is, and what you are allowed to change.

---

## 1 · Static export is the load-bearing decision

`next.config.ts`:

```ts
output: "export",
trailingSlash: true,
images: { unoptimized: true },
```

`npm run build` compiles every route to HTML in `out/`. There is no Node
process in production — the site is a directory of files behind a CDN.

That makes hosting trivial and the site very hard to break in production. In
exchange, four Next features are unavailable, and the build **fails** rather
than degrading quietly if you add one:

| Not available | Why | If you really need it |
|---|---|---|
| Dynamic segments `[slug]` | Nothing exists at request time to resolve them | `generateStaticParams` prerenders a known set. That works — it is how a product detail route would be built |
| Route handlers `route.ts` | They are server endpoints | Call the Studio ONE API from the client instead |
| Server actions | Same | Same |
| `next/headers`, `cookies()`, `draftMode()` | There is no request | Read from the client after hydration |

`images: { unoptimized: true }` is not optional: `next/image` optimisation
needs a server, and the export fails without it. `trailingSlash: true` means
`/about` is emitted as `out/about/index.html`, which is what a plain file
server wants.

**If you decide the site needs a server**, that is a real architecture change —
new hosting, new deploy pipeline, new security surface. It is a conversation,
not a config edit.

## 2 · Routing

App Router. One directory per URL under `src/app/`, each with a `page.tsx`.

Directories in parentheses are **route groups** — they organise files without
appearing in the URL:

```
src/app/(shops)/classes/page.tsx   →   /classes
src/app/(contacts)/contact/page.tsx →  /contact
src/app/page.tsx                    →  /
```

There are two groups, `(shops)` and `(contacts)`. The names are historical and
mean nothing semantically; `(shops)` holds most of the site. Don't read intent
into them, and don't reorganise them for tidiness — the churn buys nothing.

`src/app/robots.ts` and `src/app/sitemap.ts` generate `/robots.txt` and
`/sitemap.xml`. Both carry `export const dynamic = "force-static"`, which
`output: "export"` requires. The sitemap lists 27 content routes — the four
redirect stubs and the utility pages are deliberately excluded.

## 3 · Composition

Pages are thin. A route's `page.tsx` sets metadata and renders a composition:

```
page.tsx  →  a *Main component in src/components/clayspace/
```

Two components do most of the work across the site:

- **`ProgramMain`** drives most content pages — classes, workshops, camps,
  membership, ceramics. Pass it a config object of sections and cards. Pass
  `href` on an item to make a card that links out instead of adding to cart.
- **`ClayFormMain`** drives the request forms — membership application, firing
  inquiry, commissions, contact.

The home page is the exception: `src/components/pages/ClaySpaceHome.tsx`
composes about a dozen section components in order. If you are changing the
home page, that file is the map.

## 4 · Styling, in three layers

Order matters, because the layers are equally specific and the later one wins.

1. **`public/assets/scss/`** — the base Sass layer. ~89 partials, forwarded
   through `main.scss`. Grid, typography scale, component skeletons.
2. **`src/app/clayspace-brand.scss`** — the brand layer. It `@use`s
   `@clayspace/tokens` for the palette, declares this site's `@font-face`
   blocks, and re-points the base layer's custom properties under `.cs-brand`.

   **The palette is not defined here.** `@clayspace/tokens` is a separate,
   public repository shared with the admin app: one `tokens.json`, generated
   into CSS, Sass and TypeScript. It exists because the palette used to live in
   three places across two repositories and had already drifted — the same
   typeface was registered under two family names, so the admin was silently
   falling back to Helvetica. Change a colour there, not here.

   Two mechanical traps. The `@use` must sit above every other rule in the file,
   including the `@font-face` blocks, because Sass requires it. And Sass
   resolves bare specifiers against its load paths and ignores a package's
   `exports` map, so `next.config.ts` puts `node_modules` on
   `sassOptions.loadPaths` — without it the import fails no matter how the
   package is written.
3. **`src/app/globals.scss`** — global styles, plus branded components that
   render *outside* the `.cs-brand` scope (cart drawer, footer, mailing list),
   which is why they can't live in layer 2.

`clayspace-brand.scss` is `@use`d by `globals.scss`, which `layout.tsx` imports.

The root `<html>` carries the class **`clayspace-light`**, which
`public/assets/scss/layout/pages/_light.scss` keys off. **Rename it in both
places or neither.** They must match or the light theme silently stops
applying.

Some overrides need `!important`. That is not laziness: the base rules are
forwarded first from `main.scss` and are equally specific, so specificity alone
cannot win.

## 5 · Fonts

One self-hosted family — **Apfel Grotezk**, four weights, SIL Open Font
License, licence text alongside in `public/assets/fonts/`. Everything else is
Google Fonts fetched by `next/font`, subset at build time.

The Sass `$font-family` map in `public/assets/scss/utils/_typography.scss` is
emitted as `--tp-ff-*` custom properties by an `@each` loop in `_root.scss`.
Several families that the base layer names — `mango-*`, `clash-*`, `platform`,
`dirtyline` — were removed for licensing and now all resolve to **Space
Grotesk**, the closest Google-hosted match to Apfel Grotezk. Adding a new name
to that map is how you introduce a face; there is no second place to register
it.

There is **no icon font**. The site rendered exactly three Font Awesome icons
for a 456 KB stylesheet and an unresolved Pro licence; they are now inline SVG
in `src/components/clayspace/Icons.tsx`. Don't reintroduce one for a handful of
glyphs. Full history in [../ATTRIBUTION.md](../ATTRIBUTION.md).

## 6 · Data

`src/data/` holds plain TypeScript arrays — products, journal posts,
workshops, testimonials. No CMS, no fetch. Editing a file and rebuilding is the
publishing workflow.

**Every array is selected by `id`, never by array position.** This is load
bearing. These files previously used `slice(19, 22)` and friends, so deleting
any earlier entry silently changed which items the home page displayed. If you
add a selector, select by id and say so in a comment, as the existing ones do.

## 7 · SEO and structured data

`src/lib/structured-data.ts` is the business as machine-readable data:
`LocalBusiness` + `EducationalOrganization` + `WebSite` on every page, plus
`FAQPage` on `/faq`. `src/components/seo/JsonLd.tsx` renders a block.

It deliberately omits `telephone`. The contact page carries a placeholder
number; structured data is machine-read, and a fake number there is worse than
none. Add `telephone` when a real studio line exists.

## 8 · Navigation

`src/components/clayspace/ClayNavRail.tsx` is the site's real information
architecture: five branches — Membership, Classes, Shop, Events, About — plus
Login, Search and Home, and a pinned cart row.

Its width, `min(100vw, 460px)`, is deliberately matched to Studio ONE's admin
nav. Change one and consider the other.

Five of its icons are built at runtime from a template literal:

```ts
const ic = (name: string) => `/assets/img/ceramic-icons/${name}.svg`;
```

No static analysis can see those paths. Exclude `ceramic-icons/` from any
unused-asset sweep or they get deleted and the rail loses its icons.

## 9 · The Studio ONE boundary

Studio ONE (`clayspace-admin`) is the system of record — 44 Postgres tables
with members, sessions, enrollments, memberships, support tickets, firings,
waivers and a general ledger.

The website's job is to **call it, not to rebuild it**. When the integration
lands it is a narrow HTTPS API. The website never receives database
credentials or auth secrets, and the two never deploy together. That boundary
is the whole security model — the marketing site is public, and the admin app
holds payroll and ledger data.
