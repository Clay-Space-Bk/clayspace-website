"use client";
import React, { createContext, useEffect, useState } from "react";
import { AppContextType, CartItem, CartItemId } from "@/types/custom-d-t";

const defaultContextValue: AppContextType = {
    openOffcanvas: false,
    setOpenOffcanvas: () => { },
    openCartOffcanvas: false,
    setOpenCartOffcanvas: () => { },
    toggleCartOffcanvas: () => { },
    toggleOffcanvas: () => { },
    toggleModal: () => { },
    openSearch: false,
    setOpenSearch: () => { },
    toggleSearch: () => { },
    openModal: false,
    cartItems: [],
    addToCart: () => { },
    removeFromCart: () => { },
    incQty: () => { },
    decQty: () => { },
    clearCart: () => { },
    cartCount: 0,
    cartTotal: 0,
};

export const AppContext = createContext<AppContextType>(defaultContextValue);

const CART_KEY = "cs_cart";

const AppProvider = ({ children }: { children: React.ReactNode }) => {
    const [openOffcanvas, setOpenOffcanvas] = useState<boolean>(false);
    const [openCartOffcanvas, setOpenCartOffcanvas] = useState<boolean>(false);
    const [openSearch, setOpenSearch] = useState<boolean>(false);
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    // Hydrate the cart from localStorage once, on mount.
    //
    // This has to be an effect. The site is a static export, so the server-
    // rendered HTML is built with an empty cart; reading localStorage during
    // render would produce a different first paint on the client and trip a
    // hydration mismatch. Setting state after mount is the correct trade — one
    // extra render, and the markup matches.
    useEffect(() => {
        try {
            const raw = localStorage.getItem(CART_KEY);
            // eslint-disable-next-line react-hooks/set-state-in-effect
            if (raw) setCartItems(JSON.parse(raw));
        } catch { /* ignore */ }
    }, []);

    // persist explicitly from mutators (avoids Strict-Mode effect races clobbering storage)
    const persist = (next: CartItem[]) => {
        setCartItems(next);
        try { localStorage.setItem(CART_KEY, JSON.stringify(next)); } catch { /* ignore */ }
    };

    const addToCart = (item: CartItem) => {
        setCartItems((prev) => {
            const found = prev.find((p) => p.id === item.id);
            const next = found
                ? prev.map((p) => p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p)
                : [...prev, { ...item, quantity: 1 }];
            try { localStorage.setItem(CART_KEY, JSON.stringify(next)); } catch { /* ignore */ }
            return next;
        });
        setOpenCartOffcanvas(true);
    };
    const removeFromCart = (id: CartItemId) => persist(cartItems.filter((p) => p.id !== id));
    const incQty = (id: CartItemId) => persist(cartItems.map((p) => p.id === id ? { ...p, quantity: p.quantity + 1 } : p));
    const decQty = (id: CartItemId) => persist(cartItems.flatMap((p) => p.id === id ? (p.quantity > 1 ? [{ ...p, quantity: p.quantity - 1 }] : []) : [p]));
    const clearCart = () => persist([]);

    const cartCount = cartItems.reduce((s, i) => s + i.quantity, 0);
    const cartTotal = cartItems.reduce((s, i) => s + i.price * i.quantity, 0);

    const contextValue: AppContextType = {
        openOffcanvas,
        setOpenOffcanvas,
        openCartOffcanvas,
        setOpenCartOffcanvas,
        toggleOffcanvas: () => setOpenOffcanvas((prev) => !prev),
        toggleCartOffcanvas: () => setOpenCartOffcanvas((prev) => !prev),
        openSearch,
        setOpenSearch,
        toggleSearch: () => setOpenSearch((prev) => !prev),
        toggleModal: () => setOpenModal((prev) => !prev),
        openModal,
        cartItems,
        addToCart,
        removeFromCart,
        incQty,
        decQty,
        clearCart,
        cartCount,
        cartTotal,
    };

    return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

export default AppProvider;
