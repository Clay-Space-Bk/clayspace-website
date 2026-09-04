import ProgramMain, { ProgramData } from '@/components/clayspace/ProgramMain';
import { Metadata } from 'next';

export const metadata: Metadata = { title: "Clay Space — TryDays & Kids Workshops" };

const data: ProgramData = {
    kicker: "For Kids · One-off classes",
    title: "TryDays + Workshops",
    lede: "Immerse your child in the magic of ceramics with our day camps and workshops. In these one-off classes, kids and teens create lasting ceramic art through hands-on projects that we professionally fire and glaze — no semester commitment.",
    heroImg: "/assets/img/clayspace/products/product-09.jpg",
    sections: [
        {
            heading: "How it works",
            body: "TryDays run as single sessions during school breaks and on selected weekends. Projects vary by date and are pitched to the age group booked. Everything made is fired and glazed by us and ready for collection about six weeks later.",
        },
        {
            heading: "Siblings and friends", tint: true,
            body: "Bring them along — we offer a 10% sibling discount on one-off classes.",
        },
        {
            heading: "Nothing on the dates you need?",
            body: "If you don't see a session that works, request a private or group lesson instead. We run those for 1–5 kids, and parties for groups of six or more.",
            cta: { label: "Request a private or group lesson", href: "/private-lessons-events-kids" },
        },
    ],
};

export default function page() { return <ProgramMain data={data} />; }
