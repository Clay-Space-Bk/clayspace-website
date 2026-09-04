"use client";
import ShopModernFooter from "@/layouts/footers/ShopModernFooter";
import ShopModernHeader from "@/layouts/headers/ShopModernHeader";
import CartOffcanvas from "@/components/offcanvas/CartOffcanvas";
import SearchArea from "@/components/search-area/SearchArea";
import Link from "next/link";

const wrap: React.CSSProperties = { maxWidth: 940, margin: 0, padding: 0 };
const h2: React.CSSProperties = { fontSize: "clamp(1.7rem,3.4vw,2.4rem)", letterSpacing: "-.02em", margin: ".3rem 0 1rem" };
const p: React.CSSProperties = { color: "#413a34", fontSize: "1.02rem", lineHeight: 1.65, margin: "0 0 14px" };
const sec = (bg = "#FFFDFB"): React.CSSProperties => ({ padding: "72px 48px 72px clamp(24px, 14vw, 140px)", background: bg, scrollMarginTop: 90 });

const values = [
    ["Creativity as a right", "Creativity is a right, not a privilege. We provide supportive conditions for creativity to awaken and be expressed by as many people as possible."],
    ["Community at the center", "By creating a collaborative atmosphere, members build relationships, exchange ideas, and expand knowledge — individual practice thrives in community."],
    ["A culture of sharing", "A non-competitive environment provides unlimited learning. We welcome all skill levels, knowing one member's success is another's inspiration."],
    ["Mindfulness & respect", "Communicating with empathy and kindness goes a long way. Inclusion and respect are a defining part of our identity."],
    ["Our role in the collective", "As a ceramic arts center, we support expression through clay — a medium that is molded and transformed, as we are within community."],
    ["Furthering our mission", "We're committed to a BIPOC initiative and residency supporting artists bound by a historical lack of access and resources."],
];

const team = [
    ["Janine Sopp", "she/her", "Founding Director, Owner"],
    ["Olivia Hock", "she/her", "Admin Assistant, Youth Coordinator, Social Media"],
    ["Michael Gundlach", "he/him", "Studio Manager"],
    ["Gabrielle Tang", "she/they", "Director of Education"],
    ["Liam Kelly", "they/them", "Events Coordinator, Social Media"],
];

const kilns = [
    ["“EZ” (L&L) · 7 cu ft", "$280 bisque / $320 glaze"],
    ["“Art” & “Genie” (Cone Art) · 10 cu ft", "$460 bisque / $500 glaze"],
    ["“Freddie” Front Loader", "$920 bisque / $1000 glaze"],
];

const faqs = [
    "What is Clay Space?", "Where is Clay Space located?", "Can I do a walk-in visit or lesson?",
    "How do I pick up my pieces?", "Do I need experience to join membership?", "How long is the membership waitlist?",
    "What clay bodies & glazes are available?", "Are the studio glazes food safe?", "How do firings work?",
    "Do you offer firing to non-members?", "Is finished pottery available for sale?", "Is Clay Space accessible?",
    "Can I bring a guest or my dog?", "How can I join the team?",
];

const AboutMain = () => {
    return (
        <>
            <CartOffcanvas />
            <SearchArea />
            <ShopModernHeader variantClass="shop-white-header" useWhiteLogo />

            <main>
                {/* hero */}
                <section style={{ minHeight: "62vh", display: "flex", alignItems: "flex-end",
                    backgroundImage: "linear-gradient(rgba(26,20,17,.30), rgba(26,20,17,.55)), url(/assets/img/clayspace/about/about-2.jpg)",
                    backgroundSize: "cover", backgroundPosition: "center" }}>
                    <div style={{ ...wrap, padding: "0 48px 70px clamp(24px, 14vw, 140px)" }}>
                        <h1 style={{ color: "#fff", fontSize: "clamp(2.4rem,6vw,4.5rem)", margin: 0, lineHeight: 1.02, letterSpacing: "-.02em" }}>
                            About Clay Space
                        </h1>
                    </div>
                </section>

                {/* Our Story */}
                <section id="story" style={sec()}>
                    <div style={wrap}>
                        <h2 style={h2}>Our seeds take root</h2>
                        <p style={p}>Originally named Clay Space 1205 in GMDC&rsquo;s Manhattan Avenue building, Clay Space planted its first communal clay studio in 2006. More than fifteen years later, a new location opened with a teaching component — keeping the same shared community values inside a reimagined industrial space.</p>
                        <p style={p}>Today we&rsquo;re home in the former Leviton Manufacturing Company, now the Greenpoint Industrial Center, alongside a vibrant community of makers at 275 Calyer Street. With classes for adults and kids, Clay Space is a flourishing, supportive community of ceramic makers.</p>
                        <p style={{ ...p, fontStyle: "italic", color: "#1F1A17" }}><b>Our mission</b> is to cultivate a sharing culture that uplifts and nurtures clay artists and makers at every level of growth — envisioning a world where clay-making is valued, elevated, and accessible to everyone.</p>
                    </div>
                </section>

                {/* Values */}
                <section style={sec("#f6f3f0")}>
                    <div style={wrap}>
                        <h2 style={h2}>Our Values</h2>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 22, marginTop: 10 }}>
                            {values.map(([t, d]) => (
                                <div key={t}>
                                    <h4 style={{ fontSize: "1.1rem", margin: "0 0 5px", letterSpacing: "-.01em" }}>{t}</h4>
                                    <p style={{ ...p, fontSize: ".92rem", margin: 0 }}>{d}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Team */}
                <section id="team" style={sec()}>
                    <div style={wrap}>
                        <h2 style={h2}>A team effort</h2>
                        <p style={p}>Serving and nurturing a clay community takes many hands. We celebrate everyone who moves hundreds of pieces through each process and answers a million questions daily — with warmth and a smile.</p>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 2, marginTop: 12 }}>
                            {team.map(([n, pr, role]) => (
                                <div key={n} style={{ padding: "12px 0", borderBottom: "1px solid #ece7e2" }}>
                                    <b style={{ fontSize: ".98rem" }}>{n}</b> <span style={{ color: "#9a928c", fontSize: ".78rem" }}>{pr}</span>
                                    <div style={{ color: "#5a524c", fontSize: ".85rem" }}>{role}</div>
                                </div>
                            ))}
                        </div>
                        <p style={{ ...p, fontSize: ".9rem", color: "#9a928c", marginTop: 16 }}>Plus a deep bench of instructors, studio techs, and support staff who keep the kilns firing and the community thriving. <Link href="/team" style={{ color: "var(--cs-orange)", fontWeight: 700 }}>Meet the full team &rarr;</Link></p>
                    </div>
                </section>

                {/* Amenities */}
                <section id="amenities" style={sec("#f6f3f0")}>
                    <div style={wrap}>
                        <h2 style={h2}>Amenities &amp; Perks</h2>
                        <p style={p}>A fully equipped ceramic center filled with natural light — no basement vibes. Glaze application room with 30+ house-made glazes, a glaze kitchen and spray booth, a full clay &amp; tool shop, MERV-13 HVAC, and <b>six kilns</b> ranging 1.4&ndash;16 cu ft.</p>
                        <p style={{ ...p, fontSize: ".95rem" }}><b>For students:</b> a 12-wheel throwing classroom, handbuilding classroom, Northstar extruder &amp; slab roller, and weekly bench time. <b>For members:</b> a dedicated 24/7 work area with 10 wheels, Brent slab roller, private entrance, kitchenette, class discounts, and event inclusion.</p>
                    </div>
                </section>

                {/* Services */}
                <section id="services" style={sec()}>
                    <div style={wrap}>
                        <h2 style={h2}>Services</h2>
                        <p style={p}>Not a current member or student? We offer <b>outside firings</b> at 8&cent; per cubic inch per firing (3-week turnaround; rush available), plus <b>kiln rentals</b> and member <b>commissions</b>.</p>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 16, marginTop: 12 }}>
                            {kilns.map(([n, price]) => (
                                <div key={n} style={{ border: "1px solid #ece7e2", borderRadius: 0, padding: "16px 18px", background: "#fff" }}>
                                    <div style={{ fontWeight: 700, fontSize: ".95rem" }}>{n}</div>
                                    <div style={{ color: "#B14D1D", fontWeight: 700, fontSize: ".85rem", marginTop: 4 }}>{price}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Centered in Equity */}
                <section id="equity" style={{ ...sec(), background: "#1F1A17" }}>
                    <div style={wrap}>
                        <h2 style={{ ...h2, color: "#fff" }}>Our residency program</h2>
                        <p style={{ ...p, color: "rgba(255,255,255,.82)" }}>To fulfill our mission more intentionally, Clay Space is building a BIPOC initiative to support ceramic artists bound to a historical lack of access and resources. Our Residency Program addresses financial and racial disparity in the ceramic arts — creating opportunities for intersectionality and equity by giving artists the time and space to develop, create, and share their work with the wider community.</p>
                        <p style={{ ...p, color: "#ffb894", fontWeight: 700, margin: 0 }}>Launched January 2024.</p>
                    </div>
                </section>

                {/* FAQ */}
                <section id="faq" style={sec("#f6f3f0")}>
                    <div style={wrap}>
                        <h2 style={h2}>Frequently Asked Questions</h2>
                        <div style={{ columns: 2, columnGap: 30 }}>
                            {faqs.map((q) => (
                                <div key={q} style={{ breakInside: "avoid", padding: "9px 0", borderBottom: "1px solid #e4e0db", color: "#1F1A17", fontSize: ".92rem", fontWeight: 500 }}>{q}</div>
                            ))}
                        </div>
                        <p style={{ ...p, marginTop: 22 }}><Link href="/contact" style={{ color: "var(--cs-orange)", fontWeight: 700 }}>Contact us &rarr;</Link> for anything not answered here.</p>
                    </div>
                </section>
            </main>

            <ShopModernFooter />
        </>
    );
};

export default AboutMain;
