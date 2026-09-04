import ProgramMain, { ProgramData } from '@/components/clayspace/ProgramMain';
import { Metadata } from 'next';

export const metadata: Metadata = { title: "Clay Space — Careers" };

const data: ProgramData = {
    kicker: "Join the team",
    title: "Careers at Clay Space",
    lede: "Serving and nurturing a clay community is a team effort. We're always looking for warm, dedicated people to help our members and students thrive at 275 Calyer Street in Greenpoint.",
    heroImg: "/assets/img/clayspace/about/about-1.jpg",
    sections: [
        {
            heading: "Open roles", sub: "Part-time & seasonal · Greenpoint, Brooklyn",
            items: [
                { title: "Studio Technician", desc: "Load and run kilns, mix glazes, and keep the studio running smoothly. Ceramics experience required." },
                { title: "Studio Monitor", desc: "Welcome members and students, keep the space clean and safe, and answer questions during open hours." },
                { title: "Instructor", desc: "Teach adult or youth classes, TryNights, and private lessons. Strong ceramics background and a love of teaching." },
                { title: "Classroom Assistant", desc: "Support instructors during kids' classes and camps." },
                { title: "Clay Operations", desc: "Move work through each stage, manage inventory, and support firing and finishing." },
            ],
            cta: { label: "Apply — email us", href: "/contact" },
        },
        {
            heading: "Who we are", tint: true,
            body: "We celebrate everyone who juggles delicate work, moves hundreds of ceramic pieces through each process, and answers a million questions daily — with a positive, friendly attitude. If that sounds like you, we'd love to meet you. Email us with the role you're interested in and a little about your ceramics background.",
        },
    ],
};

export default function page() { return <ProgramMain data={data} />; }
