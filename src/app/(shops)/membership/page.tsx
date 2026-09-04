import ProgramMain, { ProgramData } from '@/components/clayspace/ProgramMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Clay Space — Membership",
    description: "24/7 studio access in Greenpoint, from a shared work-table to a private studio. Four levels, $210–$650 a month.",
};

const data: ProgramData = {
    kicker: "Membership · 24/7 access",
    title: "Membership",
    lede: "A bench of your own in a fully equipped ceramic centre — four levels, from a shared work-table to a private studio. Every level includes round-the-clock access.",
    heroImg: "/assets/img/clayspace/about/about-1.jpg",
    sections: [
        {
            heading: "Levels & pricing", sub: "Monthly + tax · all levels include 24/7 access",
            items: [
                {
                    title: "Communal", meta: "work-table", price: "$210 – $255 / mo",
                    href: "/membership/apply",
                    desc: "Shared wheels, two large communal handbuilding tables, all equipment. One or two shelves of storage.",
                },
                {
                    title: "Semi-Private", meta: "work-space", price: "$310 – $380 / mo",
                    href: "/membership/apply",
                    desc: "Your own table and pegboard divider, storage beneath, wall or side shelving. Bulk clay orders and your own kiln bookings.",
                },
                {
                    title: "Annex", meta: "work-annex", price: "$365 – $525 / mo",
                    href: "/membership/apply",
                    desc: "700 sq ft ground-floor studio across the street, shared with 12 members. Its own kilns, slab roller, extruder and four wheels, plus full access to the Center.",
                },
                {
                    title: "Private", meta: "work-studio", price: "$485 – $650 / mo",
                    href: "/membership/apply",
                    desc: "A designated table, pegboard divider, under-table storage and a large private shelving unit alongside. Built for production potters and large work.",
                },
            ],
        },
        {
            heading: "Every level includes", tint: true,
            items: [
                { title: "24/7 access", meta: "Members' work areas and equipment, any hour" },
                { title: "Private entrance", meta: "And a members' kitchenette with fridge and microwave" },
                { title: "Class discounts", meta: "On semester classes and selected workshops" },
                { title: "Events", meta: "Annual Holiday Market and Open Studios" },
            ],
        },
        {
            heading: "How it works",
            items: [
                { title: "01 · Apply", meta: "Tell us about your practice and what you need from a studio." },
                { title: "02 · Hear back", meta: "Within 10 days — either an invitation to tour, or the class that gets you ready." },
                { title: "03 · Tour and join", meta: "Visit, meet people, see the space. Once we all agree, you're offered a spot." },
            ],
        },
        {
            heading: "Before you apply", tint: true,
            body: "Member work areas don't include instruction, so membership needs an independent, intermediate-to-advanced grasp of the whole ceramic process — usually more than a year of consistent lessons — and a 3-month minimum commitment. Not there yet? That's common, and our instructors will guide you toward it. Students are first in line as spots open.",
            cta: { label: "Apply for membership", href: "/membership/apply" },
        },
    ],
};

export default function page() { return <ProgramMain data={data} />; }
