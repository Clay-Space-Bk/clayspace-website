"use client";
import React, { useState } from "react";
import Link from "next/link";

const inputStyle: React.CSSProperties = {
    width: "100%", border: 0, borderBottom: "1.5px solid #E6DCCF", background: "transparent",
    padding: "9px 0", fontSize: "1rem", color: "#1F1A17", outline: "none", fontFamily: "inherit",
};
const linkStyle: React.CSSProperties = {
    color: "#1F1A17", fontWeight: 700, fontSize: ".92rem", textDecoration: "underline",
    textUnderlineOffset: "4px", textDecorationThickness: "1.5px",
};

const RegisterForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => e.preventDefault();

    return (
        <form
            onSubmit={handleSubmit}
            style={{
                width: "min(94vw, 480px)", minHeight: "100vh", background: "#fff",
                boxShadow: "-18px 0 60px rgba(26,20,17,.16)", display: "flex", flexDirection: "column", overflow: "hidden",
            }}
        >
            {/* organic blob header */}
            <div style={{ position: "relative", height: 320, flex: "none", overflow: "hidden", background: "#FBEEE1" }}>
                <span style={{ position: "absolute", width: 420, height: 420, left: -110, top: -180, background: "#F98A5B", borderRadius: "58% 42% 55% 45% / 55% 48% 52% 45%", transform: "rotate(-8deg)" }} />
                <span style={{ position: "absolute", width: 480, height: 480, left: 10, top: -160, background: "#A9481D", borderRadius: "52% 48% 44% 56% / 60% 42% 58% 40%" }} />
                <span style={{ position: "absolute", width: 360, height: 360, right: -120, top: -70, background: "#EBB24C", borderRadius: "50% 50% 46% 54% / 56% 50% 50% 44%" }} />
                <span style={{ position: "absolute", width: 230, height: 230, left: 190, top: 10, background: "var(--cs-orange)", borderRadius: "56% 44% 60% 40% / 50% 56% 44% 50%", opacity: .96 }} />
                <span style={{ position: "absolute", width: 700, height: 260, left: -80, bottom: -210, background: "#fff", borderRadius: "48% 52% 42% 58% / 60% 55% 45% 40%" }} />

                <h3 style={{ position: "absolute", left: 44, bottom: 84, margin: 0, color: "#fff", fontSize: "2.4rem", fontWeight: 800, lineHeight: 1.04, letterSpacing: "-.02em", zIndex: 2, textShadow: "0 2px 14px rgba(105,43,18,.35)" }}>
                    Create<br />Account
                </h3>
            </div>

            {/* form body */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: "36px 44px 40px", overflowY: "auto" }}>
                <div style={{ marginBottom: 24 }}>
                    <input className="cs-login-input" type="text" placeholder="Full name" style={inputStyle} required />
                </div>
                <div style={{ marginBottom: 24 }}>
                    <input className="cs-login-input" type="email" placeholder="Email" style={inputStyle} required />
                </div>
                <div style={{ marginBottom: 36, position: "relative" }}>
                    <input className="cs-login-input" type={showPassword ? "text" : "password"} placeholder="Password" style={{ ...inputStyle, paddingRight: 48 }} required />
                    <button type="button" onClick={() => setShowPassword((p) => !p)}
                        style={{ position: "absolute", right: 0, bottom: 8, background: "none", border: 0, color: "#A99B8C", fontSize: ".78rem", fontWeight: 700, cursor: "pointer", textTransform: "uppercase", letterSpacing: ".06em" }}>
                        {showPassword ? "Hide" : "Show"}
                    </button>
                </div>

                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 30 }}>
                    <span style={{ fontSize: "1.7rem", fontWeight: 800, color: "#1F1A17", letterSpacing: "-.02em" }}>Sign up</span>
                    <button type="submit" aria-label="Sign up" className="cs-login-arrow"
                        style={{ width: 64, height: 64, borderRadius: "50%", border: 0, background: "#B14D1D", color: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 12px 26px rgba(177,77,29,.42)", transition: "transform .15s, background .15s" }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="4" y1="12" x2="18.5" y2="12" /><polyline points="12.5 6 19 12 12.5 18" />
                        </svg>
                    </button>
                </div>

                <div style={{ marginTop: "auto", display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 30 }}>
                    <Link href="/login" className="cs-login-link" style={linkStyle}>Log in</Link>
                    <Link href="/contact" className="cs-login-link" style={linkStyle}>Contact us</Link>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html:
                    ".cs-login-input::placeholder{color:#B4A695;opacity:1}" +
                    ".cs-login-input:focus{border-bottom-color:var(--cs-orange)}" +
                    ".cs-login-arrow:hover{background:var(--cs-orange);transform:translateX(3px)}" +
                    ".cs-login-link:hover{color:var(--cs-orange)}",
            }} />
        </form>
    );
};

export default RegisterForm;
