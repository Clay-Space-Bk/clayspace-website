/**
 * schema.org structured data for Clay Space.
 *
 * This is the machine-readable copy of the business — what Google, ChatGPT,
 * Claude and Perplexity read when asked "where is Clay Space" or "pottery
 * classes in Greenpoint". Getting a fact wrong here is worse than omitting it,
 * because the markup reads as authoritative.
 *
 * Every value below is verified against the site's own published copy. Fields
 * we cannot verify are deliberately absent rather than guessed:
 *   - telephone: the contact page carries a placeholder (XXX-XXX-XXXX)
 *     until a studio line exists. A placeholder must NOT go in structured
 *     data — it is machine-read, and a fake number is worse than none.
 *     Add `telephone` here at the same time the real number goes live.
 *   - geo coordinates: not surveyed; the postal address is unambiguous
 *   - priceRange: varies by programme
 */

export const SITE_URL = "https://www.clayspacebk.com";

const ORG_ID = `${SITE_URL}/#organization`;
const SITE_ID = `${SITE_URL}/#website`;

/** 275 Calyer St — confirmed by the owner. Note the live Squarespace site
 *  currently publishes 273 in its own structured data, which is incorrect. */
const ADDRESS = {
    "@type": "PostalAddress",
    streetAddress: "275 Calyer Street",
    addressLocality: "Brooklyn",
    addressRegion: "NY",
    postalCode: "11222",
    addressCountry: "US",
} as const;

/** Studio hours, per the footer and About page. Clay Camp's Mon–Thu 9am–1:30pm
 *  is a programme schedule, not opening hours — do not merge the two. */
const HOURS = [
    {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "10:00",
        closes: "21:30",
    },
    {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "10:00",
        closes: "21:00",
    },
];

const SAME_AS = ["https://www.instagram.com/clayspace_bk/"];

const DESCRIPTION =
    "Clay Space is a community ceramic center in Greenpoint, Brooklyn, offering " +
    "pottery classes for adults and kids, workshops, summer camps, studio " +
    "memberships with 24-hour access, a shop and a café.";

/**
 * Organisation + LocalBusiness + WebSite, emitted once site-wide.
 * LocalBusiness doubles as EducationalOrganization because the primary offer is
 * instruction, which is what most AI queries about this business are actually about.
 */
export function organizationSchema() {
    return {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": ["LocalBusiness", "EducationalOrganization"],
                "@id": ORG_ID,
                name: "Clay Space",
                alternateName: "Clay Space Ceramic Center",
                legalName: "Clay Space Ceramic Center",
                description: DESCRIPTION,
                url: SITE_URL,
                image: `${SITE_URL}/assets/img/clayspace/og-default.jpg`,
                logo: `${SITE_URL}/assets/img/logo/clayspace-logo.webp`,
                email: "info@clayspacebk.com",
                address: ADDRESS,
                openingHoursSpecification: HOURS,
                sameAs: SAME_AS,
                areaServed: [
                    { "@type": "Place", name: "Greenpoint, Brooklyn" },
                    { "@type": "City", name: "New York" },
                ],
                knowsAbout: [
                    "Pottery", "Ceramics", "Wheel throwing", "Handbuilding",
                    "Glazing", "Kiln firing", "Studio membership",
                ],
                publicAccess: true,
                isAccessibleForFree: false,
            },
            {
                "@type": "WebSite",
                "@id": SITE_ID,
                url: SITE_URL,
                name: "Clay Space",
                description: DESCRIPTION,
                publisher: { "@id": ORG_ID },
                inLanguage: "en-US",
            },
        ],
    };
}

/** FAQPage. Answers are plain text — strip any markup before passing them in. */
export function faqSchema(faqs: ReadonlyArray<{ q: string; a: string }>) {
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "@id": `${SITE_URL}/faq/#faq`,
        isPartOf: { "@id": SITE_ID },
        mainEntity: faqs.map(({ q, a }) => ({
            "@type": "Question",
            name: q,
            acceptedAnswer: { "@type": "Answer", text: a },
        })),
    };
}

/** A single class or programme offered by Clay Space. */
export function courseSchema(course: {
    name: string;
    description: string;
    url: string;
    audience?: string;
}) {
    return {
        "@context": "https://schema.org",
        "@type": "Course",
        name: course.name,
        description: course.description,
        url: `${SITE_URL}${course.url}`,
        provider: { "@id": ORG_ID },
        ...(course.audience
            ? { audience: { "@type": "EducationalAudience", educationalRole: course.audience } }
            : {}),
        courseMode: "onsite",
        locationCreated: { "@type": "Place", address: ADDRESS },
    };
}
