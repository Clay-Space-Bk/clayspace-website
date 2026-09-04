"use client";
import useGlobalContext from "@/hooks/useContext";
import Link from "next/link";
import { useEffect, useState } from "react";

const ic = (name: string) => `/assets/img/ceramic-icons/${name}.svg`;

type Sub = { label: string; href: string };
type NavItem = { label: string; href?: string; icon: string; children?: Sub[] };

// Five top-level items; everything else nests underneath.
const nav: NavItem[] = [
    {
        label: "Membership", icon: ic("membership"), children: [
            { label: "Levels & Pricing", href: "/membership" },
            { label: "Apply for Membership", href: "/membership/apply" },
            { label: "Amenities & Perks", href: "/about#amenities" },
            { label: "Member Portal", href: "/member-portal" },
        ],
    },
    {
        label: "Classes", icon: ic("classes"), children: [
            { label: "Semester Classes", href: "/classes" },
            { label: "TryNight & ClayDate", href: "/classes" },
            { label: "Workshops", href: "/workshops" },
            { label: "For Kids \u2014 All Classes", href: "/camps" },
            { label: "Clay Play After School", href: "/after-school-program" },
            { label: "Clay Camp", href: "/clay-camp" },
            { label: "TryDays & Kids Workshops", href: "/trydays" },
            { label: "Clay Date", href: "/clay-date" },
            { label: "Kids Private Lessons & Parties", href: "/private-lessons-events-kids" },
            { label: "Student Portal", href: "/student-portal" },
        ],
    },
    {
        label: "Shop", icon: ic("ceramics"), children: [
            { label: "Shop All", href: "/shop" },
            { label: "Ceramics", href: "/ceramics" },
            { label: "Gift Cards", href: "/gift-cards" },
            { label: "Outside Firing", href: "/firing-inquiry" },
            { label: "Commissions", href: "/commissions" },
        ],
    },
    {
        label: "Events", icon: ic("cafe"), children: [
            { label: "Upcoming Events", href: "/events" },
            { label: "Journal", href: "/journal" },
        ],
    },
    {
        label: "About", icon: ic("about"), children: [
            { label: "Our Story", href: "/about#story" },
            { label: "Meet the Team", href: "/about#team" },
            { label: "Services & Firing", href: "/about#services" },
            { label: "Centered in Equity", href: "/centered-in-equity" },
            { label: "FAQ", href: "/about#faq" },
            { label: "Careers", href: "/careers" },
            { label: "Contact us", href: "/contact" },
        ],
    },
];

// shared row styling so every item looks uniform
const row: React.CSSProperties = {
    display: "flex", alignItems: "center", gap: 14, width: "100%", textAlign: "left",
    background: "none", border: 0, cursor: "pointer", textDecoration: "none", color: "#FFFFFF",
    fontWeight: 400, fontSize: "clamp(1.26rem, 3.24vw, 1.68rem)", lineHeight: 1.15,
    letterSpacing: "-.02em", padding: "5px 0", fontFamily: "inherit",
};
const subRow: React.CSSProperties = {
    display: "block", width: "100%", textDecoration: "none", color: "rgba(255,255,255,.82)",
    fontWeight: 400, fontSize: "1.22rem", letterSpacing: "-.01em", padding: "5px 0 5px 44px",
};
// icons are dark line-art SVGs — invert to white so they read on the taupe rail
const iconStyle: React.CSSProperties = { width: 30, height: 30, flex: "none", filter: "brightness(0) invert(1)" };

interface Props {
    open: boolean;
    onClose: () => void;
    onAuth: () => void;
}

const ClayNavRail: React.FC<Props> = ({ open, onClose, onAuth }) => {
    const { toggleSearch, toggleCartOffcanvas, cartCount } = useGlobalContext();
    const [expanded, setExpanded] = useState<string | null>(null);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
        document.addEventListener("keydown", onKey);
        document.body.style.overflow = open ? "hidden" : "";
        return () => {
            document.removeEventListener("keydown", onKey);
            document.body.style.overflow = "";
        };
    }, [open, onClose]);

    return (
        <>
            {/* backdrop */}
            <div
                onClick={onClose}
                style={{
                    position: "fixed", inset: 0, background: "rgba(26,20,17,.45)", zIndex: 998,
                    opacity: open ? 1 : 0, visibility: open ? "visible" : "hidden",
                    transition: "opacity .3s ease, visibility .3s ease",
                }}
            />

            {/* right rail — taupe to match the home background. Full-width on mobile, 460px on desktop. */}
            <nav
                className="clay-nav-rail"
                aria-hidden={!open}
                style={{
                    position: "fixed", top: 0, right: open ? 0 : "-100vw", height: "100%",
                    background: "#6B5D54", zIndex: 999, boxShadow: "-16px 0 50px rgba(26,20,17,.28)",
                    transition: "right .42s cubic-bezier(.2,.7,.2,1)",
                    display: "flex", flexDirection: "column", padding: "74px 40px 22px",
                }}
            >
                {/* top-aligned stack (scrolls if tall): Login, Search, then the nav tree */}
                <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 2, flex: 1, minHeight: 0, overflowY: "auto" }}>
                    <li>
                        <button onClick={() => { onClose(); onAuth(); }} className="clay-rail-link" style={row}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={ic("login")} alt="" width={30} height={30} style={iconStyle} />
                            <span>Sign Up / Sign In</span>
                        </button>
                    </li>
                    <li>
                        <button onClick={() => { toggleSearch(); onClose(); }} className="clay-rail-link" style={row}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={ic("search")} alt="" width={30} height={30} style={iconStyle} />
                            <span>Search</span>
                        </button>
                    </li>
                    <li>
                        <Link href="/" onClick={onClose} className="clay-rail-link" style={row}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={ic("home")} alt="" width={30} height={30} style={iconStyle} />
                            <span>Home</span>
                        </Link>
                    </li>

                    <li aria-hidden style={{ height: 10 }} />

                    {nav.map((item) => (
                        <li key={item.label}>
                            {item.children ? (
                                <>
                                    <button
                                        onClick={() => setExpanded(expanded === item.label ? null : item.label)}
                                        aria-expanded={expanded === item.label}
                                        className="clay-rail-link"
                                        style={row}
                                    >
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img src={item.icon} alt="" width={30} height={30} style={iconStyle} />
                                        <span style={{ marginRight: "auto" }}>{item.label}</span>
                                        <span style={{ display: "inline-block", transition: "transform .25s ease", transform: expanded === item.label ? "rotate(90deg)" : "rotate(0deg)", fontSize: "1.3rem", color: "rgba(255,255,255,.6)", lineHeight: 1 }}>›</span>
                                    </button>
                                    <ul style={{ listStyle: "none", margin: 0, padding: 0, overflow: "hidden", maxHeight: expanded === item.label ? 420 : 0, transition: "max-height .32s ease" }}>
                                        {item.children.map((c) => (
                                            <li key={c.label}>
                                                <Link href={c.href} onClick={onClose} className="clay-rail-sub" style={subRow}>{c.label}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </>
                            ) : (
                                <Link href={item.href!} onClick={onClose} className="clay-rail-link" style={row}>
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src={item.icon} alt="" width={30} height={30} style={iconStyle} />
                                    <span>{item.label}</span>
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>

                {/* Shopping Cart — pinned at the bottom in a lighter strip so it stands apart */}
                <button onClick={() => { toggleCartOffcanvas(); onClose(); }} className="clay-rail-link clay-rail-cart" style={{ ...row, background: "#82736A", borderTop: "1px solid rgba(255,255,255,.14)", width: "calc(100% + 80px)", margin: "14px -40px -22px", padding: "18px 40px 22px", boxSizing: "border-box" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={ic("cart")} alt="" width={30} height={30} style={iconStyle} />
                    <span>Shopping Cart</span>
                    <span style={{ marginLeft: "auto", background: "var(--cs-orange)", color: "#fff", minWidth: 30, height: 30, display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "1rem", fontWeight: 800, padding: "0 9px" }}>{cartCount}</span>
                </button>
            </nav>

            <style dangerouslySetInnerHTML={{ __html: ".clay-rail-link:hover{color:#F98A5B !important}.clay-rail-sub:hover{color:#F98A5B !important}.clay-nav-rail{width:min(100vw,460px);box-sizing:border-box}.clay-rail-cart{margin:14px -40px -22px;width:calc(100% + 80px);padding:18px 40px 22px;box-sizing:border-box}@media(max-width:600px){.clay-nav-rail{width:100% !important;padding-left:28px !important;padding-right:28px !important}.clay-rail-cart{margin:14px -28px -22px !important;width:calc(100% + 56px) !important;padding:18px 28px 22px !important}}" }} />
        </>
    );
};

export default ClayNavRail;
