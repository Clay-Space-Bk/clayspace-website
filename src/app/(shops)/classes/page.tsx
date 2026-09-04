import ProgramMain, { ProgramData } from '@/components/clayspace/ProgramMain';
import { Metadata } from 'next';

export const metadata: Metadata = { title: "Clay Space — Semester Classes" };

const data: ProgramData = {
    kicker: "For Adults · Fall 2026 Semester",
    title: "Semester Classes",
    lede: "",
    heroImg: "/assets/img/clayspace/products/product-01.jpg",
    sections: [
        {
            items: [
                { id: 4, priceNum: 760, title: "Exploring Ceramic Techniques", meta: "Foundation · Beginner" },
                { id: 1, priceNum: 760, title: "Center & Throw", meta: "Wheel · Beginner–Intermediate" },
                { id: 8301, priceNum: 760, title: "Wheel Throwing & Handbuilding for All", meta: "Beginner–Intermediate" },
                { id: 8302, priceNum: 760, title: "Leveling Up Handbuilding", meta: "Intermediate–Advanced" },
                { id: 7, priceNum: 760, title: "Coil & Slab", meta: "Handbuilding · Beginner–Intermediate" },
                { id: 3, priceNum: 760, title: "Handbuilding Tableware", meta: "Beginner–Intermediate" },
                { id: 9, priceNum: 760, title: "Next Level", meta: "Wheel · Intermediate–Advanced" },
                { id: 8, priceNum: 900, title: "Independent Study Ceramics", meta: "Intermediate–Advanced · prerequisite" },
            ],
        },
        {
            heading: "Try it first", sub: "No semester commitment", tint: true,
            items: [
                { id: 2, priceNum: 90, title: "Wheel Throwing TryNight", meta: "2 hours · all levels" },
                { id: 10, priceNum: 90, title: "Handbuilding TryNight", meta: "2 hours · all levels" },
                { id: 6, priceNum: 200, title: "ClayDate for Two", meta: "1.5 hours · private" },
            ],
        },
        {
            heading: "Private Lessons",
            body: "Two-hour private lessons for 1–5 people — 1-on-1 instruction to support your goals. Great as a family activity, date night, or focused skill-building.",
            items: [
                { title: "1 person", price: "$190" }, { title: "2 people", price: "$275" },
                { title: "3 people", price: "$350" }, { title: "4 people", price: "$450" }, { title: "5 people", price: "$550" },
            ],
            cta: { label: "Request a private lesson", href: "/contact" },
        },
        {
            body: "Class fees include clay and glaze. Registered students get 3 hours/week of bench time; firings are 7¢ per cubic inch. Open Mon–Sat 10am–9:30pm, Sun 10am–9pm.",
        },
    ],
};

export default function page() { return <ProgramMain data={data} />; }
