# Developing

Recipes for the things you will actually do, and the traps that have already
cost someone a day.

---

## Add a content page

Most pages are a data object handed to `ProgramMain`. Copy
`src/app/(shops)/workshops/page.tsx` and edit — it is the clearest example.

```tsx
// src/app/(shops)/kiln-club/page.tsx   →   /kiln-club
import ProgramMain, { ProgramData } from '@/components/clayspace/ProgramMain';
import { Metadata } from 'next';

export const metadata: Metadata = { title: "Clay Space — Kiln Club" };

const data: ProgramData = {
    kicker: "For Members · 2026",
    title: "Kiln Club",
    lede: "One paragraph. This is the only prose above the fold.",
    heroImg: "/assets/img/clayspace/about/about-2.jpg",
    sections: [
        {
            heading: "Sessions",
            sub: "Monthly, six people",
            items: [
                { id: 8201, priceNum: 120, title: "Spring session", meta: "Mar 4 – Apr 8" },
            ],
        },
        {
            heading: "Good to know",
            tint: true,
            body: "Cancellation terms, prerequisites, anything that isn't a card.",
        },
    ],
};

export default function page() { return <ProgramMain data={data} />; }
```

The types are small and worth reading directly in
`src/components/clayspace/ProgramMain.tsx`:

| Field | Notes |
|---|---|
| `items[].id` + `priceNum` | Both required for a card that adds to cart |
| `items[].href` | Makes the card **link out** instead of adding to cart. Memberships are applied for, not bought |
| `items[].ctaLabel` | Overrides the button text |
| `sections[].tint` | Grey ground, for "good to know" blocks |
| `sections[].cta` | A single `{ label, href }` button under the section |

Then, before you call it done:

1. **Add it to the nav** if it belongs there —
   `src/components/clayspace/ClayNavRail.tsx`.
2. **Add it to `src/app/sitemap.ts`** if it is a public marketing page. If it is
   transactional, gated or internal, add it to the `NOINDEX` list there *and*
   disallow it in `src/app/robots.ts`. Those two files must stay in step.
3. **Give it a real `title`.** It is the browser tab and the search result.

## Add a form

Copy an existing one and hand it to `ClayFormMain`. Every form currently shows a
confirmation and posts nowhere — that is deliberate and tracked in
[ROADMAP.md](ROADMAP.md) §6, not something to quietly wire up to a third-party
endpoint.

## Retire a URL without breaking it

Four legacy URLs (`/amenities`, `/our-story`, `/trynight`,
`/private-lessons-events`) still exist because they are linked from outside.
They render a heading, a visible link and a `meta refresh`:

```tsx
export const metadata: Metadata = {
    robots: { index: false, follow: true },
    title: "Clay Space — Amenities",
};

export default function page() {
    return <Redirect to="/about#amenities" label="Amenities" />;
}
```

A static export cannot issue a 301, so this is the closest honest equivalent:
`noindex, follow` keeps it out of the index while passing the link along, and
the visible link means it still works with JavaScript off. Excluded from the
sitemap.

## Add content to an existing list

`src/data/` holds plain arrays — journal posts, workshops, testimonials,
products. Add an entry and rebuild; that is the whole publishing workflow.

**Select by `id`, never by array position.** Every consumer already does:

```ts
const HOME_BLOG_IDS = [20, 21, 22];
const displayBlog = HOME_BLOG_IDS
    .map((id) => blogData.find((b) => b.id === id))
    .filter(Boolean) as blogDT[];
```

These files used to use `slice(19, 22)`, which meant deleting any earlier entry
silently changed what the home page showed. If you add a selector, do it by id
and leave a comment saying so.

## Style something

Three layers, in cascade order — see
[ARCHITECTURE.md §4](ARCHITECTURE.md#4--styling-in-three-layers).

- Reach for `var(--cs-*)` before a hex value. Tokens live in
  `src/app/clayspace-brand.scss`.
- A component that renders **inside** `.cs-brand` can be styled in the brand
  layer. One that renders outside it — cart drawer, footer, mailing list — has
  to go in `globals.scss`.
- `!important` is sometimes correct here. The base rules forward first from
  `main.scss` and are equally specific, so specificity alone cannot win.
- Adding a typeface means adding a name to the `$font-family` map in
  `public/assets/scss/utils/_typography.scss`. There is no second place to
  register it.

## Check your work

```bash
npm run build      # also typechecks — ignoreBuildErrors is deliberately absent
npm run typecheck
npm run lint
```

A green build is a real signal here: `output: "export"` means anything
server-only fails at build time rather than in production.

Two checks worth running by hand after a structural change:

```bash
# every internal link resolves to a page that exists
# (run against out/, not src/ — it catches hrefs built at runtime)
grep -rho 'href="/[^"#?]*"' out --include='*.html' | sort -u | wc -l

# the nav rail still opens — the hydration canary, see below
```

---

## Traps that have already cost time

**`next build` and `next dev` share `.next/`.** Stop the dev server before
building or the directory is corrupted and the next command hangs. This is the
single most common self-inflicted wound in this repo.

**The nav rail is the hydration canary.** After any change to the export or its
paths, open and close it. Nothing else on the site fails as quietly — a broken
hydration renders a perfect-looking page with a clean console and dead
interactive components.

**Never rewrite paths inside `self.__next_f.push(...)`.** That inline flight
data carries absolute `/_next/` URLs. Rewriting them kills hydration silently,
in exactly the way above.

**Five nav icons are built at runtime** from a template literal,
`/assets/img/ceramic-icons/${slug}.svg`. No static analysis sees them. Exclude
`ceramic-icons/` from any unused-asset sweep or the rail loses its icons.

**`next start` does not work here.** `output: "export"` rejects it. `npm start`
is wired to serve `out/` instead.

**`next-env.d.ts` is generated by the build.** It declares the module types for
static image imports (`.png`, `.webp`). Running `tsc` on a fresh clone *before*
a build fails with TS2307 on every image in `src/data`. CI builds first for
exactly this reason — keep that order.

**Module reachability is not enough to call something dead.** A module can be
imported and still carry dead *content*. `animationConfig.ts` mapped 41 routes
when 3 exist; `blogData` held 43 entries for the 3 that render. When you audit,
check what **selects** the data, not just what imports the file.

**`images: { unoptimized: true }` is required.** `next/image` optimisation needs
a server; the export fails without it.

**A root-relative build and a `PAGES_BASE_PATH` build are different**, and each
is broken in the other's context. See [DEPLOYING.md](DEPLOYING.md).

---

## Conventions

- **Brand tokens** over hex. `var(--cs-orange)`, not `#EE552B`.
- **`ProgramMain`** for content pages, **`ClayFormMain`** for request forms.
  Reach for a bespoke component only when the page genuinely isn't either.
- **Route groups** `(shops)` and `(contacts)` are historical and carry no
  meaning. Don't reorganise them for tidiness.
- **`robots.ts` and `sitemap.ts` move together.** A page added to one usually
  belongs in the other.
- **The `clayspace-light` class** on `<html>` and the selector in
  `_light.scss` must match. Rename both or neither.
- **Placeholders are tracked, not forgotten** — the phone number, the café
  photography, the video id. See the README before replacing one.
