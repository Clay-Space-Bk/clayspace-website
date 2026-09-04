"use client";
import ShopModernFooter from "@/layouts/footers/ShopModernFooter";
import ShopModernHeader from "@/layouts/headers/ShopModernHeader";
import CartOffcanvas from "@/components/offcanvas/CartOffcanvas";
import SearchArea from "@/components/search-area/SearchArea";
import useGlobalContext from "@/hooks/useContext";
import Image from "next/image";
import Link from "next/link";

const wrap: React.CSSProperties = { maxWidth: 1120, margin: 0, padding: 0 };
const sec: React.CSSProperties = { padding: "150px 48px 90px clamp(24px, 14vw, 140px)", background: "#FFFDFB", minHeight: "70vh" };
const kicker: React.CSSProperties = { color: "var(--cs-orange)", fontWeight: 900, letterSpacing: ".12em", textTransform: "uppercase", fontSize: ".72rem" };

const CartPageMain = () => {
    const { cartItems, incQty, decQty, removeFromCart, cartTotal, cartCount } = useGlobalContext();
    const NYC_TAX = 0.08875; // NY 4% + NYC 4.5% + MCTD 0.375%
    const tax = cartTotal * NYC_TAX;
    const total = cartTotal + tax;

    return (
        <>
            <CartOffcanvas />
            <SearchArea />
            <ShopModernHeader variantClass="shop-white-header" useWhiteLogo />

            <main>
                <section style={sec}>
                    <div style={wrap}>
                        <h1 style={{ ...kicker, display: "block", margin: "0 0 30px" }}>
                            Your Cart{cartCount > 0 ? ` · ${cartCount} ${cartCount === 1 ? "item" : "items"}` : ""}
                        </h1>

                        {cartItems.length === 0 ? (
                            <div style={{ padding: "40px 0", color: "#5a524c" }}>
                                <p style={{ fontSize: "1.05rem", margin: "0 0 22px" }}>Your cart is empty — let&rsquo;s fix that.</p>
                                <Link href="/shop" className="cs-btn" style={cta}>Browse the shop</Link>
                            </div>
                        ) : (
                            <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) 340px", gap: 40, alignItems: "start" }} className="cs-cart-grid">
                                {/* line items */}
                                <div>
                                    {cartItems.map((item) => (
                                        <div key={item.id} style={{ display: "grid", gridTemplateColumns: "84px 1fr auto", gap: 18, alignItems: "center", padding: "18px 0", borderBottom: "1px solid #ece7e2" }}>
                                            <div style={{ width: 84, height: 84, borderRadius: 0, overflow: "hidden", background: "#f4f0ea", position: "relative" }}>
                                                <Image src={item.image} alt={item.title} fill sizes="84px" style={{ objectFit: "cover" }} />
                                            </div>
                                            <div>
                                                <Link href={item.link || "#"} style={{ fontWeight: 600, color: "#1F1A17", fontSize: "1rem" }}>{item.title}</Link>
                                                <div style={{ color: "#B14D1D", fontWeight: 700, marginTop: 4 }}>${item.price.toFixed(2)}</div>
                                                <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 10 }}>
                                                    <button onClick={() => decQty(item.id)} style={qtyBtn} aria-label="Decrease">&minus;</button>
                                                    <span style={{ minWidth: 22, textAlign: "center", fontWeight: 600 }}>{item.quantity}</span>
                                                    <button onClick={() => incQty(item.id)} style={qtyBtn} aria-label="Increase">+</button>
                                                    <button onClick={() => removeFromCart(item.id)} style={{ marginLeft: 8, background: "none", border: "none", color: "#9a928c", cursor: "pointer", fontSize: ".85rem", textDecoration: "underline" }}>Remove</button>
                                                </div>
                                            </div>
                                            <div style={{ fontWeight: 700, fontSize: "1.05rem", whiteSpace: "nowrap" }}>${(item.price * item.quantity).toFixed(2)}</div>
                                        </div>
                                    ))}
                                    <Link href="/shop" style={{ display: "inline-block", marginTop: 22, color: "var(--cs-orange)", fontWeight: 700 }}>&larr; Continue shopping</Link>
                                </div>

                                {/* summary */}
                                <aside style={{ background: "#f6f3f0", borderRadius: 0, padding: "26px 24px", position: "sticky", top: 100 }}>
                                    <h4 style={{ fontSize: "1.15rem", margin: "0 0 16px" }}>Order summary</h4>
                                    <Row label="Subtotal" value={`$${cartTotal.toFixed(2)}`} />
                                    <Row label="Sales tax (NY · 8.875%)" value={`$${tax.toFixed(2)}`} />
                                    <div style={{ borderTop: "1px solid #e0dad2", margin: "14px 0", paddingTop: 14, display: "flex", justifyContent: "space-between", fontWeight: 800, fontSize: "1.15rem" }}>
                                        <span>Total</span><span>${total.toFixed(2)}</span>
                                    </div>
                                    <Link href="/checkout" className="cs-btn" style={{ ...cta, display: "block", textAlign: "center", width: "100%" }}>Proceed to checkout</Link>
                                    <p style={{ fontSize: ".78rem", color: "#9a928c", textAlign: "center", margin: "12px 0 0" }}>Taxes shown; pickup at the studio.</p>
                                </aside>
                            </div>
                        )}
                    </div>
                </section>
            </main>

            <ShopModernFooter />

            <style dangerouslySetInnerHTML={{ __html: `@media (max-width: 900px){ .cs-cart-grid{ grid-template-columns: 1fr !important; } }` }} />
        </>
    );
};

const Row = ({ label, value }: { label: string; value: string }) => (
    <div style={{ display: "flex", justifyContent: "space-between", color: "#413a34", padding: "5px 0" }}>
        <span>{label}</span><span style={{ fontWeight: 600 }}>{value}</span>
    </div>
);

const qtyBtn: React.CSSProperties = { width: 30, height: 30, borderRadius: "50%", border: "1px solid #ddd6cf", background: "#fff", color: "#1F1A17", fontSize: 17, lineHeight: 1, cursor: "pointer" };
const cta: React.CSSProperties = { background: "var(--cs-orange)", color: "#fff", fontWeight: 700, padding: "13px 26px", borderRadius: 0, textDecoration: "none", display: "inline-block" };

export default CartPageMain;
