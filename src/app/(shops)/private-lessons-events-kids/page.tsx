import ProgramMain, { ProgramData } from '@/components/clayspace/ProgramMain';
import { Metadata } from 'next';

export const metadata: Metadata = { title: "Clay Space — Kids Private Lessons & Parties" };

const data: ProgramData = {
    kicker: "For Kids · Private",
    title: "Private Lessons & Parties",
    lede: "Two-hour private handbuilding or wheel throwing lessons for 1–5 kids — or 1½ hours of class with the last half hour kept for refreshments and party. Good for newcomers to clay and for children who want focused time with an experienced instructor. Also a family activity, a small friend group, or a birthday.",
    heroImg: "/assets/img/clayspace/products/product-05.jpg",
    sections: [
        {
            heading: "Private lessons", sub: "1–5 kids · 2 hours",
            body: "Handbuilding or wheel throwing, with instruction pitched to the ages in the room. For a group of six or more, book a party instead.",
            cta: { label: "Request a private lesson", href: "/contact" },
        },
        {
            heading: "Clay Play parties", sub: "6+ kids · groups up to 8 · 2 hours", tint: true,
            body: "The party package is a two-hour class, or 1½ hours of class with the last half hour for food and celebration. Choose handbuilding or wheel throwing. You bring and set up all party supplies and food — tablecloth, cups, plates, napkins, forks — as we don't provide these.",
            cta: { label: "Request a party", href: "/contact" },
        },
        {
            heading: "Paint a Pot", sub: "Groups up to 8 · 1½ hours",
            body: "A fun, creative session where kids decorate a mixture of ready-made forms with underglazes. Everything is fired with a clear glaze, so each child leaves with a one-of-a-kind piece.",
            cta: { label: "Request a Paint a Pot party", href: "/contact" },
        },
        {
            heading: "Before you book",
            body: "Finished work is ready roughly six weeks after the session — worth knowing if pieces are meant as gifts. Ask us about age suitability when you enquire: wheel throwing needs a bit more reach and patience than handbuilding.",
        },
    ],
};

export default function page() { return <ProgramMain data={data} />; }
