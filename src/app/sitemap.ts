import type { MetadataRoute } from "next";

// `output: "export"` requires generated routes to be explicitly static.
export const dynamic = "force-static";

const SITE = "https://www.clayspacebk.com";

// Public marketing pages only. Transactional, gated and internal routes are
// listed in NOINDEX below and disallowed in robots.ts — keep the two in step.
const PAGES: Array<{ path: string; priority: number }> = [
    { path: "/", priority: 1.0 },

    // primary conversion paths
    { path: "/classes", priority: 0.9 },
    { path: "/membership", priority: 0.9 },
    { path: "/membership/apply", priority: 0.8 },
    { path: "/workshops", priority: 0.8 },
    { path: "/events", priority: 0.8 },
    { path: "/shop", priority: 0.8 },

    // kids programmes
    { path: "/camps", priority: 0.7 },
    { path: "/clay-camp", priority: 0.7 },
    { path: "/after-school-program", priority: 0.7 },
    { path: "/trydays", priority: 0.7 },
    { path: "/clay-date", priority: 0.7 },
    { path: "/private-lessons-events-kids", priority: 0.7 },

    // studio & services
    // (the legacy URLs /amenities, /our-story, /trynight and
    //  /private-lessons-events are redirect signposts: noindex, not listed)
    { path: "/ceramics", priority: 0.7 },
    { path: "/learn", priority: 0.7 },
    { path: "/firing-inquiry", priority: 0.6 },
    { path: "/outside-firing-portal", priority: 0.6 },
    { path: "/commissions", priority: 0.6 },
    { path: "/gift-cards", priority: 0.6 },
    { path: "/cafe", priority: 0.6 },

    // about & community
    { path: "/about", priority: 0.7 },
    { path: "/team", priority: 0.6 },
    { path: "/centered-in-equity", priority: 0.6 },
    { path: "/careers", priority: 0.6 },
    { path: "/journal", priority: 0.6 },
    { path: "/contact", priority: 0.7 },
    { path: "/faq", priority: 0.6 },
];

export default function sitemap(): MetadataRoute.Sitemap {
    const lastModified = new Date();
    return PAGES.map(({ path, priority }) => ({
        url: `${SITE}${path}`,
        lastModified,
        changeFrequency: path === "/" ? "weekly" : "monthly",
        priority,
    }));
}
