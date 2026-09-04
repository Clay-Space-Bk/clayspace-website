"use client";
import ShopModernFooter from "@/layouts/footers/ShopModernFooter";
import ShopModernHeader from "@/layouts/headers/ShopModernHeader";
import CartOffcanvas from "@/components/offcanvas/CartOffcanvas";
import SearchArea from "@/components/search-area/SearchArea";
import Link from "next/link";

export interface PortalProps {
    title: string;
    intro: string;
    bullets?: string[];
    loginLabel?: string;
    heroImg?: string;
}

const PortalMain = ({ title, intro, bullets, loginLabel = "Log in", heroImg = "/assets/img/clayspace/about/about-2.jpg" }: PortalProps) => {
    return (
        <>
            <CartOffcanvas />
            <SearchArea />
            <ShopModernHeader variantClass="shop-white-header" useWhiteLogo />

            <main style={{ background: "#FFFDFB" }}>
                {/* hero */}
                <section
                    style={{
                        minHeight: "60vh",
                        display: "flex",
                        alignItems: "flex-end",
                        backgroundImage: `linear-gradient(rgba(26,20,17,.35), rgba(26,20,17,.55)), url(${heroImg})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <div style={{ padding: "0 48px 70px clamp(24px, 14vw, 140px)" }}>
                        <h1 style={{ color: "#fff", fontSize: "clamp(2.4rem,6vw,4.5rem)", margin: 0, lineHeight: 1.02, letterSpacing: "-.02em" }}>
                            {title}
                        </h1>
                    </div>
                </section>

                {/* intro + login */}
                <section style={{ padding: "80px 48px 40px clamp(24px, 14vw, 140px)" }}>
                    <div style={{ maxWidth: 820, margin: 0 }}>
                        <p style={{ fontSize: "1.25rem", lineHeight: 1.6, color: "#1F1A17", margin: 0 }}>{intro}</p>

                        {bullets && bullets.length > 0 && (
                            <ul style={{ listStyle: "none", padding: 0, margin: "36px 0 0" }}>
                                {bullets.map((b, i) => (
                                    <li key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start", padding: "12px 0", borderBottom: "1px solid #ece7e2" }}>
                                        <span style={{ color: "var(--cs-orange)", fontWeight: 900, fontSize: "1rem", lineHeight: 1.5, flex: "none" }}>&mdash;</span>
                                        <span style={{ color: "#5a524c", fontSize: "1.02rem", lineHeight: 1.55 }}>{b}</span>
                                    </li>
                                ))}
                            </ul>
                        )}

                        <div style={{ marginTop: 40 }}>
                            <Link href="/login" className="cs-btn" style={{ display: "inline-block", fontWeight: 800, padding: "13px 28px", textDecoration: "none", letterSpacing: ".02em" }}>
                                {loginLabel}
                            </Link>
                            <p style={{ color: "#9a928c", fontSize: ".9rem", marginTop: 18 }}>
                                Need help getting in? <Link href="/contact" style={{ color: "#B14D1D", fontWeight: 700, textDecoration: "none" }}>Contact the studio</Link>.
                            </p>
                        </div>
                    </div>
                </section>

                <div style={{ height: 50 }} />
            </main>

            <ShopModernFooter />
        </>
    );
};

export default PortalMain;
