"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

/* --------------------------------------------------------------------------
   Sign in / create account, as a slide-out panel rather than its own page.

   Shares geometry with ClayNavRail and the cart drawer — same width, easing
   and backdrop. Conventional account-form layout: federated options first, a
   divider, then labelled fields in bordered boxes. Square corners throughout.
   -------------------------------------------------------------------------- */

interface Props {
    open: boolean;
    onClose: () => void;
}

const INK = "#5D1509";
const LINE = "rgba(93,21,9,.22)";
const MUTED = "rgba(93,21,9,.58)";

const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: ".82rem",
    fontWeight: 600,
    color: INK,
    marginBottom: 7,
};

const inputWrap: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: 10,
    border: `1px solid ${LINE}`,
    background: "#FFFCF6",
    padding: "0 14px",
    height: 50,
};

const inputStyle: React.CSSProperties = {
    flex: 1,
    border: 0,
    background: "transparent",
    outline: "none",
    fontFamily: "inherit",
    fontSize: ".95rem",
    color: INK,
    height: "100%",
};

const socialBtn: React.CSSProperties = {
    flex: 1,
    height: 48,
    border: `1px solid ${LINE}`,
    background: "#FFFCF6",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
};

const MailIcon = () => (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke={MUTED} strokeWidth="1.8">
        <rect x="2.5" y="5" width="19" height="14" rx="1" />
        <path d="m3 6.5 9 6 9-6" />
    </svg>
);

const LockIcon = () => (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke={MUTED} strokeWidth="1.8">
        <rect x="4" y="10.5" width="16" height="10.5" rx="1" />
        <path d="M8 10.5V7.2a4 4 0 0 1 8 0v3.3" />
    </svg>
);

const UserIcon = () => (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke={MUTED} strokeWidth="1.8">
        <circle cx="12" cy="8" r="3.6" />
        <path d="M4.5 20.5c1.2-4 3.9-6 7.5-6s6.3 2 7.5 6" />
    </svg>
);

const ClayAuthPanel: React.FC<Props> = ({ open, onClose }) => {
    const [mode, setMode] = useState<"signin" | "signup">("signin");
    const [showPassword, setShowPassword] = useState(false);
    const isSignUp = mode === "signup";

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
        document.addEventListener("keydown", onKey);
        return () => document.removeEventListener("keydown", onKey);
    }, [onClose]);

    return (
        <>
            <div
                onClick={onClose}
                style={{
                    position: "fixed", inset: 0, background: "rgba(26,20,17,.45)", zIndex: 1000,
                    opacity: open ? 1 : 0, visibility: open ? "visible" : "hidden",
                    transition: "opacity .3s ease, visibility .3s ease",
                }}
            />

            <aside
                className="clay-auth-panel"
                aria-hidden={!open}
                aria-label={isSignUp ? "Create an account" : "Sign in"}
                style={{
                    position: "fixed", top: 0, right: open ? 0 : "-100vw", height: "100%",
                    background: "#FAF1E0", zIndex: 1001, color: INK,
                    boxShadow: "-16px 0 50px rgba(26,20,17,.28)",
                    transition: "right .42s cubic-bezier(.2,.7,.2,1)",
                    display: "flex", flexDirection: "column",
                }}
            >
                {/* header bar */}
                <div style={{
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    padding: "22px 36px", borderBottom: `1px solid ${LINE}`, flex: "none",
                }}>
                    <span style={{ fontSize: ".78rem", fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase" }}>
                        Clay Space
                    </span>
                    <button onClick={onClose} aria-label="Close" className="clay-auth-close" style={{
                        width: 34, height: 34, border: `1px solid ${LINE}`, background: "transparent",
                        color: INK, cursor: "pointer", fontSize: "1rem", lineHeight: 1,
                    }}>✕</button>
                </div>

                <div style={{ flex: 1, overflowY: "auto", padding: "34px 36px 40px" }}>
                    <h2 style={{ margin: "0 0 6px", fontSize: "1.5rem", fontWeight: 700, letterSpacing: "-.01em" }}>
                        {isSignUp ? "Create your account" : "Sign in to your account"}
                    </h2>
                    <p style={{ margin: "0 0 26px", fontSize: ".92rem", color: MUTED }}>
                        {isSignUp
                            ? "One account for classes, the portals and the shop."
                            : "Enter your details to continue."}
                    </p>

                    {/* federated options */}
                    <div style={{ display: "flex", gap: 10, marginBottom: 22 }}>
                        <button type="button" className="clay-auth-social" style={socialBtn} aria-label="Continue with Google">
                            <svg width="19" height="19" viewBox="0 0 48 48">
                                <path fill="#4285F4" d="M45.1 24.5c0-1.6-.1-2.8-.4-4H24v7.3h12.1c-.2 2-1.6 5-4.5 7l6.9 5.4c4.1-3.8 6.6-9.4 6.6-15.7z" />
                                <path fill="#34A853" d="M24 46c5.9 0 10.9-2 14.5-5.3l-6.9-5.4c-1.9 1.3-4.4 2.2-7.6 2.2-5.8 0-10.7-3.8-12.5-9.800000000000001l-7.1 5.5C8.1 40.8 15.5 46 24 46z" />
                                <path fill="#FBBC05" d="M11.5 27.7c-.5-1.4-.7-2.9-.7-4.4s.3-3 .7-4.4l-7.1-5.5C2.9 16.3 2 20 2 23.9s.9 7.6 2.4 10.9l7.1-5.5z" />
                                <path fill="#EA4335" d="M24 9.9c4.1 0 6.9 1.8 8.5 3.3l6.2-6C34.9 3.7 29.9 1.8 24 1.8 15.5 1.8 8.1 7 4.4 13.4l7.1 5.5C13.3 13.7 18.2 9.9 24 9.9z" />
                            </svg>
                        </button>
                        <button type="button" className="clay-auth-social" style={socialBtn} aria-label="Continue with Apple">
                            <svg width="19" height="19" viewBox="0 0 24 24" fill={INK}>
                                <path d="M16.4 12.7c0-2.4 2-3.6 2.1-3.6-1.1-1.7-2.9-1.9-3.5-1.9-1.5-.2-2.9.9-3.6.9s-1.9-.9-3.1-.8c-1.6 0-3.1.9-3.9 2.4-1.7 2.9-.4 7.2 1.2 9.6.8 1.2 1.7 2.5 3 2.4 1.2 0 1.6-.8 3.1-.8s1.9.8 3.1.7c1.3 0 2.1-1.2 2.9-2.3.9-1.3 1.3-2.6 1.3-2.7-.1 0-2.6-1-2.6-3.9zM14 5.6c.6-.8 1.1-1.9 1-3-.9 0-2.1.6-2.8 1.5-.6.7-1.2 1.8-1 2.9 1 .1 2.1-.5 2.8-1.4z" />
                            </svg>
                        </button>
                        <button type="button" className="clay-auth-social" style={socialBtn} aria-label="Continue with Facebook">
                            <svg width="19" height="19" viewBox="0 0 24 24" fill="#1877F2">
                                <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7A10 10 0 0 0 22 12z" />
                            </svg>
                        </button>
                    </div>

                    <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 22 }}>
                        <span style={{ flex: 1, height: 1, background: LINE }} />
                        <span style={{ fontSize: ".76rem", color: MUTED, letterSpacing: ".1em" }}>OR</span>
                        <span style={{ flex: 1, height: 1, background: LINE }} />
                    </div>

                    <form onSubmit={(e) => e.preventDefault()}>
                        {isSignUp && (
                            <div style={{ marginBottom: 18 }}>
                                <label style={labelStyle} htmlFor="cs-name">
                                    Full name <span style={{ color: "#EE552B" }}>*</span>
                                </label>
                                <div style={inputWrap}>
                                    <UserIcon />
                                    <input id="cs-name" style={inputStyle} type="text" autoComplete="name" placeholder="Jane Potter" required />
                                </div>
                            </div>
                        )}

                        <div style={{ marginBottom: 18 }}>
                            <label style={labelStyle} htmlFor="cs-email">
                                Email address <span style={{ color: "#EE552B" }}>*</span>
                            </label>
                            <div style={inputWrap}>
                                <MailIcon />
                                <input id="cs-email" style={inputStyle} type="email" autoComplete="email" placeholder="you@example.com" required />
                            </div>
                        </div>

                        <div style={{ marginBottom: 18 }}>
                            <label style={labelStyle} htmlFor="cs-password">
                                Password <span style={{ color: "#EE552B" }}>*</span>
                            </label>
                            <div style={inputWrap}>
                                <LockIcon />
                                <input
                                    id="cs-password"
                                    style={inputStyle}
                                    type={showPassword ? "text" : "password"}
                                    autoComplete={isSignUp ? "new-password" : "current-password"}
                                    placeholder="••••••••"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword((p) => !p)}
                                    aria-label={showPassword ? "Hide password" : "Show password"}
                                    style={{ background: "none", border: 0, cursor: "pointer", padding: 0, lineHeight: 0 }}
                                >
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={MUTED} strokeWidth="1.8">
                                        <path d="M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12Z" />
                                        <circle cx="12" cy="12" r="2.8" />
                                        {!showPassword && <path d="m4 20 16-16" />}
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", margin: "22px 0 24px" }}>
                            <label style={{ display: "flex", alignItems: "center", gap: 9, fontSize: ".88rem", color: INK, cursor: "pointer" }}>
                                <input type="checkbox" className="clay-auth-check" />
                                {isSignUp ? "Email me studio news" : "Keep me signed in"}
                            </label>
                            {!isSignUp && (
                                <Link href="/contact" onClick={onClose} className="clay-auth-link" style={{ fontSize: ".88rem", color: INK, textDecoration: "underline", textUnderlineOffset: 3 }}>
                                    Forgot password?
                                </Link>
                            )}
                        </div>

                        <button type="submit" className="clay-auth-submit" style={{
                            width: "100%", height: 52, border: 0, cursor: "pointer",
                            background: INK, color: "#FAF1E0", fontFamily: "inherit",
                            fontSize: ".98rem", fontWeight: 700, letterSpacing: ".01em",
                        }}>
                            {isSignUp ? "Create account" : "Sign in"}
                        </button>
                    </form>

                    <p style={{ margin: "24px 0 0", fontSize: ".9rem", color: MUTED, textAlign: "center" }}>
                        {isSignUp ? "Already have an account? " : "Don't have an account? "}
                        <button
                            type="button"
                            onClick={() => setMode(isSignUp ? "signin" : "signup")}
                            className="clay-auth-switch"
                            style={{
                                background: "none", border: 0, padding: 0, cursor: "pointer",
                                fontFamily: "inherit", fontSize: ".9rem", fontWeight: 700, color: "#EE552B",
                                textDecoration: "underline", textUnderlineOffset: 3,
                            }}
                        >
                            {isSignUp ? "Sign in" : "Register"}
                        </button>
                    </p>
                </div>
            </aside>

            <style dangerouslySetInnerHTML={{
                __html:
                    ".clay-auth-panel{width:min(100vw,460px);box-sizing:border-box}" +
                    /* a global rule rounds inputs to 8px; this drawer is square throughout */
                    ".clay-auth-panel *,.clay-auth-panel input,.clay-auth-panel button{border-radius:0 !important}" +
                    ".clay-auth-panel input:focus{outline:none}" +
                    ".clay-auth-social:hover{border-color:" + INK + " !important;background:#fff !important}" +
                    ".clay-auth-close:hover{background:" + INK + " !important;color:#FAF1E0 !important}" +
                    ".clay-auth-submit:hover{background:#EE552B !important}" +
                    ".clay-auth-link:hover,.clay-auth-switch:hover{color:#EE552B !important}" +
                    ".clay-auth-check{width:16px;height:16px;accent-color:#EE552B}" +
                    "@media(max-width:600px){.clay-auth-panel{width:100% !important}}",
            }} />
        </>
    );
};

export default ClayAuthPanel;
