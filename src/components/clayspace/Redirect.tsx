"use client";
import { useEffect } from "react";
import Link from "next/link";

/**
 * A legacy-URL redirect for a statically exported site.
 *
 * There is no server here to issue a 301, so this has to work three ways:
 *
 *  1. `meta refresh` — honoured by browsers and by crawlers that do not execute
 *     JavaScript, which includes several AI crawlers. This is the one that
 *     matters for search and answer engines.
 *  2. `location.replace` — instant, and keeps the stub out of session history.
 *  3. A real visible link — the fallback if both are blocked, and something a
 *     crawler can follow. It also gives the page an <h1>, which it otherwise
 *     lacks entirely.
 *
 * Pages using this should also export `robots: { index: false, follow: true }`
 * and stay out of sitemap.ts. They are signposts, not content.
 */
export default function Redirect({ to, label }: { to: string; label?: string }) {
    useEffect(() => {
        window.location.replace(to);
    }, [to]);

    return (
        <>
            <meta httpEquiv="refresh" content={`0; url=${to}`} />
            <main
                style={{
                    minHeight: "42vh",
                    display: "grid",
                    placeContent: "center",
                    textAlign: "center",
                    padding: "80px 24px",
                    gap: 14,
                }}
            >
                <h1 style={{ fontSize: "1.5rem", margin: 0 }}>
                    {label ? `${label} has moved` : "This page has moved"}
                </h1>
                <p style={{ margin: 0 }}>
                    <Link href={to}>Continue to {to}</Link>
                </p>
            </main>
        </>
    );
}
