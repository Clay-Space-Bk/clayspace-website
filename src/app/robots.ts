import type { MetadataRoute } from "next";

// `output: "export"` requires generated routes to be explicitly static.
export const dynamic = "force-static";

const SITE = "https://www.clayspacebk.com";

// Kept in step with sitemap.ts: anything not in that file's PAGES list and not
// public marketing content is disallowed here.
const DISALLOW = [
    "/cart",        // transactional
    "/checkout",
    "/wishlist",
    "/login",       // auth
    "/register",
    "/member-portal",   // gated
    "/student-portal",
    "/style-guide",     // internal design reference, not for visitors
];

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [{ userAgent: "*", allow: "/", disallow: DISALLOW }],
        sitemap: `${SITE}/sitemap.xml`,
        host: SITE,
    };
}
