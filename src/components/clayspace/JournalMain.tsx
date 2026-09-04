"use client";
import ShopModernFooter from "@/layouts/footers/ShopModernFooter";
import ShopModernHeader from "@/layouts/headers/ShopModernHeader";
import CartOffcanvas from "@/components/offcanvas/CartOffcanvas";
import SearchArea from "@/components/search-area/SearchArea";

interface Post { img: string; tag: string; date: string; title: string; excerpt: string; }
const posts: Post[] = [
    { img: "/assets/img/clayspace/about/about-6.jpg", tag: "Centered in Equity", date: "December 2024", title: "“Us” — Our First Residency Cohort", excerpt: "Our Centered in Equity residency launched in January 2024 to address financial and racial disparity in the ceramic arts. The cohort's group show, US, opened at the Yashar Gallery in Greenpoint." },
    { img: "/assets/img/clayspace/products/product-01.jpg", tag: "Community", date: "Late Spring", title: "The Great Brooklyn Throw Down", excerpt: "Teams by region go head-to-head in wheel-throwing and handbuilding relays to close out the Brooklyn Ceramic Arts Tour — a family-friendly night of skills, laughter, and an after-party for the whole clay community." },
    { img: "/assets/img/clayspace/products/product-08.jpg", tag: "Shop", date: "December", title: "Members' Holiday Market", excerpt: "Four rooms, 70+ members, and a truly festive weekend of shopping local. Find one-of-a-kind handmade gifts and meet the makers behind them." },
    { img: "/assets/img/clayspace/about/about-2.jpg", tag: "Open Studios", date: "May / June", title: "Greenpoint Open Studios", excerpt: "Join 30+ Clay Space members for the annual Greenpoint-wide open-studio tour — meet the artists, see works in progress, and shop their wares." },
    { img: "/assets/img/clayspace/products/product-11.jpg", tag: "Fundraiser", date: "Spring & Fall", title: "Shop Small Greenpoint Sidewalk Sales", excerpt: "Pay-what-you-wish ceramics on the sidewalk, with proceeds supporting our kids' summer-camp scholarship and Centered in Equity residency funds. For every $100 spent locally, $68 stays in the neighborhood." },
    { img: "/assets/img/clayspace/products/product-03.jpg", tag: "Workshop", date: "June", title: "Ready for Retail with Perri Salka", excerpt: "The WonderMart's Perri Salka joins us to help makers move from studio to shelf — clear, actionable strategy for turning a ceramics practice into a small business." },
];

const wrap: React.CSSProperties = { maxWidth: 1120, margin: 0, padding: 0 };

const JournalMain = () => {
    return (
        <>
            <CartOffcanvas />
            <SearchArea />
            <ShopModernHeader variantClass="shop-white-header" useWhiteLogo />

            <main style={{ background: "#FFFDFB" }}>
                <section style={{ minHeight: "46vh", display: "flex", alignItems: "flex-end",
                    backgroundImage: "linear-gradient(rgba(26,20,17,.32), rgba(26,20,17,.55)), url(/assets/img/clayspace/about/about-3.jpg)",
                    backgroundSize: "cover", backgroundPosition: "center" }}>
                    <div style={{ ...wrap, padding: "0 48px 56px clamp(24px, 14vw, 140px)" }}>
                        <h1 style={{ color: "#fff", fontSize: "clamp(2.2rem,5.5vw,3.8rem)", margin: 0, lineHeight: 1.03, letterSpacing: "-.02em" }}>Journal</h1>
                    </div>
                </section>

                <section style={{ padding: "64px 48px 80px clamp(24px, 14vw, 140px)" }}>
                    <div style={wrap}>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 28 }}>
                            {posts.map((p, i) => (
                                <article key={i} style={{ border: "1px solid #ece7e2", borderRadius: 0, overflow: "hidden", background: "#fff", display: "flex", flexDirection: "column" }}>
                                    <div style={{ height: 200, backgroundImage: `url(${p.img})`, backgroundSize: "cover", backgroundPosition: "center" }} />
                                    <div style={{ padding: "20px 22px 24px", display: "flex", flexDirection: "column", flex: 1 }}>
                                        <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 8 }}>
                                            <span style={{ color: "var(--cs-orange)", fontWeight: 800, fontSize: ".68rem", letterSpacing: ".08em", textTransform: "uppercase" }}>{p.tag}</span>
                                            <span style={{ color: "#9a928c", fontSize: ".76rem" }}>· {p.date}</span>
                                        </div>
                                        <h2 style={{ fontSize: "1.2rem", letterSpacing: "-.01em", margin: "0 0 8px", lineHeight: 1.25 }}>{p.title}</h2>
                                        <p style={{ color: "#5a524c", fontSize: ".9rem", lineHeight: 1.55, margin: 0 }}>{p.excerpt}</p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <ShopModernFooter />
        </>
    );
};

export default JournalMain;
