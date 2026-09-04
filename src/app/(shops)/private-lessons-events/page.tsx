import Redirect from "@/components/clayspace/Redirect";
import { Metadata } from "next";

export const metadata: Metadata = {
    robots: { index: false, follow: true },
    title: "Clay Space — Private Lessons & Events",
};

export default function page() {
    return <Redirect to="/events" label="Private Lessons &amp; Events" />;
}
