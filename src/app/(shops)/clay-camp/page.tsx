import ProgramMain, { ProgramData } from '@/components/clayspace/ProgramMain';
import { Metadata } from 'next';

export const metadata: Metadata = { title: "Clay Space — Clay Camp" };

const data: ProgramData = {
    kicker: "For Kids · Summer 2026 · Ages 6–12",
    title: "Clay Camp",
    lede: "One-week ceramic camps that turn imagination into lasting art. Your child will make functional pieces they can keep for years — each week has its own theme, indoor and outdoor activities, small groups by age, and a park visit on the last day, weather permitting.",
    heroImg: "/assets/img/clayspace/products/product-04.jpg",
    sections: [
        {
            heading: "Summer sessions", sub: "Mondays–Thursdays, 9am – 1:30pm",
            items: [
                { id: 8201, priceNum: 525, title: "Session I — City Dwellers", meta: "July 13–16", desc: "Campers build their world in clay: a city street as a group project, plus their own room or building, neighbourhood animals, figurines and clay cars. They'll also draw the community they'd most like to live in." },
                { id: 8202, priceNum: 525, title: "Session II — Wearable Clay", meta: "July 27–31", desc: "Pushing what clay can be — buttons, pins, wands and fantasy objects, with wire loops embedded for jewellery, keychains and masks. Everyone leaves with fresh clay bling." },
                { id: 8203, priceNum: 525, title: "Session III — Art & Archeology", meta: "August 10–13", desc: "Ceramic artists in the ancient world. Before plastic, clay made toys, storage vessels and decoration for tombs and temples. Projects include writing stamps, tile decoration, figurines and jars drawn from ancient cultures." },
                { id: 8204, priceNum: 525, title: "Session IV — Art & Environment", meta: "August 17–20", desc: "Clay's relationship with plant life and the earth — coil-pot planters, seed sculptures and plant figurines, plus a field trip to the Newtown Creek Alliance's Kingsland Wildflower space." },
            ],
        },
        {
            heading: "What to expect", tint: true,
            body: "Children decorate their work with underglazes and everything is finished in clear glaze. While they wait for pieces to be fired, they'll bring home drawings and other artwork. Finished ceramics can be collected two weeks after camp ends.",
        },
        {
            heading: "Siblings and assistance",
            body: "Bring siblings and friends — there's a 10% sibling discount. Tuition assistance is available for summer camp; get in touch and we'll send you the form.",
            cta: { label: "Ask about tuition assistance", href: "/contact" },
        },
    ],
};

export default function page() { return <ProgramMain data={data} />; }
