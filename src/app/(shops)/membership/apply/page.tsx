import ClayFormMain, { FormData } from '@/components/clayspace/ClayFormMain';
import { Metadata } from 'next';

export const metadata: Metadata = { title: "Clay Space — Membership Application" };

const data: FormData = {
    kicker: "Membership",
    title: "Apply for membership",
    lede: "Because we put community at the center, we meet every prospective member in person before offering a spot. Please don't stop by without applying first — tours are scheduled. Tell us about your practice and we'll be in touch within 10 days.",
    heroImg: "/assets/img/clayspace/products/product-03.jpg",
    email: "info@clayspacebk.com",
    steps: [
        { heading: "Apply", body: "Fill in this form so we can understand your experience, the work you make and what you need from a studio." },
        { heading: "Hear back", body: "Within 10 days we'll either invite you to tour or point you toward the class that will get you ready." },
        { heading: "Tour", body: "Visit, meet people, see the amenities. Once we all agree, you're offered a membership based on availability." },
    ],
    notes: [
        "Membership is for makers working independently at an intermediate or advanced level — usually more than a year of consistent lessons.",
        "Our member work areas don't include instruction, so you'll need a solid grasp of the whole ceramic process.",
        "There's a 3-month minimum term.",
        "Not there yet? That's common. Our intermediate, advanced and independent study classes are the route in, and students are first in line as spots open.",
        "Read the Community Agreements before applying — they describe how we share the studio.",
    ],
    submitLabel: "Submit application",
    fields: [
        { name: "firstName", label: "First name", required: true },
        { name: "lastName", label: "Last name", required: true },
        { name: "email", label: "Email", type: "email", required: true },
        { name: "phone", label: "Phone", type: "tel" },
        { name: "experience", label: "How long have you been working in clay?", type: "select", required: true, wide: true, options: ["Less than a year", "1–2 years", "3–5 years", "More than 5 years"] },
        { name: "tier", label: "Which membership level interests you?", type: "select", wide: true, options: ["Communal — work-table ($210–255/mo)", "Semi-private — work-space ($310–380/mo)", "Work-annex ($365–525/mo)", "Private — work-studio ($485–650/mo)", "Not sure yet"] },
        { name: "practice", label: "Tell us about your practice", type: "textarea", required: true, wide: true, placeholder: "What do you make? Where have you studied or worked? Wheel, handbuilding, slip casting, production?", help: "This is the part we read most closely." },
        { name: "needs", label: "What do you need from the studio?", type: "textarea", wide: true, placeholder: "Storage, kiln access, hours you'd work, scale of your pieces…" },
    ],
};

export default function page() { return <ClayFormMain data={data} />; }
