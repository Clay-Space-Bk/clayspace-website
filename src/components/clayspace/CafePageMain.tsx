"use client";
import ShopModernFooter from "@/layouts/footers/ShopModernFooter";
import ShopModernHeader from "@/layouts/headers/ShopModernHeader";
import CartOffcanvas from "@/components/offcanvas/CartOffcanvas";
import SearchArea from "@/components/search-area/SearchArea";
import Link from "next/link";

// Café photography is not shot yet. One local brand placeholder stands in for every item
// so the menu reads as intentional rather than broken. Swap this for real photos per item
// when they exist; the `id` argument is kept so call sites do not have to change.
const U = (_id: string) => "/assets/img/clayspace/cafe-placeholder.jpg";

type CafeItem = { id: number; title: string; price: number; img: string; desc?: string };
type CafeSection = { key: string; heading: string; emoji: string; tint?: boolean; items: CafeItem[] };

// café items live in their own id namespace (9000+) so they never collide with shop products
const menu: CafeSection[] = [
    {
        key: "coffee", heading: "Coffee", emoji: "☕",
        items: [
            { id: 9001, title: "Drip Coffee", price: 4, img: U("1509042239860-f550ce710b93"), desc: "Rotating small-batch roast" },
            { id: 9002, title: "Cortado", price: 4.5, img: U("1541167760496-1628856ab772"), desc: "Equal parts espresso & milk" },
            { id: 9003, title: "Latte / Cappuccino", price: 5, img: U("1572442388796-11668a67e53d"), desc: "Silky steamed milk" },
            { id: 9004, title: "House Cold Brew", price: 5, img: U("1461023058943-07fcbe16d735"), desc: "Steeped 18 hours" },
            { id: 9005, title: "Mocha", price: 5.5, img: U("1578314675249-a6910f80cc4e"), desc: "Espresso + dark chocolate" },
        ],
    },
    {
        key: "tea", heading: "Tea & more", emoji: "🍵", tint: true,
        items: [
            { id: 9011, title: "Loose-Leaf Tea", price: 4, img: U("1517701550927-30cf4ba1dba5"), desc: "Ask about the daily selection" },
            { id: 9012, title: "Matcha Latte", price: 6, img: U("1571115177098-24ec42ed204d"), desc: "Ceremonial-grade matcha" },
            { id: 9013, title: "Chai Latte", price: 5.5, img: U("1600271886742-f049cd451bba"), desc: "House-spiced" },
            { id: 9014, title: "Hot Chocolate", price: 4.5, img: U("1542990253-0d0f5be5f0ed"), desc: "Steamed, not too sweet" },
        ],
    },
    {
        key: "bites", heading: "Pastries & bites", emoji: "🥐",
        items: [
            { id: 9021, title: "Croissant", price: 4, img: U("1555507036-ab1f4038808a"), desc: "Baked fresh daily" },
            { id: 9022, title: "Seasonal Muffin", price: 4, img: U("1607958996333-41aef7caefaa"), desc: "Ask what's in today" },
            { id: 9023, title: "Banana Bread", price: 4.5, img: U("1481391319762-47dff72954d9"), desc: "Toasted on request" },
            { id: 9024, title: "Cookie", price: 3, img: U("1499636136210-6f4ee915583e"), desc: "Big, chewy, warm" },
            { id: 9025, title: "Bagel & Cream Cheese", price: 5, img: U("1585445490387-f47934b73b54"), desc: "Toasted, schmeared" },
        ],
    },
];

const wrap: React.CSSProperties = { maxWidth: 1500, margin: 0, padding: 0 };
const secPad = (bg: string): React.CSSProperties => ({ padding: "60px clamp(24px, 8vw, 90px)", background: bg, scrollMarginTop: 84 });

// Clicking a product opens the product detail page, where you add to cart & check out.
const DETAIL = "/shop";

const CafePageMain = () => {
    return (
        <>
            <CartOffcanvas />
            <SearchArea />
            <ShopModernHeader variantClass="shop-white-header" useWhiteLogo />

            <main style={{ background: "#F4F0EA" }}>
                {/* hero */}
                <section style={{ minHeight: "56vh", display: "flex", alignItems: "flex-end",
                    backgroundImage: "linear-gradient(rgba(26,20,17,.28), rgba(26,20,17,.62)), url(/assets/img/clayspace/products/product-10.jpg)",
                    backgroundSize: "cover", backgroundPosition: "center" }}>
                    <div style={{ ...wrap, padding: "0 48px 60px clamp(24px, 8vw, 90px)" }}>
                        <h1 style={{ color: "#fff", fontSize: "clamp(2.2rem,5.6vw,4rem)", margin: 0, lineHeight: 1.03, letterSpacing: "-.02em" }}>
                            The Clay Space Café
                        </h1>
                    </div>
                </section>

                {/* product grids — shop layout; each card opens the product detail page */}
                {menu.map((s) => (
                    <section key={s.key} id={s.key} style={secPad(s.tint ? "#ECE6DB" : "#F4F0EA")}>
                        <div style={wrap}>
                            <h2 style={{ fontSize: "clamp(1.6rem,3.2vw,2.3rem)", letterSpacing: "-.02em", margin: "0 0 28px" }}>{s.heading}</h2>
                            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 24 }}>
                                {s.items.map((it) => (
                                    <Link key={it.id} href={DETAIL} className="cs-cafe-card" style={{ textDecoration: "none", color: "inherit", display: "flex", flexDirection: "column" }}>
                                        <div style={{ position: "relative", aspectRatio: "1 / 1", backgroundImage: `url(${it.img})`, backgroundSize: "cover", backgroundPosition: "center", overflow: "hidden", marginBottom: 16 }}>
                                            <div className="cs-cafe-hover" style={{ position: "absolute", left: 0, right: 0, bottom: 0, padding: "13px 16px", textAlign: "center", background: "rgba(26,20,17,.82)", color: "#fff", fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", fontSize: ".8rem", opacity: 0, transform: "translateY(100%)", transition: "opacity .3s ease, transform .3s ease" }}>View →</div>
                                        </div>
                                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 12 }}>
                                            <div style={{ fontWeight: 800, fontSize: "1.1rem", letterSpacing: "-.01em", lineHeight: 1.2 }}>{it.title}</div>
                                            <div style={{ color: "#B14D1D", fontWeight: 800, fontSize: "1.05rem", whiteSpace: "nowrap" }}>${it.price.toFixed(2)}</div>
                                        </div>
                                        {it.desc && <div style={{ color: "#7a726b", fontSize: ".84rem", margin: "5px 0 0" }}>{it.desc}</div>}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </section>
                ))}
            </main>

            <style dangerouslySetInnerHTML={{ __html: ".cs-cafe-card:hover .cs-cafe-hover{opacity:1 !important;transform:translateY(0) !important}" }} />
            <ShopModernFooter />
        </>
    );
};

export default CafePageMain;
