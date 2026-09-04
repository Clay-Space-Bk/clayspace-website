import ClayFormMain, { FormData } from '@/components/clayspace/ClayFormMain';
import { Metadata } from 'next';

export const metadata: Metadata = { title: "Clay Space — Outside Firing Inquiry" };

const data: FormData = {
    kicker: "Services · Outside firing",
    title: "Submit work for firing",
    lede: "We fire work for makers who aren't current members or students at 8¢ per cubic inch, per firing. Every firing is approved first — start with this inquiry and we'll come back to you with any questions about your clay and glazes.",
    heroImg: "/assets/img/clayspace/products/product-12.jpg",
    email: "support@clayspacebk.com",
    steps: [
        { heading: "Inquire", body: "Send this form. If you're not using one of our approved clays or glazes, tell us what you are using so we can approve the materials." },
        { heading: "Come in", body: "Book an appointment for an overview of the space and our systems, then create an account and measure your work at home." },
        { heading: "Drop off", body: "Bring work at the scheduled time with a firing slip in each piece. Photograph and sign everything for identification." },
        { heading: "Collect", body: "Three-week turnaround. Pick up 10am–9pm from the foyer cabinets; we hold work for two months." },
    ],
    notes: [
        "8¢ per cubic inch, per firing. Bisque and glaze are separate firings.",
        "Rush service is 2× the firing fee and guarantees a one-week turnaround — submit a separate RUSH slip with the work.",
        "Turnaround is three weeks as standard, because members and students are prioritised.",
        "Unknown clays and glazes must be approved before drop-off — send the manufacturer and product names.",
        "Work left longer than necessary risks being lost or damaged, so please collect promptly.",
    ],
    submitLabel: "Send firing inquiry",
    fields: [
        { name: "name", label: "Name", required: true },
        { name: "email", label: "Email", type: "email", required: true },
        { name: "phone", label: "Phone", type: "tel" },
        { name: "firingType", label: "Firing needed", type: "select", required: true, options: ["Bisque", "Glaze", "Both bisque and glaze", "Not sure"] },
        { name: "pieces", label: "Roughly how many pieces?", placeholder: "e.g. 12" },
        { name: "rush", label: "Rush service?", type: "select", options: ["No — standard 3 weeks", "Yes — 1 week at 2× the fee"] },
        { name: "clay", label: "What clay are you using?", required: true, wide: true, placeholder: "Manufacturer and clay body, e.g. Standard 112 Speckled Buff", help: "If it isn't one of our stocked clays we'll need to approve it." },
        { name: "glaze", label: "What glazes are you using?", wide: true, placeholder: "List any glazes, underglazes or slips that aren't ours" },
        { name: "details", label: "Anything else we should know?", type: "textarea", wide: true, placeholder: "Largest piece dimensions, deadlines, whether anything is sculptural or unusually thick…" },
    ],
};

export default function page() { return <ClayFormMain data={data} />; }
