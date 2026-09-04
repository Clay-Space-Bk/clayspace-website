"use client";
import ShopModernFooter from "@/layouts/footers/ShopModernFooter";
import ShopModernHeader from "@/layouts/headers/ShopModernHeader";
import CartOffcanvas from "@/components/offcanvas/CartOffcanvas";
import SearchArea from "@/components/search-area/SearchArea";
import useGlobalContext from "@/hooks/useContext";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const wrap: React.CSSProperties = { maxWidth: 1120, margin: 0, padding: 0 };
const sec: React.CSSProperties = { padding: "150px 48px 90px clamp(24px, 14vw, 140px)", background: "#FFFDFB", minHeight: "70vh" };
const label: React.CSSProperties = { display: "block", fontSize: ".78rem", fontWeight: 700, color: "#5a524c", letterSpacing: ".04em", textTransform: "uppercase", margin: "0 0 6px" };
const input: React.CSSProperties = { width: "100%", padding: "12px 14px", borderRadius: 0, border: "1px solid #e0dad2", background: "#fff", fontSize: ".95rem", outline: "none" };
const cta: React.CSSProperties = { background: "var(--cs-orange)", color: "#fff", fontWeight: 700, padding: "14px 26px", borderRadius: 0, border: "none", cursor: "pointer", width: "100%", fontSize: "1rem" };
const walletBtn: React.CSSProperties = { display: "flex", alignItems: "center", justifyContent: "center", gap: 6, height: 48, borderRadius: 0, border: "none", cursor: "pointer", fontSize: ".95rem" };

const AppleMark = () => (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true" style={{ marginTop: -2 }}>
        <path d="M16.365 1.43c0 1.14-.42 2.05-1.13 2.79-.83.86-1.9 1.36-2.94 1.28-.13-1.06.42-2.19 1.1-2.88.77-.79 2.03-1.35 2.97-1.19zM20.5 17.05c-.55 1.27-.82 1.84-1.53 2.96-.99 1.56-2.39 3.5-4.12 3.51-1.54.02-1.94-1-4.03-.99-2.09.01-2.53 1.01-4.07.99-1.73-.03-3.05-1.78-4.04-3.34C-.02 16.86-.28 12.37 1.36 9.97c1.03-1.5 2.65-2.38 4.18-2.38 1.56 0 2.54 1.02 3.83 1.02 1.25 0 2.01-1.02 3.81-1.02 1.36 0 2.8.74 3.83 2.02-3.36 1.84-2.82 6.64.99 8.44z" />
    </svg>
);

const GoogleGMark = () => (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
        <path fill="#4285F4" d="M23.52 12.27c0-.86-.08-1.5-.24-2.16H12v3.92h6.6c-.13 1.1-.85 2.76-2.44 3.87l-.02.15 3.54 2.74.25.03c2.25-2.08 3.55-5.14 3.55-8.55z" />
        <path fill="#34A853" d="M12 24c3.24 0 5.95-1.07 7.94-2.91l-3.78-2.93c-1.01.7-2.37 1.19-4.16 1.19-3.17 0-5.86-2.09-6.82-4.98l-.14.01-3.68 2.85-.05.13C3.29 21.3 7.34 24 12 24z" />
        <path fill="#FBBC05" d="M5.18 14.37c-.25-.73-.4-1.51-.4-2.37s.15-1.64.39-2.37l-.01-.16L1.42 6.56l-.12.06A11.97 11.97 0 000 12c0 1.94.46 3.77 1.3 5.38l3.88-3.01z" />
        <path fill="#EA4335" d="M12 4.75c2.25 0 3.77.97 4.63 1.78l3.38-3.3C17.94 1.19 15.24 0 12 0 7.34 0 3.29 2.7 1.3 6.62l3.87 3.01C6.14 6.84 8.83 4.75 12 4.75z" />
    </svg>
);

const CheckoutPageMain = () => {
    const { cartItems, cartTotal, clearCart } = useGlobalContext();
    const [placed, setPlaced] = useState(false);
    const [tipPct, setTipPct] = useState(18); // café-style default; 0 = no tip
    const NYC_TAX = 0.08875; // NY 4% + NYC 4.5% + MCTD 0.375%
    const tax = cartTotal * NYC_TAX;
    const tip = cartTotal * (tipPct / 100);
    const total = cartTotal + tax + tip;
    const tipOptions = [0, 15, 18, 20];

    const placeOrder = (e?: React.FormEvent) => {
        e?.preventDefault();
        setPlaced(true);
        clearCart();
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <>
            <CartOffcanvas />
            <SearchArea />
            <ShopModernHeader variantClass="shop-white-header" useWhiteLogo />

            <main>
                <section style={sec}>
                    <div style={wrap}>
                        {placed ? (
                            <div style={{ maxWidth: 560 }}>
                                <h1 style={{ fontSize: "clamp(2rem,5vw,3.2rem)", letterSpacing: "-.02em", margin: "0 0 16px" }}>Thank you! 🎉</h1>
                                <p style={{ color: "#413a34", fontSize: "1.05rem", lineHeight: 1.6, margin: "0 0 26px" }}>
                                    Your order is placed. A confirmation is on its way to your inbox, and we&rsquo;ll email you when it&rsquo;s ready for pickup at 275 Calyer Street, Greenpoint.
                                </p>
                                <Link href="/shop" className="cs-btn" style={{ ...cta, display: "inline-block", width: "auto", textDecoration: "none" }}>Continue shopping</Link>
                            </div>
                        ) : cartItems.length === 0 ? (
                            <div>
                                <h1 style={{ fontSize: "clamp(2rem,5vw,3.2rem)", letterSpacing: "-.02em", margin: "0 0 16px" }}>Your cart is empty</h1>
                                <p style={{ color: "#5a524c", margin: "0 0 22px" }}>Add something you love before checking out.</p>
                                <Link href="/shop" className="cs-btn" style={{ ...cta, display: "inline-block", width: "auto", textDecoration: "none" }}>Browse the shop</Link>
                            </div>
                        ) : (
                            <>
                                <h1 style={{ fontSize: "clamp(2rem,5vw,3.2rem)", letterSpacing: "-.02em", margin: "0 0 22px" }}>Checkout</h1>

                                {/* express checkout — one-tap wallets */}
                                <div style={{ maxWidth: 480, marginBottom: 34 }}>
                                    <div style={{ fontSize: ".72rem", fontWeight: 800, color: "#5a524c", letterSpacing: ".08em", textTransform: "uppercase", margin: "0 0 12px" }}>Express checkout</div>
                                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                                        <button type="button" onClick={() => placeOrder()} aria-label="Pay with Apple Pay"
                                            style={{ ...walletBtn, background: "#3a3530", color: "#f2eee9" }}>
                                            <AppleMark /> <span style={{ fontWeight: 600 }}>Pay</span>
                                        </button>
                                        <button type="button" onClick={() => placeOrder()} aria-label="Pay with Google Pay"
                                            style={{ ...walletBtn, background: "#f2f0ec", color: "#6a625b", border: "1px solid #ddd6cf" }}>
                                            <GoogleGMark /> <span style={{ fontWeight: 600 }}>Pay</span>
                                        </button>
                                        <button type="button" onClick={() => placeOrder()} aria-label="Pay with PayPal"
                                            style={{ ...walletBtn, background: "#e2d3ad", color: "#3a4767" }}>
                                            <span style={{ fontStyle: "italic", fontWeight: 800, fontSize: "1.02rem" }}><span style={{ color: "#3a4767" }}>Pay</span><span style={{ color: "#6683a3" }}>Pal</span></span>
                                        </button>
                                        <button type="button" onClick={() => placeOrder()} aria-label="Pay with Link"
                                            style={{ ...walletBtn, background: "#a9ccbd", color: "#2a3d34" }}>
                                            <span style={{ fontWeight: 800, fontSize: "1.02rem", letterSpacing: "-.01em" }}>link</span>
                                        </button>
                                    </div>
                                    <div style={{ display: "flex", alignItems: "center", gap: 14, margin: "22px 0 0", color: "#9a928c" }}>
                                        <span style={{ flex: 1, height: 1, background: "#e0dad2" }} />
                                        <span style={{ fontSize: ".78rem", fontWeight: 600 }}>or pay with card</span>
                                        <span style={{ flex: 1, height: 1, background: "#e0dad2" }} />
                                    </div>
                                </div>

                                <form onSubmit={placeOrder} style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) 360px", gap: 40, alignItems: "start" }} className="cs-checkout-grid">
                                    {/* details */}
                                    <div>
                                        <h4 style={{ fontSize: "1.1rem", margin: "0 0 16px" }}>Contact details</h4>
                                        <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 480 }}>
                                            <Field label="First name" name="fname" />
                                            <Field label="Last name" name="lname" />
                                            <Field label="Email" name="email" type="email" />
                                            <Field label="Phone" name="phone" type="tel" />
                                        </div>
                                        <p style={{ fontSize: ".82rem", color: "#7a726b", margin: "12px 0 0", maxWidth: 480 }}>Pickup at the studio — 275 Calyer Street, Greenpoint. We&rsquo;ll text you when it&rsquo;s ready.</p>

                                        <h4 style={{ fontSize: "1.1rem", margin: "28px 0 16px" }}>Payment</h4>
                                        <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 480 }}>
                                            <Field label="Card number" name="card" placeholder="•••• •••• •••• ••••" />
                                            <Field label="Expiry" name="exp" placeholder="MM / YY" />
                                            <Field label="CVC" name="cvc" placeholder="•••" />
                                        </div>
                                        <p style={{ fontSize: ".78rem", color: "#9a928c", marginTop: 12 }}>Demo checkout — no payment is processed.</p>
                                    </div>

                                    {/* summary */}
                                    <aside style={{ background: "#f6f3f0", borderRadius: 0, padding: "26px 24px", position: "sticky", top: 100 }}>
                                        <h4 style={{ fontSize: "1.15rem", margin: "0 0 16px" }}>Your order</h4>
                                        {cartItems.map((item) => (
                                            <div key={item.id} style={{ display: "flex", alignItems: "center", gap: 12, padding: "8px 0" }}>
                                                <div style={{ width: 46, height: 46, borderRadius: 0, overflow: "hidden", background: "#fff", position: "relative", flexShrink: 0 }}>
                                                    <Image src={item.image} alt={item.title} fill sizes="46px" style={{ objectFit: "cover" }} />
                                                </div>
                                                <div style={{ flex: 1, fontSize: ".85rem" }}>
                                                    <div style={{ fontWeight: 600, color: "#1F1A17" }}>{item.title}</div>
                                                    <div style={{ color: "#9a928c" }}>Qty {item.quantity}</div>
                                                </div>
                                                <div style={{ fontWeight: 700, fontSize: ".9rem" }}>${(item.price * item.quantity).toFixed(2)}</div>
                                            </div>
                                        ))}
                                        {/* Tip */}
                                        <div style={{ borderTop: "1px solid #e0dad2", margin: "14px 0 0", paddingTop: 14 }}>
                                            <div style={{ fontSize: ".78rem", fontWeight: 700, color: "#5a524c", letterSpacing: ".04em", textTransform: "uppercase", marginBottom: 8 }}>Add a tip</div>
                                            <div style={{ display: "flex", gap: 8 }}>
                                                {tipOptions.map((pct) => {
                                                    const active = tipPct === pct;
                                                    return (
                                                        <button key={pct} type="button" onClick={() => setTipPct(pct)}
                                                            style={{ flex: 1, padding: "9px 0", borderRadius: 0, cursor: "pointer", fontWeight: 700, fontSize: ".85rem",
                                                                border: active ? "1px solid var(--cs-orange)" : "1px solid #e0dad2",
                                                                background: active ? "var(--cs-orange)" : "#fff", color: active ? "#fff" : "#1F1A17" }}>
                                                            {pct === 0 ? "None" : `${pct}%`}
                                                        </button>
                                                    );
                                                })}
                                            </div>
                                        </div>

                                        <div style={{ borderTop: "1px solid #e0dad2", margin: "14px 0 0", paddingTop: 14 }}>
                                            <Row label="Subtotal" value={`$${cartTotal.toFixed(2)}`} />
                                            <Row label="Sales tax (NY · 8.875%)" value={`$${tax.toFixed(2)}`} />
                                            {tipPct > 0 && <Row label={`Tip (${tipPct}%)`} value={`$${tip.toFixed(2)}`} />}
                                            <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 800, fontSize: "1.12rem", marginTop: 10 }}>
                                                <span>Total</span><span>${total.toFixed(2)}</span>
                                            </div>
                                        </div>
                                        <button type="submit" className="cs-btn" style={{ ...cta, marginTop: 18 }}>Place order</button>
                                    </aside>
                                </form>
                            </>
                        )}
                    </div>
                </section>
            </main>

            <ShopModernFooter />

            <style dangerouslySetInnerHTML={{ __html: `@media (max-width: 900px){ .cs-checkout-grid{ grid-template-columns: 1fr !important; } }` }} />
        </>
    );
};

const Field = ({ label: l, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) => (
    <div>
        <label style={label} htmlFor={name}>{l}</label>
        <input style={input} id={name} name={name} type={type} placeholder={placeholder} required />
    </div>
);

const Row = ({ label: l, value }: { label: string; value: string }) => (
    <div style={{ display: "flex", justifyContent: "space-between", color: "#413a34", padding: "5px 0" }}>
        <span>{l}</span><span style={{ fontWeight: 600 }}>{value}</span>
    </div>
);

export default CheckoutPageMain;
