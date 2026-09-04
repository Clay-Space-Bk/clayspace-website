import ProgramMain, { ProgramData } from '@/components/clayspace/ProgramMain';
import { Metadata } from 'next';

export const metadata: Metadata = { title: "Clay Space — Events" };

const data: ProgramData = {
    kicker: "Community",
    title: "Events",
    lede: "Markets, open studios, and community happenings at 275 Calyer — from the Great Brooklyn Throw Down to our Annual Members' Holiday Market. Join our mailing list to hear about them first.",
    heroImg: "/assets/img/clayspace/about/about-6.jpg",
    sections: [
        {
            heading: "Annual & recurring",
            items: [
                { title: "The Great Brooklyn Throw Down", meta: "BCAT · wheel & handbuilding relays", desc: "A family-friendly community competition closing the Brooklyn Ceramic Arts Tour." },
                { title: "Greenpoint Open Studios × BCAT", meta: "Late spring", desc: "30+ Clay Space members open their studios and sell their work." },
                { title: "Members' Holiday Market", meta: "December", desc: "Four rooms, 70+ members — shop local, handmade gifts." },
                { title: "Centered in Equity Residency Show", meta: "Yashar Gallery", desc: "An exhibition of our residency cohort's work." },
                { title: "Shop Small Greenpoint Sidewalk Sales", meta: "Spring & fall", desc: "Pay-what-you-wish ceramics benefiting our camp scholarship & residency funds." },
                { title: "Ready for Retail Workshop", meta: "with Perri Salka of The WonderMart", desc: "Turning your studio practice into a small business." },
            ],
        },
        {
            heading: "Host with us", tint: true,
            body: "Clay Space hosts private parties and group events for adults and kids — from bestie nights to birthday parties. For anything else, reach out and we'll help you plan it.",
            cta: { label: "Contact us", href: "/contact" },
        },
    ],
};

export default function page() { return <ProgramMain data={data} />; }
