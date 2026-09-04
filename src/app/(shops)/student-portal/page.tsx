import PortalMain from "@/components/clayspace/PortalMain";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Clay Space — Student Portal",
};

export default function page() {
    return (
        <PortalMain
            title="Student Portal"
            intro="Welcome back, makers. Your Student Portal is home base for everything tied to your classes — access your course materials, check your studio schedule, and re-register for the next session all in one place."
            bullets={[
                "View class materials, handouts, and instructor notes for your current course.",
                "Check your schedule, session dates, and make-up class availability.",
                "Re-register for upcoming sessions before they open to the public.",
                "Update your contact info and manage your student account.",
            ]}
            loginLabel="Student log in"
        />
    );
}
