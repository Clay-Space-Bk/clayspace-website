import ProgramMain, { ProgramData } from '@/components/clayspace/ProgramMain';
import { Metadata } from 'next';

export const metadata: Metadata = { title: "Clay Space — Gift Cards" };

const data: ProgramData = {
    kicker: "Give the gift of clay",
    title: "Gift Cards",
    lede: "Two kinds of Clay Space gift cards — one for classes and experiences, one for the shop and firings. Read the descriptions carefully before you buy.",
    heroImg: "/assets/img/clayspace/products/product-04.jpg",
    buyLabel: "Add gift card",
    sections: [
        {
            heading: "Programs gift card",
            body: "Applied at checkout toward any class, one-time class, workshop, event, or party. It cannot be used for memberships, materials, or firings, and is non-refundable.",
            items: [
                { id: 8401, priceNum: 90, title: "Programs Gift Card — $90", meta: "One TryNight" },
                { id: 8402, priceNum: 200, title: "Programs Gift Card — $200", meta: "A ClayDate for two" },
                { id: 8403, priceNum: 400, title: "Programs Gift Card — $400", meta: "Half a semester" },
                { id: 8404, priceNum: 760, title: "Programs Gift Card — $760", meta: "A full 12-week semester" },
            ],
        },
        {
            heading: "Shop + Firings gift card", tint: true,
            body: "Usable for anything sold in the Clay Space Shop — clay, tools, firing fees, and more. A wonderful way to help a maker further their craft.",
            items: [
                { id: 8411, priceNum: 25, title: "Shop Gift Card — $25", meta: "Tools & sundries" },
                { id: 8412, priceNum: 50, title: "Shop Gift Card — $50", meta: "Clay & glaze" },
                { id: 8413, priceNum: 100, title: "Shop Gift Card — $100", meta: "Clay, tools & a firing" },
            ],
        },
    ],
};

export default function page() { return <ProgramMain data={data} />; }
