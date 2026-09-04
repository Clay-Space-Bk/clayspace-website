"use client";
import ShopModernFooter from "@/layouts/footers/ShopModernFooter";
import ShopModernHeader from "@/layouts/headers/ShopModernHeader";
import CartOffcanvas from "@/components/offcanvas/CartOffcanvas";
import SearchArea from "@/components/search-area/SearchArea";
import { useState } from "react";
import { tokens } from "@clayspace/tokens";

const wrap: React.CSSProperties = { maxWidth: 1080, margin: 0, padding: 0 };
const sec = (bg = "#FFFDFB"): React.CSSProperties => ({ padding: "48px 48px 48px clamp(24px, 14vw, 140px)", background: bg, borderTop: "1px solid #ece7e2" });
const eyebrow: React.CSSProperties = { color: "#7a5a48", fontSize: ".72rem", fontWeight: 800, letterSpacing: ".1em", textTransform: "uppercase", margin: "0 0 6px" };
const h2: React.CSSProperties = { fontSize: "clamp(1.5rem,3vw,2rem)", letterSpacing: "-.02em", margin: "0 0 20px" };
const input: React.CSSProperties = { width: "100%", border: "1px solid #E6DCCF", borderRadius: 10, background: "#fff", padding: "13px 14px", fontSize: ".98rem", color: "#1F1A17", outline: "none" };

const colors: [string, string, string][] = [
    // Orange is read from the shared token package rather than restated, so this
    // page cannot drift from the palette it documents. The entries below are a
    // separate UI palette that is NOT in @clayspace/tokens — orange is the only
    // overlap. Worth deciding whether they belong in the token set.
    ["Orange · Primary", tokens.orange, "CTA hover, accents, active states"],
    ["Brown · Button", "#3E3429", "Primary button base"],
    ["Clay", "#B14D1D", "Prices, secondary links"],
    ["Deep Clay", "#692B12", "Rare deep accent"],
    ["Ink", "#1F1A17", "Headings, dark sections"],
    ["Peach · Card", "#F7DFCE", "Cards & tiles"],
    ["Off-white · BG", "#FFFDFB", "Page background"],
    ["Warm Gray", "#F6F3F0", "Tinted sections"],
    ["Café Gray", "#ECECEA", "Café menu sections"],
    ["Border", "#ECE7E2", "Hairline dividers & borders"],
    ["Text Muted", "#7A726B", "Meta / secondary text"],
    ["Text Faint", "#9A928C", "Captions, timestamps"],
];

const Swatch = ({ name, hex, use }: { name: string; hex: string; use: string }) => {
    const light = ["#F7DFCE", "#FFFDFB", "#F6F3F0", "#ECECEA", "#ECE7E2"].includes(hex.toUpperCase());
    return (
        <div style={{ borderRadius: 12, overflow: "hidden", border: "1px solid #ece7e2", background: "#fff" }}>
            <div style={{ background: hex, height: 84, display: "flex", alignItems: "flex-end", padding: 10 }}>
                <span style={{ color: light ? "#1F1A17" : "#fff", fontWeight: 800, fontSize: ".8rem" }}>{hex}</span>
            </div>
            <div style={{ padding: "10px 12px" }}>
                <div style={{ fontWeight: 700, fontSize: ".88rem" }}>{name}</div>
                <div style={{ color: "#9a928c", fontSize: ".76rem", marginTop: 2 }}>{use}</div>
            </div>
        </div>
    );
};

const type = [
    ["Hero H1", "clamp(2.4rem, 6vw, 4.5rem)", { fontSize: "clamp(2.4rem,6vw,4.5rem)", lineHeight: 1.02, letterSpacing: "-.02em", fontWeight: 800 }],
    ["Page H1", "clamp(2rem, 5vw, 3.2rem)", { fontSize: "clamp(2rem,5vw,3.2rem)", letterSpacing: "-.02em", fontWeight: 800 }],
    ["Section H2", "clamp(1.6rem, 3.2vw, 2.3rem)", { fontSize: "clamp(1.6rem,3.2vw,2.3rem)", letterSpacing: "-.02em", fontWeight: 800 }],
    ["Card H4", "1.05rem · 800", { fontSize: "1.05rem", fontWeight: 800, letterSpacing: "-.01em" }],
    ["Body", "1.02rem · 1.65 line-height", { fontSize: "1.02rem", lineHeight: 1.65, color: "#413a34", fontWeight: 400 }],
    ["Label / Eyebrow", ".72rem · uppercase · .1em", { fontSize: ".72rem", fontWeight: 800, letterSpacing: ".1em", textTransform: "uppercase" as const, color: "#7a5a48" }],
] as const;

const StyleGuideMain = () => {
    const [checked, setChecked] = useState(true);
    return (
        <>
            <CartOffcanvas />
            <SearchArea />
            <ShopModernHeader variantClass="shop-white-header" useWhiteLogo />

            <main>
                {/* header */}
                <section style={{ ...sec("#1F1A17"), paddingTop: 150, borderTop: "none" }}>
                    <div style={wrap}>
                        <p style={{ ...eyebrow, color: "#ffb894" }}>Design System</p>
                        <h1 style={{ color: "#fff", fontSize: "clamp(2rem,5vw,3.4rem)", letterSpacing: "-.02em", margin: 0 }}>Clay Space Style Guide</h1>
                        <p style={{ color: "rgba(255,255,255,.8)", maxWidth: 620, lineHeight: 1.6, margin: "12px 0 0" }}>
                            The colors, type, buttons, cards, and form elements that make up the Clay Space site — a single reference so everything stays consistent.
                        </p>
                    </div>
                </section>

                {/* Colors */}
                <section style={sec()}>
                    <div style={wrap}>
                        <p style={eyebrow}>Foundations</p>
                        <h2 style={h2}>Color</h2>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(180px,1fr))", gap: 14 }}>
                            {colors.map(([n, hex, use]) => <Swatch key={hex} name={n} hex={hex} use={use} />)}
                        </div>
                    </div>
                </section>

                {/* Typography */}
                <section style={sec("#f6f3f0")}>
                    <div style={wrap}>
                        <p style={eyebrow}>Foundations</p>
                        <h2 style={h2}>Typography</h2>
                        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                            {type.map(([name, spec, style]) => (
                                <div key={name} style={{ borderBottom: "1px solid #e4ded6", paddingBottom: 16 }}>
                                    <div style={{ color: "#9a928c", fontSize: ".76rem", marginBottom: 6 }}>{name} · {spec}</div>
                                    <div style={style as React.CSSProperties}>The quick brown fox jumps</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Buttons */}
                <section style={sec()}>
                    <div style={wrap}>
                        <p style={eyebrow}>Components</p>
                        <h2 style={h2}>Buttons</h2>
                        <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center" }}>
                            <div>
                                <button className="cs-btn" style={{ fontWeight: 800, border: 0, padding: "13px 26px" }}>Primary button</button>
                                <div style={{ color: "#9a928c", fontSize: ".76rem", marginTop: 8 }}>.cs-btn · brown → orange on hover · 12px</div>
                            </div>
                            <div>
                                <a href="#" style={{ color: "#B14D1D", fontWeight: 700 }}>Secondary link &rarr;</a>
                                <div style={{ color: "#9a928c", fontSize: ".76rem", marginTop: 8 }}>Clay text link</div>
                            </div>
                            <div>
                                <button aria-label="Add" style={{ width: 40, height: 40, borderRadius: "50%", border: "none", background: "var(--cs-orange)", color: "#fff", fontSize: 22, lineHeight: 1, cursor: "pointer" }}>+</button>
                                <div style={{ color: "#9a928c", fontSize: ".76rem", marginTop: 8 }}>Round add (café)</div>
                            </div>
                        </div>
                        <p style={{ color: "#7a726b", fontSize: ".85rem", marginTop: 16 }}>Hover the primary button to see it shift to orange.</p>
                    </div>
                </section>

                {/* Cards */}
                <section style={sec("#f6f3f0")}>
                    <div style={wrap}>
                        <p style={eyebrow}>Components</p>
                        <h2 style={h2}>Cards</h2>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 16 }}>
                            {/* program card */}
                            <div style={{ borderRadius: 12, padding: "18px 20px", background: "#F7DFCE", display: "flex", flexDirection: "column" }}>
                                <div style={{ fontWeight: 800, fontSize: "1.02rem" }}>Program card</div>
                                <div style={{ color: "#6b625c", fontSize: ".82rem", margin: "3px 0" }}>Peach · 12px · used across programs</div>
                                <div style={{ color: "#B14D1D", fontWeight: 800, marginTop: 10 }}>$185</div>
                                <button className="cs-btn" style={{ marginTop: 12, alignSelf: "flex-start", fontWeight: 800, fontSize: ".85rem", border: "none", padding: "10px 20px" }}>Register</button>
                            </div>
                            {/* café card */}
                            <div style={{ display: "flex", alignItems: "center", gap: 16, background: "#F7DFCE", borderRadius: 16, padding: "12px 16px 12px 12px" }}>
                                <div style={{ width: 64, height: 64, borderRadius: 12, background: "#f4d9c4", flexShrink: 0 }} />
                                <div style={{ flex: 1 }}>
                                    <div style={{ fontWeight: 700 }}>Café card</div>
                                    <div style={{ color: "#7a726b", fontSize: ".82rem" }}>Peach · 16px · horizontal</div>
                                </div>
                                <button aria-label="Add" style={{ width: 40, height: 40, borderRadius: "50%", border: "none", background: "var(--cs-orange)", color: "#fff", fontSize: 22, cursor: "pointer", flexShrink: 0 }}>+</button>
                            </div>
                            {/* info card */}
                            <div style={{ background: "#fff", border: "1px solid #ece7e2", borderRadius: 16, padding: "18px 20px" }}>
                                <div style={{ fontWeight: 800 }}>Info card</div>
                                <div style={{ color: "#6b625c", fontSize: ".82rem", marginTop: 3 }}>White · hairline border · summaries & details</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Form elements */}
                <section style={sec()}>
                    <div style={wrap}>
                        <p style={eyebrow}>Components</p>
                        <h2 style={h2}>Form elements</h2>
                        <div style={{ maxWidth: 480, display: "flex", flexDirection: "column", gap: 14 }}>
                            <div>
                                <label style={{ ...eyebrow, color: "#5a524c", letterSpacing: ".04em" }}>Text input</label>
                                <input style={input} placeholder="you@example.com" />
                            </div>
                            <div>
                                <label style={{ ...eyebrow, color: "#5a524c", letterSpacing: ".04em" }}>Textarea</label>
                                <textarea style={{ ...input, minHeight: 90, resize: "vertical" }} placeholder="Message" />
                            </div>
                            <label style={{ display: "flex", gap: 9, alignItems: "center", color: "#5a524c", fontSize: ".9rem" }}>
                                <input type="checkbox" checked={checked} onChange={(e) => setChecked(e.target.checked)} /> Checkbox / toggle
                            </label>
                        </div>
                    </div>
                </section>

                {/* Chips & badges */}
                <section style={sec("#f6f3f0")}>
                    <div style={wrap}>
                        <p style={eyebrow}>Components</p>
                        <h2 style={h2}>Chips &amp; badges</h2>
                        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
                            <span style={{ background: "#F7DFCE", color: "#3E3429", fontWeight: 800, fontSize: ".82rem", padding: "6px 14px", borderRadius: 999 }}>Status chip</span>
                            <span style={{ color: "#B14D1D", fontWeight: 800 }}>$210 price</span>
                            <span style={{ background: "var(--cs-orange)", color: "#fff", borderRadius: 20, minWidth: 30, height: 30, display: "inline-flex", alignItems: "center", justifyContent: "center", fontWeight: 800, padding: "0 9px" }}>3</span>
                            <span style={{ color: "#9a928c", fontSize: ".82rem" }}>cart badge &rarr;</span>
                        </div>
                    </div>
                </section>
            </main>

            <ShopModernFooter />
        </>
    );
};

export default StyleGuideMain;
