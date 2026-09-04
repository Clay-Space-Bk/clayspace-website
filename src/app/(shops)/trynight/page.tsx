import Redirect from "@/components/clayspace/Redirect";
import { Metadata } from "next";

export const metadata: Metadata = {
    robots: { index: false, follow: true },
    title: "Clay Space — Try Night",
};

export default function page() {
    return <Redirect to="/classes" label="TryNight" />;
}
