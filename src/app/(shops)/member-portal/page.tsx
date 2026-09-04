import PortalMain from "@/components/clayspace/PortalMain";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Clay Space — Member Portal",
};

export default function page() {
    return (
        <PortalMain
            title="Member Portal"
            intro="Your studio, on your schedule. The Member Portal is where you manage your membership, reserve kiln and equipment time, and keep your 24/7 studio access up to date."
            bullets={[
                "Manage your membership tier, billing, and renewal.",
                "Book kiln firings and reserve shared equipment.",
                "Check studio access, hours, and community announcements.",
                "Sign up for member events, workshops, and open studio.",
            ]}
            loginLabel="Member log in"
        />
    );
}
