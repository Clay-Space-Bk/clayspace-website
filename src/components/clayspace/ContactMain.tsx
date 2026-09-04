"use client";
import ShopModernFooter from "@/layouts/footers/ShopModernFooter";
import ShopModernHeader from "@/layouts/headers/ShopModernHeader";
import CartOffcanvas from "@/components/offcanvas/CartOffcanvas";
import SearchArea from "@/components/search-area/SearchArea";
import React from "react";

const wrap: React.CSSProperties = { maxWidth: 1080, margin: 0, padding: 0 };
const input: React.CSSProperties = {
    width: "100%", border: "1px solid #E6DCCF", borderRadius: 0, background: "#fff",
    padding: "13px 14px", fontSize: ".98rem", color: "#1F1A17", outline: "none", fontFamily: "inherit",
};

const routing: [string, string][] = [
    ["Adult private lessons & parties", "Book or ask about 1-on-1 lessons, TryNights, and group events."],
    ["Kids lessons & parties", "After-school, camps, ClayDates, and birthday parties for young makers."],
    ["Membership", "Apply, schedule a tour, or ask about tiers and amenities."],
    ["Outside firing", "Firing services and kiln rentals for non-members."],
    ["Careers", "Studio Tech, Monitor, Instructor, and assistant roles."],
];

const ContactMain = () => {
    return (
        <>
            <CartOffcanvas />
            <SearchArea />
            <ShopModernHeader variantClass="shop-white-header" useWhiteLogo />

            <main style={{ background: "#FFFDFB" }}>
                <section style={{ minHeight: "44vh", display: "flex", alignItems: "flex-end",
                    backgroundImage: "linear-gradient(rgba(26,20,17,.32), rgba(26,20,17,.55)), url(/assets/img/clayspace/about/about-5.jpg)",
                    backgroundSize: "cover", backgroundPosition: "center" }}>
                    <div style={{ ...wrap, padding: "0 48px 52px clamp(24px, 14vw, 140px)" }}>
                        <h1 style={{ color: "#fff", fontSize: "clamp(2.2rem,5.5vw,3.8rem)", margin: 0, lineHeight: 1.03, letterSpacing: "-.02em" }}>Contact us</h1>
                    </div>
                </section>

                <section style={{ padding: "70px 48px 90px clamp(24px, 14vw, 140px)" }}>
                    <div style={{ ...wrap, display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1.1fr)", gap: 60, alignItems: "start" }}>

                        {/* left — studio info */}
                        <div>
                            <h2 style={{ fontSize: "1.5rem", letterSpacing: "-.02em", margin: "0 0 4px" }}>Visit the studio</h2>
                            <p style={{ color: "#5a524c", margin: "0 0 22px", lineHeight: 1.6 }}>
                                275 Calyer Street, Greenpoint, Brooklyn, NY 11222 — a 7-minute walk from the Greenpoint Ave <b>G</b> stop.
                            </p>
                            <p style={{ color: "#1F1A17", fontWeight: 700, margin: "0 0 4px" }}>Hours</p>
                            <p style={{ color: "#5a524c", margin: "0 0 22px", lineHeight: 1.6 }}>
                                Mon–Sat 10am–9:30pm · Sun 10am–9pm<br /><span style={{ color: "#9a928c", fontSize: ".9rem" }}>Summer: daily 10am–9pm · Members 24/7</span>
                            </p>
                            <p style={{ color: "#1F1A17", fontWeight: 700, margin: "0 0 6px" }}>Email</p>
                            <p style={{ margin: "0 0 26px", lineHeight: 1.9 }}>
                                <a href="mailto:info@clayspacebk.com" style={{ color: "var(--cs-orange)", fontWeight: 600 }}>info@clayspacebk.com</a> — general<br />
                                <a href="mailto:education@clayspacebk.com" style={{ color: "var(--cs-orange)", fontWeight: 600 }}>education@clayspacebk.com</a> — classes<br />
                                <a href="mailto:support@clayspacebk.com" style={{ color: "var(--cs-orange)", fontWeight: 600 }}>support@clayspacebk.com</a> — firing & shop
                            </p>
                            <p style={{ color: "#1F1A17", fontWeight: 700, margin: "0 0 6px" }}>Phone</p>
                            <p style={{ margin: "0 0 26px", lineHeight: 1.9 }}>
                                {/* Placeholder until a studio line exists. Replace here and in
                                    src/lib/structured-data.ts, which deliberately omits telephone
                                    while this is not a real number. */}
                                <a href="tel:XXX-XXX-XXXX" style={{ color: "var(--cs-orange)", fontWeight: 600 }}>XXX-XXX-XXXX</a>
                            </p>
                            <p style={{ color: "#1F1A17", fontWeight: 700, margin: "0 0 8px" }}>Who to reach</p>
                            {routing.map(([t, d]) => (
                                <div key={t} style={{ padding: "9px 0", borderBottom: "1px solid #ece7e2" }}>
                                    <div style={{ fontWeight: 700, fontSize: ".92rem" }}>{t}</div>
                                    <div style={{ color: "#9a928c", fontSize: ".82rem" }}>{d}</div>
                                </div>
                            ))}
                        </div>

                        {/* right — form */}
                        <div style={{ background: "#f6f3f0", borderRadius: 0, padding: "30px 30px 34px" }}>
                            <h2 style={{ fontSize: "1.5rem", letterSpacing: "-.02em", margin: "0 0 18px" }}>Send us a note</h2>
                            <form onSubmit={(e) => e.preventDefault()}>
                                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }}>
                                    <input style={input} placeholder="First name" required />
                                    <input style={input} placeholder="Last name" required />
                                </div>
                                <input style={{ ...input, marginBottom: 12 }} type="email" placeholder="Email" required />
                                <input style={{ ...input, marginBottom: 12 }} placeholder="Subject" required />
                                <textarea style={{ ...input, minHeight: 130, resize: "vertical", marginBottom: 8 }} placeholder="Message" required />
                                <label style={{ display: "flex", gap: 9, alignItems: "center", color: "#5a524c", fontSize: ".86rem", margin: "6px 0 18px" }}>
                                    <input type="checkbox" /> Sign me up for news and updates
                                </label>
                                <button type="submit" className="cs-btn" style={{ fontWeight: 800, border: 0, padding: "14px 30px", letterSpacing: ".02em" }}>Submit</button>
                            </form>
                        </div>
                    </div>
                </section>

                {/* map */}
                <section style={{ padding: "0 48px 90px clamp(24px, 14vw, 140px)" }}>
                    <div style={wrap}>
                        <h2 style={{ fontSize: "1.5rem", letterSpacing: "-.02em", margin: "0 0 16px" }}>Find us</h2>
                        <div style={{ borderRadius: 0, overflow: "hidden", border: "1px solid #E6DCCF", boxShadow: "0 12px 30px rgba(31,26,23,.08)" }}>
                            <iframe
                                title="Clay Space — 275 Calyer Street, Greenpoint, Brooklyn"
                                src="https://maps.google.com/maps?q=275%20Calyer%20Street%2C%20Brooklyn%2C%20NY%2011222&z=16&output=embed"
                                width="100%"
                                height="440"
                                style={{ border: 0, display: "block" }}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                allowFullScreen
                            />
                        </div>
                        <p style={{ color: "#9a928c", fontSize: ".85rem", margin: "12px 0 0" }}>
                            275 Calyer Street, Greenpoint, Brooklyn, NY 11222 ·{" "}
                            <a href="https://maps.google.com/?q=275+Calyer+Street,+Brooklyn,+NY+11222" target="_blank" rel="noopener noreferrer" style={{ color: "var(--cs-orange)", fontWeight: 600 }}>Get directions &rarr;</a>
                        </p>
                    </div>
                </section>
            </main>

            <ShopModernFooter />
        </>
    );
};

export default ContactMain;
