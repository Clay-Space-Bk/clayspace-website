import PortalMain from "@/components/clayspace/PortalMain";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Clay Space — Outside Firing Portal",
};

export default function page() {
    return (
        <PortalMain
            title="Outside Firing Portal"
            intro="Not a member but need your work fired or glazed? Our Outside Firing service is open to the community. Drop off your greenware or bisque, and our team will handle the rest — pricing is calculated by cubic inch, and we'll let you know when it's ready for pickup."
            bullets={[
                "Submit greenware or bisque for bisque and glaze firing.",
                "Pricing is measured by cubic inch — pay only for the space your work takes.",
                "Schedule a drop-off window and track your firing status.",
                "Get notified when your finished work is ready for pickup.",
            ]}
            loginLabel="Firing log in"
            heroImg="/assets/img/clayspace/products/product-08.jpg"
        />
    );
}
