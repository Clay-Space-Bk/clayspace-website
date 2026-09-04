# Sitemap

Every route the site serves, what it is called, and how it is treated by search.

Regenerated 4 September 2026 from a clean `npm run build`. **Titles are read
from the exported HTML**, not from source, so they are what a browser tab and a
search result actually show.

**41 routes**, every one of them a Clay Space page: 27 content, 8 gated or
transactional, 4 redirect signposts, plus `/404` and Next's `/_not-found`.

---

## 1 · Navigation hierarchy

The rail (`src/components/clayspace/ClayNavRail.tsx`) is the site's real information
architecture — five top-level branches plus three utility rows.

| | Branch | Children |
| --- | --- | --- |
| — | *Sign Up / Sign In* | → `/login`, `/register` |
| — | *Search* | overlay |
| — | *Home* | `/` |
| 1 | **Membership** | Levels & Pricing · Apply for Membership · Amenities & Perks · Member Portal |
| 2 | **Classes** | Semester Classes · TryNight & ClayDate · Workshops · For Kids — All Classes · Clay Play After School · Clay Camp · TryDays & Kids Workshops · Clay Date · Kids Private Lessons & Parties · Student Portal |
| 3 | **Shop** | Shop All · Ceramics · Gift Cards · Outside Firing · Commissions |
| 4 | **Events** | Upcoming Events · Journal |
| 5 | **About** | Our Story · Meet the Team · Services & Firing · Centered in Equity · FAQ · Careers · Contact us |
| — | *Shopping Cart* | pinned footer row with live count |

---

## 2 · Pages by section

### Home
| Route | Title |
| --- | --- |
| `/` | Clay Space — Ceramic Center in Greenpoint, Brooklyn |

### About
| Route | Title |
| --- | --- |
| `/about` | Clay Space — About |
| `/our-story` | Clay Space — Our Story |
| `/team` | Clay Space — Meet the Team |
| `/amenities` | Clay Space — Amenities |
| `/centered-in-equity` | Clay Space — Centered in Equity |
| `/faq` | Clay Space — FAQ |
| `/careers` | Clay Space — Careers |
| `/contact` | Clay Space — Contact |

### Membership
| Route | Title |
| --- | --- |
| `/membership` | Clay Space — Membership |
| `/membership/apply` | Clay Space — Membership Application |
| `/member-portal` | Clay Space — Member Portal |

### Classes — adults
| Route | Title |
| --- | --- |
| `/classes` | Clay Space — Semester Classes |
| `/workshops` | Clay Space — Workshops |
| `/trynight` | Clay Space — Try Night |
| `/private-lessons-events` | Clay Space — Private Lessons & Events |
| `/learn` | Clay Space — Learn: Techniques & Tools |
| `/student-portal` | Clay Space — Student Portal |

### Classes — kids
| Route | Title |
| --- | --- |
| `/camps` | Clay Space — Classes for Kids |
| `/clay-camp` | Clay Space — Clay Camp |
| `/after-school-program` | Clay Space — Clay Play After School Program |
| `/trydays` | Clay Space — TryDays & Kids Workshops |
| `/clay-date` | Clay Space — Clay Date for Kids |
| `/private-lessons-events-kids` | Clay Space — Kids Private Lessons & Parties |

### Shop & services
| Route | Title |
| --- | --- |
| `/shop` | Clay Space — Shop |
| `/ceramics` | Clay Space — Ceramics Shop |
| `/gift-cards` | Clay Space — Gift Cards |
| `/commissions` | Clay Space — Commission a Member Artist |
| `/firing-inquiry` | Clay Space — Outside Firing Inquiry |
| `/outside-firing-portal` | Clay Space — Outside Firing Portal |
| `/cafe` | Clay Space — Café |

### Events & writing
| Route | Title |
| --- | --- |
| `/events` | Clay Space — Events |
| `/journal` | Clay Space — Journal |

### Commerce & account
| Route | Title |
| --- | --- |
| `/cart` | Clay Space — Cart |
| `/checkout` | Clay Space — Checkout |
| `/wishlist` | Clay Space — Wishlist |
| `/login` | Clay Space — Login |
| `/register` | Clay Space — Register |

### Internal
| Route | Title |
| --- | --- |
| `/style-guide` | Clay Space — Style Guide |

---

## 3 · Route classes

The class decides whether a route is indexed, listed in `sitemap.ts`, and
reachable from the navigation. `src/app/robots.ts` and `src/app/sitemap.ts`
implement this and must stay in step with each other.

### Content — 27 routes · indexed · in the sitemap

| Group | Routes |
|---|---|
| **Entry** | `/` |
| **Membership** | `/membership/` · `/membership/apply/` |
| **Classes — adults** | `/classes/` · `/workshops/` |
| **Classes — kids** | `/camps/` · `/clay-camp/` · `/after-school-program/` · `/trydays/` · `/clay-date/` · `/private-lessons-events-kids/` |
| **Shop & services** | `/shop/` · `/ceramics/` · `/gift-cards/` · `/firing-inquiry/` · `/commissions/` · `/outside-firing-portal/` |
| **Studio** | `/cafe/` · `/learn/` |
| **Events & writing** | `/events/` · `/journal/` |
| **About** | `/about/` · `/team/` · `/faq/` · `/centered-in-equity/` · `/careers/` · `/contact/` |

### Gated & transactional — 8 routes · disallowed in robots · absent from the sitemap

`/cart/` · `/checkout/` · `/login/` · `/register/` · `/wishlist/` ·
`/member-portal/` · `/student-portal/` · `/style-guide/`

`/style-guide/` is an internal design reference, not customer-facing. The two
portals are member areas. The rest are transactional and carry no search value.

### Redirect signposts — 4 routes · `noindex, follow` · absent from the sitemap

| Legacy URL | Destination |
|---|---|
| `/amenities/` | `/about/#amenities` |
| `/our-story/` | `/about/#story` |
| `/trynight/` | `/classes/` |
| `/private-lessons-events/` | `/events/` |

These preserve inbound links to URLs that no longer hold content. A static
export cannot issue a 301, so each renders a real heading, a visible link and a
`meta refresh` — it still works with JavaScript off, and a crawler that ignores
the refresh still follows the link.

### Utility — 2 routes

`/404/` and Next's internal `/_not-found/`. `/robots.txt`, `/sitemap.xml` and
`/icon.svg` are generated files rather than pages.

---

## 4 · Links

All 82 distinct internal links across the 41 exported pages resolve to a page
that exists. Verified against `out/`, not against source, so `href` values built
at runtime are covered.

---

## 5 · Elsewhere

- How the routing works, and why there are no dynamic segments —
  [ARCHITECTURE.md](ARCHITECTURE.md)
- How to add a route — [DEVELOPING.md](DEVELOPING.md#add-a-content-page)
- What is still missing from these pages — [WorkBreakStructure.md](WorkBreakStructure.md)
