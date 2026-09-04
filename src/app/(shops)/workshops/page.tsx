import ProgramMain, { ProgramData } from '@/components/clayspace/ProgramMain';
import { Metadata } from 'next';

export const metadata: Metadata = { title: "Clay Space — Workshops" };

const data: ProgramData = {
    kicker: "For Adults · 2026",
    title: "Workshops",
    lede: "Focused, single-topic workshops led by visiting artists and studio experts — from mold-making and slip casting to glaze chemistry and surface decoration.",
    heroImg: "/assets/img/clayspace/about/about-2.jpg",
    sections: [
        {
            heading: "2026 Workshops", sub: "Led by guest facilitators",
            items: [
                { id: 8101, priceNum: 185, title: "Ready for Retail — Ceramics Edition", meta: "with Perri Salka, The WonderMart · Jun 12" },
                { id: 8102, priceNum: 225, title: "Small Batch Production: Design to Sale", meta: "with Joanne Lee, Sunday Studio · Fall 2026" },
                { id: 8103, priceNum: 265, title: "Make Your Own Mold!", meta: "with Catalina Parra, Base Ceramics · Jun 20–21" },
                { id: 8104, priceNum: 225, title: "Mold Making 101", meta: "with Catalina Parra · Fall 2026" },
                { id: 8105, priceNum: 225, title: "Slip Casting for Beginners", meta: "with Catalina Parra · Fall 2026" },
                { id: 8106, priceNum: 340, title: "On the Surface: Decorative Techniques", meta: "with Nina Berinstein · Jul 10–31 (4 weeks)" },
                { id: 8107, priceNum: 265, title: "Nerikomi & Neriage", meta: "with a/d gayle · Jul 18–19" },
                { id: 8108, priceNum: 295, title: "Glaze Chemistry & Application", meta: "with Michael Gundlach · Aug 29–30 + Sep 2" },
                { id: 8109, priceNum: 95, title: "Body Mechanics", meta: "with HanaKyle Moranz · dates tba" },
                { id: 8110, priceNum: 185, title: "Teapots!", meta: "with Ian Privett" },
                { id: 8111, priceNum: 150, title: "Get a Handle on Mugs", meta: "with Barbara Stone" },
                { id: 8112, priceNum: 185, title: "Get Lit: Lamp Making", meta: "with TBD" },
            ],
        },
        {
            heading: "Good to know", tint: true,
            body: "Join our mailing list or follow @clayspace_bk to hear about new workshops first. Cancellation: a full refund minus a $50 processing fee up to 1 week before the first class; no refunds within 48 hours of the start or for no-shows.",
        },
    ],
};

export default function page() { return <ProgramMain data={data} />; }
