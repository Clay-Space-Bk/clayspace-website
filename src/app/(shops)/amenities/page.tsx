import Redirect from "@/components/clayspace/Redirect";
import { Metadata } from "next";

export const metadata: Metadata = {
    robots: { index: false, follow: true },
    title: "Clay Space — Amenities",
};

export default function page() {
    return <Redirect to="/about#amenities" label="Amenities" />;
}
