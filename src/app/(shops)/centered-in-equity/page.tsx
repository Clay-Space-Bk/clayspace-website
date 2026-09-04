import ProgramMain, { ProgramData } from '@/components/clayspace/ProgramMain';
import { Metadata } from 'next';

export const metadata: Metadata = { title: "Clay Space — Centered in Equity" };

const data: ProgramData = {
    kicker: "Our residency · Launched January 2024",
    title: "Centered in Equity",
    lede: "To fulfil our mission more intentionally, Clay Space is building a BIPOC initiative supporting ceramic artists bound by a historical lack of access and resources. Our residency addresses financial and racial disparity in the ceramic arts, creating opportunities for intersectionality and equity by giving artists the time and space to develop and create their work — and to share it with the wider community.",
    heroImg: "/assets/img/clayspace/products/product-09.jpg",
    sections: [
        {
            heading: "Why this exists",
            body: "Ceramics is expensive to practise. Studio time, clay, glaze and firing add up before an artist has sold anything, and that cost has kept the field narrower than it should be. We believe creativity is a right, not a privilege — this residency is how we act on that rather than just say it.",
        },
        {
            heading: "What residents get", tint: true,
            body: "Time and space to develop work without the usual cost barrier, alongside our members in a working studio: wheels, handbuilding tables, the glaze room, our six kilns, and the technical support of our studio team. Residents show their work to the wider community at the close of the programme.",
        },
        {
            heading: "Us — the first cohort",
            body: "Our first residency cohort exhibited together in a group show, US, opening December 2024 at the Yashar Gallery, 276 Greenpoint Avenue. The show ran through late December and introduced the cohort's work to Greenpoint and the wider Brooklyn clay community.",
        },
        {
            heading: "Our role in the collective",
            body: "As a ceramic arts centre we support expression through clay — a medium that is molded and transformed, as we are within community. That transformation happens as we work collectively, build relationships, solve problems, and produce and inspire change in ourselves, in our relationships and by extension in society.",
        },
        {
            heading: "Applications", tint: true,
            body: "Residency applications open periodically. Join the mailing list or write to us and we'll let you know when the next cohort opens.",
            cta: { label: "Get in touch", href: "/contact" },
        },
    ],
};

export default function page() { return <ProgramMain data={data} />; }
