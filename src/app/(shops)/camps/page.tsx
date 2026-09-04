import ProgramMain, { ProgramData } from '@/components/clayspace/ProgramMain';
import { Metadata } from 'next';

export const metadata: Metadata = { title: "Clay Space — Classes for Kids" };

const data: ProgramData = {
    kicker: "For Kids · Ages 3–13",
    title: "Classes for Kids",
    lede: "Inquiry-based, process-over-product clay for young makers, led by our Artist Educators. A weekly after-school program, one-week summer camps, one-off TryDays, family Clay Dates, and private lessons and parties.",
    heroImg: "/assets/img/clayspace/products/product-06.jpg",
    sections: [
        {
            heading: "Clay Play After School", sub: "Fall 2026 · Sept 14 – Dec 17 · grades K–5",
            body: "A full-semester handbuilding program, 3–5pm, nine students per class, grouped by age with the same educator all term. School pick-up available. $650 per semester.",
            cta: { label: "See after-school classes", href: "/after-school-program" },
        },
        {
            heading: "Clay Camp", sub: "Summer 2026 · ages 6–12 · Mon–Thu 9am–1:30pm", tint: true,
            body: "Four themed one-week camps — City Dwellers, Wearable Clay, Art & Archeology, Art & Environment — from $525 per session, with a 10% sibling discount.",
            cta: { label: "See camp sessions", href: "/clay-camp" },
        },
        {
            heading: "TryDays + Workshops", sub: "One-off classes",
            body: "Single sessions for kids and teens during breaks and selected weekends. No semester commitment; everything is professionally fired and glazed.",
            cta: { label: "See TryDays", href: "/trydays" },
        },
        {
            heading: "Clay Date", sub: "1.5 hours · ages 5–13, or an adult and child", tint: true,
            body: "A short introduction for friends, siblings, or a parent and child. One piece each with instructor guidance; keep it fired and glazed for $20.",
            cta: { label: "See Clay Dates", href: "/clay-date" },
        },
        {
            heading: "Private Lessons & Parties", sub: "1–5 kids privately, or 6+ for a party",
            body: "Two-hour handbuilding or wheel throwing sessions, birthday parties for up to eight, and Paint a Pot.",
            cta: { label: "See private lessons & parties", href: "/private-lessons-events-kids" },
        },
    ],
};

export default function page() { return <ProgramMain data={data} />; }
