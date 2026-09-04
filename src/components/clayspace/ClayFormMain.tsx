"use client";
import ShopModernFooter from "@/layouts/footers/ShopModernFooter";
import ShopModernHeader from "@/layouts/headers/ShopModernHeader";
import CartOffcanvas from "@/components/offcanvas/CartOffcanvas";
import SearchArea from "@/components/search-area/SearchArea";
import { useState } from "react";
import Link from "next/link";

/* --------------------------------------------------------------------------
   A request form page — membership applications, firing inquiries, member
   commissions. Same shell as the other Clay Space pages.

   These post nowhere: the site has no backend yet, so submitting shows a
   confirmation and the copy tells people what actually happens next.
   -------------------------------------------------------------------------- */

export type FieldType = "text" | "email" | "tel" | "textarea" | "select";

export interface FormField {
    name: string;
    label: string;
    type?: FieldType;
    required?: boolean;
    placeholder?: string;
    options?: string[];
    /** Full width on the two-column grid. */
    wide?: boolean;
    help?: string;
}

export interface FormStep {
    heading: string;
    body: string;
}

export interface FormData {
    kicker: string;
    title: string;
    lede: string;
    heroImg: string;
    /** What happens after they hit send. */
    steps?: FormStep[];
    notes?: string[];
    fields: FormField[];
    submitLabel: string;
    /** Where enquiries actually land. */
    email: string;
}

const INK = "#1F1A17";
const LINE = "#DCD2C6";

const sec = (bg = "#FFFDFB"): React.CSSProperties => ({
    padding: "64px 48px 64px clamp(24px, 14vw, 140px)",
    background: bg,
});

const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: ".82rem",
    fontWeight: 700,
    color: INK,
    marginBottom: 6,
};

const controlStyle: React.CSSProperties = {
    width: "100%",
    border: `1px solid ${LINE}`,
    borderRadius: 0,
    background: "#fff",
    padding: "13px 14px",
    fontSize: ".95rem",
    fontFamily: "inherit",
    color: INK,
    outline: "none",
};

const ClayFormMain = ({ data }: { data: FormData }) => {
    const [sent, setSent] = useState(false);

    return (
        <>
            <CartOffcanvas />
            <SearchArea />
            <ShopModernHeader variantClass="shop-white-header" useWhiteLogo />

            <main style={{ background: "#FFFDFB" }}>
                <section style={{
                    minHeight: "46vh", display: "flex", alignItems: "flex-end",
                    backgroundImage: `linear-gradient(rgba(26,20,17,.34), rgba(26,20,17,.58)), url(${data.heroImg})`,
                    backgroundSize: "cover", backgroundPosition: "center",
                }}>
                    <div style={{ maxWidth: 900, width: "100%", padding: "0 48px 54px clamp(24px, 14vw, 140px)" }}>
                        <span style={{ color: "#FFD9C4", fontWeight: 800, letterSpacing: ".12em", textTransform: "uppercase", fontSize: ".72rem" }}>
                            {data.kicker}
                        </span>
                        <h1 style={{ color: "#fff", fontSize: "clamp(2.2rem,5vw,3.6rem)", margin: ".3rem 0 0", lineHeight: 1.04, letterSpacing: "-.02em" }}>
                            {data.title}
                        </h1>
                    </div>
                </section>

                <section style={sec()}>
                    <div style={{ maxWidth: 820 }}>
                        <p style={{ fontSize: "1.08rem", lineHeight: 1.65, color: "#413a34", margin: 0 }}>{data.lede}</p>
                    </div>
                </section>

                {data.steps && (
                    <section style={sec("#f6f3f0")}>
                        <div style={{ maxWidth: 1000 }}>
                            <h2 style={{ fontSize: "clamp(1.5rem,3vw,2.1rem)", letterSpacing: "-.02em", margin: "0 0 26px" }}>
                                How it works
                            </h2>
                            <ol style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))", gap: 24 }}>
                                {data.steps.map((s, i) => (
                                    <li key={s.heading} style={{ borderTop: `2px solid ${INK}`, paddingTop: 14 }}>
                                        <span style={{ display: "block", fontSize: ".78rem", fontWeight: 800, color: "#B14D1D", marginBottom: 6 }}>
                                            {String(i + 1).padStart(2, "0")}
                                        </span>
                                        <h3 style={{ fontSize: "1.02rem", margin: "0 0 6px" }}>{s.heading}</h3>
                                        <p style={{ fontSize: ".92rem", lineHeight: 1.6, color: "#5a524c", margin: 0 }}>{s.body}</p>
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </section>
                )}

                <section style={sec()}>
                    <div style={{ maxWidth: 820 }}>
                        {sent ? (
                            <div style={{ border: `1px solid ${LINE}`, padding: "34px 32px", background: "#fff" }}>
                                <h2 style={{ fontSize: "1.4rem", margin: "0 0 10px" }}>Thanks — we have your request.</h2>
                                <p style={{ color: "#5a524c", lineHeight: 1.65, margin: "0 0 6px" }}>
                                    We read everything that comes in and reply by email. If it&rsquo;s urgent,
                                    write to <a href={`mailto:${data.email}`} style={{ color: "var(--cs-orange)", fontWeight: 700 }}>{data.email}</a>.
                                </p>
                                <button onClick={() => setSent(false)} className="cs-btn" style={{ marginTop: 18, border: 0, padding: "13px 26px", fontWeight: 800 }}>
                                    Send another
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
                                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 18 }}>
                                    {data.fields.map((f) => (
                                        <div key={f.name} style={{ gridColumn: f.wide ? "1 / -1" : "auto" }}>
                                            <label style={labelStyle} htmlFor={f.name}>
                                                {f.label}{f.required && <span style={{ color: "var(--cs-orange)" }}> *</span>}
                                            </label>

                                            {f.type === "textarea" ? (
                                                <textarea id={f.name} name={f.name} required={f.required}
                                                    placeholder={f.placeholder}
                                                    style={{ ...controlStyle, minHeight: 140, resize: "vertical" }} />
                                            ) : f.type === "select" ? (
                                                <select id={f.name} name={f.name} required={f.required} style={controlStyle} defaultValue="">
                                                    <option value="" disabled>Choose one…</option>
                                                    {f.options?.map((o) => <option key={o} value={o}>{o}</option>)}
                                                </select>
                                            ) : (
                                                <input id={f.name} name={f.name} type={f.type || "text"}
                                                    required={f.required} placeholder={f.placeholder} style={controlStyle} />
                                            )}

                                            {f.help && (
                                                <span style={{ display: "block", fontSize: ".8rem", color: "#9a928c", marginTop: 5 }}>{f.help}</span>
                                            )}
                                        </div>
                                    ))}
                                </div>

                                <button type="submit" className="cs-btn" style={{ marginTop: 26, border: 0, padding: "15px 34px", fontWeight: 800, letterSpacing: ".02em" }}>
                                    {data.submitLabel}
                                </button>

                                <p style={{ fontSize: ".84rem", color: "#9a928c", marginTop: 14 }}>
                                    Prefer email? Write to <a href={`mailto:${data.email}`} style={{ color: "var(--cs-orange)", fontWeight: 700 }}>{data.email}</a>.
                                </p>
                            </form>
                        )}
                    </div>
                </section>

                {data.notes && (
                    <section style={sec("#f6f3f0")}>
                        <div style={{ maxWidth: 820 }}>
                            <h2 style={{ fontSize: "1.25rem", margin: "0 0 14px" }}>Before you send</h2>
                            <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                                {data.notes.map((n) => (
                                    <li key={n} style={{ padding: "10px 0", borderBottom: "1px solid #e4e0db", color: "#5a524c", fontSize: ".94rem", lineHeight: 1.6 }}>
                                        {n}
                                    </li>
                                ))}
                            </ul>
                            <p style={{ marginTop: 22, fontSize: ".94rem" }}>
                                <Link href="/faq" style={{ color: "var(--cs-orange)", fontWeight: 700 }}>Read the FAQ &rarr;</Link>
                            </p>
                        </div>
                    </section>
                )}
            </main>

            <ShopModernFooter />
        </>
    );
};

export default ClayFormMain;
