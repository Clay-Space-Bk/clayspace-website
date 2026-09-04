"use client"
import useGlobalContext from '@/hooks/useContext';
import Image from 'next/image';
import Link from 'next/link';
import { CloseIcon } from '@/components/clayspace/Icons';

const CartOffcanvas = () => {
    const { openCartOffcanvas, toggleCartOffcanvas, cartItems, removeFromCart, incQty, decQty, cartTotal } = useGlobalContext();

    return (
        <>
            <div className={`cartmini__area ${openCartOffcanvas ? "cartmini-opened" : ""}`}>
                <div className="cartmini__wrapper d-flex justify-content-between flex-column">
                    <div className="cartmini__top-wrapper">
                        <div className="cartmini__top p-relative">
                            <div className="cartmini__top-title">
                                <h4>Shopping cart</h4>
                            </div>
                            <div className="cartmini__close">
                                <button onClick={toggleCartOffcanvas} type="button" className="cartmini__close-btn cartmini-close-btn">
                                    <CloseIcon title="Close cart" />
                                </button>
                            </div>
                        </div>

                        {cartItems.length === 0 ? (
                            <div style={{ padding: "56px 8px", textAlign: "center", color: "var(--cs-oxblood-a60)" }}>
                                <p style={{ margin: "0 0 20px" }}>Your cart is empty.</p>
                                <Link href="/shop" onClick={toggleCartOffcanvas} className="cartmini__empty-btn" style={{ display: "inline-block", padding: "14px 26px" }}>
                                    Browse the shop
                                </Link>
                            </div>
                        ) : (
                            <div className="cartmini__widget">
                                {cartItems.map((item) => (
                                    <div className="cartmini__widget-item" key={item.id}>
                                        <div className="cartmini__thumb">
                                            <Link href={item.link || "#"}>
                                                <Image src={item.image} alt={item.title} width={70} height={70} style={{ objectFit: "cover" }} />
                                            </Link>
                                        </div>
                                        <div className="cartmini__content">
                                            <h5 className="cartmini__title">
                                                <Link href={item.link || "#"}>{item.title}</Link>
                                            </h5>
                                            <div className="cartmini__price-wrapper">
                                                <span className="cartmini__price">${item.price.toFixed(2)}</span>
                                                <span className="cartmini__quantity">each</span>
                                            </div>
                                            <div className="cartmini__stepper" style={{ display: "flex", alignItems: "center", marginTop: 10 }}>
                                                <button onClick={() => decQty(item.id)} aria-label="Decrease" style={qtyBtn}>&minus;</button>
                                                <span style={{ minWidth: 40, height: 30, lineHeight: "30px", textAlign: "center", fontWeight: 600, borderTop: "1px solid var(--cs-oxblood-a28)", borderBottom: "1px solid var(--cs-oxblood-a28)" }}>{item.quantity}</span>
                                                <button onClick={() => incQty(item.id)} aria-label="Increase" style={qtyBtn}>+</button>
                                            </div>
                                        </div>
                                        <button onClick={() => removeFromCart(item.id)} className="cartmini__del" type="button" aria-label="Remove">
                                            <CloseIcon size={13} title="Remove item" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="cartmini__checkout">
                        <div className="cartmini__checkout-title mb-30">
                            <h4>Subtotal:</h4>
                            <span>${cartTotal.toFixed(2)}</span>
                        </div>
                        <div className="cartmini__checkout-btn">
                            <Link href="/cart" onClick={toggleCartOffcanvas} className="tp-btn-white-border coffee-bg text-center mb-10 w-100">
                                View Cart
                            </Link>
                            <Link href="/checkout" onClick={toggleCartOffcanvas} className="tp-btn-white-border coffee-bg border-none text-center w-100">
                                Checkout
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div onClick={toggleCartOffcanvas} className={`body-overlay ${openCartOffcanvas ? "opened" : ""}`}></div>
        </>
    );
};

const qtyBtn: React.CSSProperties = {
    width: 30, height: 30, borderRadius: 0, border: "1px solid var(--cs-oxblood-a28)",
    background: "transparent", color: "var(--cs-oxblood)", fontSize: 15, lineHeight: 1, cursor: "pointer",
};

export default CartOffcanvas;
