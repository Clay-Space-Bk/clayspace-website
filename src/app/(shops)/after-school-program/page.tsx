import ProgramMain, { ProgramData } from '@/components/clayspace/ProgramMain';
import { Metadata } from 'next';

export const metadata: Metadata = { title: "Clay Space — Clay Play After School Program" };

const data: ProgramData = {
    kicker: "For Kids · Fall 2026 Semester",
    title: "Clay Play After School",
    lede: "Clay Play is an inquiry-based handbuilding exploration that emphasises mindful process and experimentation. Our Artist Educators have built a series of rotating lessons to deepen makers' understanding of ceramics and the artistic process. With an emphasis on process over product, the aim is an artistic cohort of confident makers.",
    heroImg: "/assets/img/clayspace/products/product-06.jpg",
    sections: [
        {
            heading: "Fall 2026", sub: "Sept 14 – Dec 17 · 3–5pm · 9 students per class",
            body: "Each day is grouped by age and led by the same Artist Educator all semester. The program requires a full semester commitment.",
            items: [
                { id: 8211, priceNum: 650, title: "Clay Play Mondays", meta: "Grades 1–4 (ages 6–9) · Ian Privett", desc: "No classes Sept 21 and Oct 12." },
                { id: 8212, priceNum: 650, title: "Clay Play Tuesdays", meta: "Grades K–2 (ages 5–7) · Olive Hock", desc: "No pick-up Nov 3 — election day, remote learning." },
                { id: 8213, priceNum: 650, title: "Clay Play Wednesdays", meta: "Grades 2–5 (ages 7–10) · Jacob Reinstein", desc: "No classes Nov 11." },
                { id: 8214, priceNum: 650, title: "Clay Play Thursdays", meta: "Grades 2–5 (ages 6–9) · Amanda Gale", desc: "No classes Nov 26 and Dec 24. Early dismissal, no pick-up Nov 5." },
            ],
        },
        {
            heading: "Pick-up and fees", tint: true,
            body: "School pick-up from local schools is $16 per class. Late pick-up covers up to 30 minutes for $18 per class; after a 15-minute grace period the fee is $15. We follow school closure days and don't offer pick-up on half days — check each day's dates above.",
        },
        {
            heading: "Payment and discounts",
            body: "A payment plan is available, as is a discount for siblings or registering for multiple days. All students follow our Clay Space Community Agreements.",
        },
        {
            heading: "Cancellations",
            body: "Registered for the wrong class? Email us to transfer rather than double-booking, or you'll be charged a 3% change-of-registration fee. For a full refund minus a $50 processing fee, write to us more than 10 days before the first class. Requests within a week of the first class are 50% refundable. No refunds once the session begins, and no make-ups or refunds for missed classes. If a class doesn't fill we may cancel and move students, apply tuition elsewhere, or refund in full.",
            cta: { label: "Email info@clayspacebk.com", href: "mailto:info@clayspacebk.com" },
        },
    ],
};

export default function page() { return <ProgramMain data={data} />; }
