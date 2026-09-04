"use client";
import ShopModernFooter from "@/layouts/footers/ShopModernFooter";
import ShopModernHeader from "@/layouts/headers/ShopModernHeader";
import CartOffcanvas from "@/components/offcanvas/CartOffcanvas";
import SearchArea from "@/components/search-area/SearchArea";
import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";
import { faqSchema } from "@/lib/structured-data";

const faqs: { q: string; a: string }[] = [
    { q: "What is Clay Space?", a: "A community ceramic center in Greenpoint, Brooklyn offering studio memberships, classes for adults and kids, workshops, firing services, and community events \u2014 planting seeds since 2006." },
    { q: "Where is Clay Space located?", a: "275 Calyer Street, Greenpoint, Brooklyn \u2014 a 7-minute walk from the Greenpoint Ave G subway stop. We're open Mon\u2013Sat 10am\u20139:30pm and Sun 10am\u20139pm." },
    { q: "What does Clay Space have to offer?", a: "Memberships with 24/7 studio access, a full array of semester classes and workshops for adults, an after-school program and camps for kids, one-off TryNights and ClayDates, private lessons and parties, outside firing and kiln rentals, member commissions, and community events." },
    { q: "Can I do a walk-in visit or a lesson?", a: "We plan tours and lessons in advance, so please apply for membership or book a class or TryNight online rather than stopping by unannounced." },
    { q: "What types of classes or workshops does Clay Space offer?", a: "Twelve-week semester classes in wheel throwing and handbuilding from beginner to advanced, plus independent study. Shorter workshops run throughout the year with visiting artists \u2014 mold making, nerikomi, surface decoration, glaze chemistry. For kids there's Clay Play after school, summer camps, TryDays and Clay Dates." },
    { q: "How do I pick up my pieces from an event or one-time class?", a: "Finished work from a one-off class is ready in about six weeks \u2014 we'll email you when it is. Collect during business hours, 10am\u20139pm. Additional pieces from a TryNight or Clay Date can be glazed and fired for $20 each." },
    { q: "Do I need experience to join membership?", a: "Yes. Membership requires an independent, intermediate or advanced grasp of the full ceramic process \u2014 usually more than a year of consistent lessons \u2014 because member work areas don't include instruction. There's also a 3-month minimum term." },
    { q: "How long is the waitlist for membership?", a: "It varies with availability and the level you're after. Apply and you'll hear back within 10 days either way. Our own students are first in line as spots open, ahead of applicants from outside the community working at the same level." },
    { q: "What clay bodies are available for use?", a: "Clays from Laguna, Standard, and Kentucky Mud \u2014 two white stonewares, three speckled, red, dark brown, two porcelains, sculpture clay, and porcelain slip, all stocked in our clay and tool shop." },
    { q: "What glazes does the studio offer?", a: "More than 30 house-made glazes covering classic to contemporary styles, plus engobes and washes, in a full glaze application room with a spray booth and a test-tile wall. Once members learn the ropes they can mix their own in the glaze kitchen." },
    { q: "Are the studio glazes food safe?", a: "Our food-safe glazes are labeled as such. Ask a studio tech if you're unsure whether a particular glaze is right for functional ware." },
    { q: "Can I bring my own clay and glazes for use at the studio?", a: "Outside materials need approval before they're fired here \u2014 unknown clay bodies and glazes can damage kilns and other people's work. Send us the manufacturer and product names and we'll confirm." },
    { q: "How do firings work?", a: "Firings are priced by cubic inch, and bisque and glaze are separate firings. Members fire at 4\u00a2 per cubic inch; registered students at 8\u00a2 for combined bisque and glaze; outside firing is 8\u00a2 per cubic inch per firing. Standard turnaround is three weeks." },
    { q: "Does Clay Space offer firing access to non-members and students?", a: "Yes \u2014 outside firing at 8\u00a2 per cubic inch per firing, after a materials approval and an initial visit. Rush service is 2\u00d7 the fee for a one-week turnaround. Start with the firing inquiry form." },
    { q: "What sort of kilns do you have?", a: "Six kilns ranging from 1.4 to 16 cu ft. Rentals include \u201cEZ\u201d (L&L, 7 cu ft), \u201cArt\u201d and \u201cGenie\u201d (Cone Art, 10 cu ft) and \u201cFreddie\u201d, a Fredrickson front-loader. Rentals are case by case, depending on member and student volume." },
    { q: "Is there finished pottery available for sale?", a: "Yes \u2014 member work is sold at events like our Annual Holiday Market and Open Studios, and in the Clay Space shop." },
    { q: "Does Clay Space do any custom work?", a: "Our members take commissions \u2014 tableware, event favours, corporate gifts, sculpture. Send a brief through the commissions form and we'll circulate it to our members; whoever's the right fit will contact you directly." },
    { q: "How can I find out about events?", a: "Join our mailing list and follow us on Instagram at @clayspace_bk. Everything upcoming is also listed on the Events page \u2014 open studios, the Great Brooklyn Throw Down, workshops and the annual holiday market." },
    { q: "Is there a lost and found at the studio?", a: "Yes, at the front desk. Ask a studio tech or monitor and they'll check it for you." },
    { q: "I am missing a piece \u2014 how can I find it?", a: "Check the shelves for your firing stage first, then ask a studio tech. Work moves between greenware, bisque and glaze shelving as it's processed, so pieces are usually a stage further along than expected. Signing and photographing your work makes this much easier." },
    { q: "Is Clay Space handicap accessible?", a: "The studio is on one level with a lift-served entrance in the Greenpoint Industrial Center. Get in touch before your visit with any specific access needs and we'll talk you through the route in and the layout." },
    { q: "Can I bring a guest to Clay Space?", a: "Guests are welcome for tours, events and open studios. During working hours the studio is a shared space, so let a studio tech know if you're bringing someone with you." },
    { q: "Can I bring my dog to Clay Space?", a: "No \u2014 the studio is a working ceramics space with dust, glaze chemicals and kilns, so please leave pets at home." },
    { q: "How can I join the team?", a: "We hire Studio Techs, Monitors, Instructors and classroom assistants throughout the year. See our Careers page and email us with the role you're interested in." },
];


const FaqMain = () => {
    return (
        <>
            <JsonLd data={faqSchema(faqs)} />
            <CartOffcanvas />
            <SearchArea />
            <ShopModernHeader variantClass="shop-white-header" useWhiteLogo />

            <main style={{ background: "#FFFDFB" }}>
                <section style={{ minHeight: "46vh", display: "flex", alignItems: "flex-end",
                    backgroundImage: "linear-gradient(rgba(26,20,17,.32), rgba(26,20,17,.55)), url(/assets/img/clayspace/about/about-6.jpg)",
                    backgroundSize: "cover", backgroundPosition: "center" }}>
                    <div style={{ maxWidth: 900, margin: 0, width: "100%", padding: "0 48px 56px clamp(24px, 14vw, 140px)" }}>
                        <h1 style={{ color: "#fff", fontSize: "clamp(2.2rem,5vw,3.6rem)", margin: 0, lineHeight: 1.04, letterSpacing: "-.02em" }}>Frequently Asked Questions</h1>
                    </div>
                </section>

                <section style={{ padding: "60px 48px 40px clamp(24px, 14vw, 140px)" }}>
                    <div style={{ maxWidth: 820, margin: 0 }}>
                        <p style={{ fontSize: "1.1rem", lineHeight: 1.6, color: "#413a34", margin: "0 0 30px" }}>
                            This FAQ is for newcomers to Clay Space. Members and students should refer to their portals for details specific to their needs. Don&rsquo;t see your question? <Link href="/contact" style={{ color: "var(--cs-orange)", fontWeight: 700 }}>Contact us</Link>.
                        </p>

                        {faqs.map((f, i) => (
                            <details key={i} style={{ borderBottom: "1px solid #E7E2DD", padding: "6px 0" }}>
                                <summary style={{ listStyle: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, padding: "16px 0", fontWeight: 700, fontSize: "1.06rem", color: "#1F1A17" }}>
                                    {f.q}
                                    <span style={{ color: "var(--cs-orange)", fontSize: "1.4rem", lineHeight: 1, flex: "none" }}>+</span>
                                </summary>
                                <p style={{ color: "#5a524c", fontSize: ".98rem", lineHeight: 1.62, margin: "0 0 18px", maxWidth: 720 }}>{f.a}</p>
                            </details>
                        ))}
                    </div>
                </section>
                <div style={{ height: 40 }} />
            </main>

            <ShopModernFooter />
        </>
    );
};

export default FaqMain;
