import ClaySpaceHome from "@/components/pages/ClaySpaceHome";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clay Space — Ceramic Center in Greenpoint, Brooklyn",
  description: "A ceramic center in Greenpoint offering memberships, classes and community events for clay artists at every level. 275 Calyer Street, Brooklyn.",
};

export default function Home() {
  return <ClaySpaceHome />;
}
