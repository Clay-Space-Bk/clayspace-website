"use client";
import ClayCutout, { CutoutShape } from "./ClayCutout";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

/* --------------------------------------------------------------------------
   The four ways into the studio, as cards that pin and stack as you scroll.

   Reuses the existing `showcase-portfolio-wrap` / `showcase-portfolio-panel`
   hooks so `portfolioShowcaseAnimation` drives the pin-and-scale, and dresses
   each panel in the brand cut-out.
   -------------------------------------------------------------------------- */

interface Card {
    title: string;
    /** Who it's for, in one line. */
    meta: string;
    /** The facts someone needs before they'd click Register. */
    points: string[];
    href: string;
    color: string;
    shape: CutoutShape;
    img: string;
    alt: string;
}

const CARDS: Card[] = [
    {
        title: "For Adults",
        meta: "Beginner to advanced · 12 students per class",
        points: [
            "Fall semester Sept 13 – Dec 12, 12 weeks",
            "$760 per semester, clay and glaze included",
            "Weekly bench time and open studio access",
        ],
        href: "/classes",
        color: "#805D1B",
        shape: "jug",
        img: "/assets/img/clayspace/products/product-05.jpg",
        alt: "An instructor guiding a student's hands at the wheel",
    },
    {
        title: "For Kids",
        meta: "Clay Play after school · grades K–5, ages 5–10",
        points: [
            "Fall semester Sept 14 – Dec 17",
            "$650 per semester · 9 students per class",
            "Summer camp sessions from $525",
        ],
        href: "/camps",
        color: "#404E41",
        shape: "mug",
        img: "/assets/img/clayspace/products/product-06.jpg",
        alt: "An adult and child rolling a clay slab with leaves",
    },
    {
        title: "Membership",
        meta: "24/7 studio access · 3-month minimum term",
        points: [
            "Communal $210/mo up to private studio $650/mo",
            "Needs a year of consistent lessons behind you",
            "Apply first, then tour before an offer",
        ],
        href: "/membership",
        color: "#614338",
        shape: "amphora",
        img: "/assets/img/clayspace/products/product-03.jpg",
        alt: "Studio shelves stacked with greenware and glazed pots",
    },
    {
        title: "Outside Firing",
        meta: "For makers who aren't members or students",
        points: [
            "8¢ per cubic inch, per firing",
            "3-week turnaround · rush at 2× the fee",
            "Clays and glazes need approval first",
        ],
        href: "/firing-inquiry",
        color: "#3E2B59",
        shape: "jug",
        img: "/assets/img/clayspace/products/product-12.jpg",
        alt: "The glaze kitchen at Clay Space",
    },
];

const ClayClassCards = () => {
    // The pin triggers are built ~100ms after mount, while the imagery above
    // these panels is still loading. Re-measure once the page settles so the
    // pin start/end don't drift. (The stacking itself is desktop-only — the
    // shared animation gates at min-width 767px.)
    useEffect(() => {
        const refresh = () => ScrollTrigger.refresh();
        const t = window.setTimeout(refresh, 800);
        window.addEventListener("load", refresh);
        return () => {
            window.clearTimeout(t);
            window.removeEventListener("load", refresh);
        };
    }, []);

    return (
        <div className="st-service-area clay-class-area pt-160 pb-60">
            <div className="container container-1320">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="st-service-heading mb-70">
                            <h2 className="tp-section-title-playfair mb-20 tp_fade_anim" data-delay=".3">
                                Classes &amp; Memberships
                            </h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container container-1750">
                <div className="showcase-portfolio-wrap pb-60">
                    {CARDS.map((card) => (
                        <div
                            key={card.title}
                            className="showcase-portfolio-panel clay-class-card p-relative mb-30"
                            style={{ ["--card-color" as string]: card.color }}
                        >
                            <ClayCutout
                                src={card.img}
                                alt={card.alt}
                                shape={card.shape}
                                color={card.color}
                                ratio={2.3}
                                align="right"
                                scale={0.92}
                            />

                            <div className="clay-class-card-content">
                                <h3 className="clay-class-card-title">
                                    <Link href={card.href}>{card.title}</Link>
                                </h3>
                                <p className="clay-class-card-meta">{card.meta}</p>
                                <ul className="clay-class-card-points">
                                    {card.points.map((pt) => (
                                        <li key={pt}>{pt}</li>
                                    ))}
                                </ul>
                                <Link className="clay-class-cta" href={card.href}>
                                    Register
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ClayClassCards;
