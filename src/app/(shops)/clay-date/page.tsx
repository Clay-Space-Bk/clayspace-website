import ProgramMain, { ProgramData } from '@/components/clayspace/ProgramMain';
import { Metadata } from 'next';

export const metadata: Metadata = { title: "Clay Space — Clay Date for Kids" };

const data: ProgramData = {
    kicker: "For Kids · Ages 5–13",
    title: "Clay Date",
    lede: "A 1.5-hour introduction to ceramics for kids ages 5–13, or for a parent or guardian and child together. Three and four year olds are welcome with an adult. Perfect for friends and siblings who want to try ceramics without committing to a camp, or to make a day of it with a child.",
    heroImg: "/assets/img/clayspace/products/product-06.jpg",
    sections: [
        {
            heading: "In the session", sub: "1.5 hours · handbuilding",
            body: "Each participant makes one ceramic piece with instructor guidance. Together you'll learn basic clay techniques, complete a functional or sculptural project, and choose a colour for the piece — we handle the glazing. If time allows, participants can underglaze their own work and we'll finish it with a clear glaze.",
        },
        {
            heading: "Keeping your work", tint: true,
            body: "If you'd like to keep what you make, your instructor will finish, glaze and fire it for $20 per piece. Finished work is ready in about six weeks and we'll email you when it's ready to collect. Planning to make gifts? Please plan around that six-week timeline.",
        },
        {
            heading: "Book a Clay Date",
            body: "Clay Dates are booked by request so we can match you with an instructor and a time that suits. Tell us the ages, the number of people and a few dates that work.",
            cta: { label: "Request a Clay Date", href: "/contact" },
        },
    ],
};

export default function page() { return <ProgramMain data={data} />; }
