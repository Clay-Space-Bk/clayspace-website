import ClayFormMain, { FormData } from '@/components/clayspace/ClayFormMain';
import { Metadata } from 'next';

export const metadata: Metadata = { title: "Clay Space — Commission a Member Artist" };

const data: FormData = {
    kicker: "Services · Commissions",
    title: "Commission a member artist",
    lede: "Looking for handmade ceramics made to order — restaurant tableware, wedding favours, a set of mugs for the office, a one-off sculpture? Tell us what you have in mind and we'll circulate your brief to our members. Whoever's the right fit will get back to you directly.",
    heroImg: "/assets/img/clayspace/products/product-10.jpg",
    email: "info@clayspacebk.com",
    steps: [
        { heading: "Describe the work", body: "The more detail you give — quantity, timeline, budget, references — the better the match." },
        { heading: "We circulate it", body: "Your brief goes out to our members. They work across wheel throwing, handbuilding, slip casting and sculpture." },
        { heading: "An artist replies", body: "Interested members contact you directly to talk through the work, pricing and schedule." },
    ],
    notes: [
        "Ceramics take time — most commissions need six to twelve weeks from agreement to finished, fired work.",
        "Give a realistic budget range. It's the fastest way to find the right maker.",
        "Larger production runs may suit our members who run small ceramic businesses from the Annex.",
        "We introduce you to the artist; the commission itself is agreed directly between you.",
    ],
    submitLabel: "Send commission brief",
    fields: [
        { name: "name", label: "Name", required: true },
        { name: "email", label: "Email", type: "email", required: true },
        { name: "org", label: "Company or organisation" },
        { name: "type", label: "What kind of work?", type: "select", required: true, options: ["Tableware — restaurant or café", "Tableware — home", "Wedding or event favours", "Corporate or client gifts", "Sculpture or one-off piece", "Something else"] },
        { name: "quantity", label: "How many pieces?", placeholder: "e.g. 40 mugs" },
        { name: "budget", label: "Budget range", placeholder: "e.g. $1,500–2,500" },
        { name: "deadline", label: "When do you need it?", placeholder: "A date, or 'flexible'" },
        { name: "brief", label: "Describe what you're after", type: "textarea", required: true, wide: true, placeholder: "Forms, sizes, glaze colours, surface. Links to references are welcome." },
    ],
};

export default function page() { return <ClayFormMain data={data} />; }
