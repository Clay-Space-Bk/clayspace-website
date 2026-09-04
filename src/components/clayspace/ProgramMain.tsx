"use client";
import ShopModernFooter from "@/layouts/footers/ShopModernFooter";
import ShopModernHeader from "@/layouts/headers/ShopModernHeader";
import CartOffcanvas from "@/components/offcanvas/CartOffcanvas";
import SearchArea from "@/components/search-area/SearchArea";
import useGlobalContext from "@/hooks/useContext";
import Link from "next/link";

export interface Offering {
    title: string; meta?: string; price?: string; desc?: string;
    id?: number; priceNum?: number;
    /** Card links out instead of adding to cart — memberships are applied for, not bought. */
    href?: string;
    ctaLabel?: string;
}
export interface ProgramSection { heading?: string; sub?: string; body?: string; items?: Offering[]; cta?: { label: string; href: string }; tint?: boolean; }
export interface ProgramData { kicker: string; title: string; lede: string; heroImg: string; sections: ProgramSection[]; buyLabel?: string; }

const wrap: React.CSSProperties = { maxWidth: 1080, margin: 0, padding: 0 };

// Studio photos used as backgrounds for cards that have a Register CTA.
const CLASS_IMGS = [
    "/assets/img/classes/class-wheel.jpg",
    "/assets/img/classes/class-wheels.jpg",
    "/assets/img/classes/class-handbuild.jpg",
    "/assets/img/classes/class-studio.jpg",
    "/assets/img/classes/class-glaze.jpg",
];

const ProgramMain = ({ data }: { data: ProgramData }) => {
    const { addToCart } = useGlobalContext();
    const add = (it: Offering) =>
        addToCart({ id: it.id!, title: it.title, price: it.priceNum!, image: data.heroImg, link: "/cart", quantity: 1 });

    return (
        <>
            <CartOffcanvas />
            <SearchArea />
            <ShopModernHeader variantClass="shop-white-header" useWhiteLogo />

            <main style={{ background: "#FFFDFB" }}>
                {/* hero */}
                <section style={{ minHeight: "56vh", display: "flex", alignItems: "flex-end",
                    backgroundImage: `linear-gradient(rgba(26,20,17,.32), rgba(26,20,17,.56)), url(${data.heroImg})`,
                    backgroundSize: "cover", backgroundPosition: "center" }}>
                    <div style={{ ...wrap, padding: "0 48px 64px clamp(24px, 14vw, 140px)" }}>
                        <h1 style={{ color: "#fff", fontSize: "clamp(2.4rem,6vw,4.2rem)", margin: 0, lineHeight: 1.03, letterSpacing: "-.02em" }}>{data.title}</h1>
                    </div>
                </section>

                {/* lede */}
                {data.lede && (
                    <section style={{ padding: "70px 48px 10px clamp(24px, 14vw, 140px)" }}>
                        <div style={{ maxWidth: 820, margin: 0 }}>
                            <p style={{ fontSize: "1.25rem", lineHeight: 1.6, color: "#1F1A17", margin: 0 }}>{data.lede}</p>
                        </div>
                    </section>
                )}

                {/* sections */}
                {data.sections.map((s, i) => (
                    <section key={i} style={{ padding: "44px 48px 44px clamp(24px, 14vw, 140px)", background: s.tint ? "#f6f3f0" : "transparent" }}>
                        <div style={wrap}>
                            {s.heading && <h2 style={{ fontSize: "clamp(1.6rem,3.2vw,2.2rem)", letterSpacing: "-.02em", margin: "0 0 4px" }}>{s.heading}</h2>}
                            {s.sub && <p style={{ color: "#9a928c", fontWeight: 700, letterSpacing: ".04em", textTransform: "uppercase", fontSize: ".82rem", margin: "0 0 22px" }}>{s.sub}</p>}
                            {s.body && <p style={{ color: "#413a34", fontSize: "1.02rem", lineHeight: 1.65, maxWidth: 820, margin: "0 0 18px" }}>{s.body}</p>}
                            {s.items && (
                                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16, marginTop: 6 }}>
                                    {s.items.map((it, j) => {
                                        const hasCta = !!(it.id && it.priceNum);
                                        const img = CLASS_IMGS[(j + i) % CLASS_IMGS.length];

                                        // Same card as the shop, but the action is a link. Price sits
                                        // under the title so the button can name the actual step.
                                        if (it.href) {
                                            return (
                                                <div key={j} className="cs-class-card" style={{ display: "flex", flexDirection: "column" }}>
                                                    <div style={{ position: "relative", aspectRatio: "1 / 1", backgroundImage: `url(${img})`, backgroundSize: "cover", backgroundPosition: "center", marginBottom: 16, overflow: "hidden" }}>
                                                        {it.desc && (
                                                            <div className="cs-class-detail" style={{ position: "absolute", left: 0, right: 0, bottom: 0, padding: "13px 16px", background: "rgba(26,20,17,.82)", color: "#fff", fontSize: ".84rem", fontWeight: 600, lineHeight: 1.45, opacity: 0, transform: "translateY(100%)", transition: "opacity .3s ease, transform .3s ease" }}>{it.desc}</div>
                                                        )}
                                                    </div>
                                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 14 }}>
                                                        <div>
                                                            <div style={{ fontWeight: 800, fontSize: "1.12rem", letterSpacing: "-.01em", lineHeight: 1.2 }}>{it.title}</div>
                                                            {it.meta && <div style={{ color: "#6b625c", fontSize: ".82rem", marginTop: 3 }}>{it.meta}</div>}
                                                            {it.price && <div style={{ color: "#B14D1D", fontWeight: 800, fontSize: ".98rem", marginTop: 6 }}>{it.price}</div>}
                                                        </div>
                                                        <Link href={it.href} className="cs-btn cs-square"
                                                            style={{ flex: "none", fontWeight: 800, fontSize: ".92rem", border: "none", padding: "11px 20px", letterSpacing: ".02em", whiteSpace: "nowrap", textDecoration: "none" }}>
                                                            {it.ctaLabel || "Apply"}
                                                        </Link>
                                                    </div>
                                                </div>
                                            );
                                        }

                                        // CTA cards follow the shop layout: square image tile (no rounded
                                        // corners), then a title-left / price-right row and the CTA.
                                        if (hasCta) {
                                            return (
                                                <div key={j} className="cs-class-card" style={{ display: "flex", flexDirection: "column" }}>
                                                    <div style={{ position: "relative", aspectRatio: "1 / 1", backgroundImage: `url(${img})`, backgroundSize: "cover", backgroundPosition: "center", marginBottom: 16, overflow: "hidden" }}>
                                                        {it.meta && (
                                                            <div className="cs-class-detail" style={{ position: "absolute", left: 0, right: 0, bottom: 0, padding: "13px 16px", background: "rgba(26,20,17,.82)", color: "#fff", fontSize: ".84rem", fontWeight: 600, letterSpacing: ".01em", opacity: 0, transform: "translateY(100%)", transition: "opacity .3s ease, transform .3s ease" }}>{it.meta}</div>
                                                        )}
                                                    </div>
                                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 14 }}>
                                                        <div style={{ fontWeight: 800, fontSize: "1.12rem", letterSpacing: "-.01em", lineHeight: 1.2 }}>{it.title}</div>
                                                        <button type="button" onClick={() => add(it)} className="cs-btn cs-square"
                                                            style={{ flex: "none", fontWeight: 800, fontSize: ".92rem", border: "none", padding: "11px 20px", letterSpacing: ".02em", whiteSpace: "nowrap" }}>
                                                            {it.price || `$${it.priceNum}`}
                                                        </button>
                                                    </div>
                                                </div>
                                            );
                                        }
                                        return (
                                            <div key={j} style={{ padding: "18px 20px", background: "#F7DFCE", display: "flex", flexDirection: "column" }}>
                                                <div style={{ fontWeight: 800, fontSize: "1.02rem", letterSpacing: "-.01em" }}>{it.title}</div>
                                                {it.meta && <div style={{ color: "#6b625c", fontSize: ".82rem", margin: "3px 0" }}>{it.meta}</div>}
                                                {it.desc && <div style={{ color: "#6b625c", fontSize: ".86rem", margin: "6px 0 0", lineHeight: 1.5 }}>{it.desc}</div>}
                                                {(it.price || it.priceNum) && <div style={{ color: "#B14D1D", fontWeight: 800, fontSize: ".95rem", marginTop: 10 }}>{it.price || `$${it.priceNum}`}</div>}
                                            </div>
                                        );
                                    })}
                                </div>
                            )}
                            {s.cta && (
                                <div style={{ marginTop: 24 }}>
                                    <Link href={s.cta.href} className="cs-btn cs-square" style={{ display: "inline-block", fontWeight: 800, padding: "13px 28px", textDecoration: "none", letterSpacing: ".02em" }}>{s.cta.label}</Link>
                                </div>
                            )}
                        </div>
                    </section>
                ))}

                <div style={{ height: 40 }} />
            </main>

            <style dangerouslySetInnerHTML={{ __html: ".cs-square{border-radius:0 !important}.cs-class-card:hover .cs-class-detail{opacity:1 !important;transform:translateY(0) !important}" }} />
            <ShopModernFooter />
        </>
    );
};

export default ProgramMain;
