"use client";
import ShopModernFooter from "@/layouts/footers/ShopModernFooter";
import ShopModernHeader from "@/layouts/headers/ShopModernHeader";
import CartOffcanvas from "@/components/offcanvas/CartOffcanvas";
import SearchArea from "@/components/search-area/SearchArea";
import useGlobalContext from "@/hooks/useContext";

interface Product { img: string; title: string; meta: string; price: string; }
const products: Product[] = [
    { img: "/assets/img/clayspace/products/product-03.jpg", title: "Handmade Speckled Mug", meta: "Stoneware · member-made", price: "$38" },
    { img: "/assets/img/clayspace/products/product-08.jpg", title: "Serving Bowl", meta: "Stoneware · food-safe glaze", price: "$52" },
    { img: "/assets/img/clayspace/products/product-11.jpg", title: "Ceramic Planter", meta: "With drainage saucer", price: "$52" },
    { img: "/assets/img/clayspace/products/product-04.jpg", title: "Bud Vase", meta: "Hand-thrown", price: "$46" },
    { img: "/assets/img/clayspace/products/product-10.jpg", title: "Rustic Tea Set", meta: "Pot + two cups", price: "$120" },
    { img: "/assets/img/clayspace/products/product-09.jpg", title: "Clay Space Tool Kit", meta: "Everything to get started", price: "$45" },
    { img: "/assets/img/clayspace/products/product-12.jpg", title: "25 lb Stoneware Clay", meta: "Studio-approved body", price: "$32" },
    { img: "/assets/img/clayspace/about/about-5.jpg", title: "Studio Tote Bag", meta: "Canvas · Clay Space logo", price: "$28" },
];

const wrap: React.CSSProperties = { maxWidth: 1180, margin: 0, padding: 0 };

const CeramicsMain = () => {
    const { addToCart, toggleCartOffcanvas } = useGlobalContext();
    const add = (p: Product, i: number) => {
        addToCart({ id: `ceramics-${i}`, title: p.title, price: Number(p.price.replace(/[^0-9.]/g, "")), image: p.img, link: "/ceramics", quantity: 1 });
        toggleCartOffcanvas();
    };
    return (
        <>
            <CartOffcanvas />
            <SearchArea />
            <ShopModernHeader variantClass="shop-white-header" useWhiteLogo />

            <main style={{ background: "#FFFDFB" }}>
                <section style={{ minHeight: "48vh", display: "flex", alignItems: "flex-end",
                    backgroundImage: "linear-gradient(rgba(26,20,17,.32), rgba(26,20,17,.55)), url(/assets/img/clayspace/products/product-04.jpg)",
                    backgroundSize: "cover", backgroundPosition: "center" }}>
                    <div style={{ ...wrap, padding: "0 48px 56px clamp(24px, 14vw, 140px)" }}>
                        <h1 style={{ color: "#fff", fontSize: "clamp(2.2rem,5.5vw,3.8rem)", margin: 0, lineHeight: 1.03, letterSpacing: "-.02em" }}>Ceramics</h1>
                    </div>
                </section>

                <section style={{ padding: "60px 48px 20px clamp(24px, 14vw, 140px)" }}>
                    <div style={{ maxWidth: 820, margin: 0 }}>
                        <p style={{ fontSize: "1.15rem", lineHeight: 1.6, color: "#1F1A17", margin: 0 }}>
                            Handmade pottery, studio staples, clay, and tools — much of it made by our own members. Every purchase supports our makers and the studio.
                        </p>
                    </div>
                </section>

                <section style={{ padding: "34px 48px 90px clamp(24px, 14vw, 140px)" }}>
                    <div style={wrap}>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 26 }}>
                            {products.map((p, i) => (
                                <div key={i} style={{ display: "flex", flexDirection: "column" }}>
                                    <div style={{ height: 280, borderRadius: 0, backgroundImage: `url(${p.img})`, backgroundSize: "cover", backgroundPosition: "center", border: "1px solid #ece7e2" }} />
                                    <div style={{ padding: "14px 2px 0", display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 12 }}>
                                        <div>
                                            <div style={{ fontWeight: 800, fontSize: "1rem", letterSpacing: "-.01em" }}>{p.title}</div>
                                            <div style={{ color: "#9a928c", fontSize: ".8rem", marginTop: 2 }}>{p.meta}</div>
                                        </div>
                                        <div style={{ color: "#B14D1D", fontWeight: 800, fontSize: "1rem", flex: "none" }}>{p.price}</div>
                                    </div>
                                    <button type="button" onClick={() => add(p, i)} className="cs-btn" style={{ marginTop: 12, width: "100%", border: "none", padding: "11px 0", borderRadius: 0, fontWeight: 800, cursor: "pointer" }}>Add to cart</button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <ShopModernFooter />
        </>
    );
};

export default CeramicsMain;
