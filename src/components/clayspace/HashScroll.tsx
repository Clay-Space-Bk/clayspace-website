"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Global scroll-to-hash fix.
 *
 * Anchored menu items (e.g. /about#faq) were landing on the wrong section: the
 * browser scrolls to the target before the page settles, then images/fonts load
 * and the layout shifts — pushing lower sections down, so they land too high
 * (on an earlier section). Fixed delays can't catch every reflow.
 *
 * This keeps the hash target pinned to the top of the viewport as the page
 * reflows — via a ResizeObserver on <body> plus a few timed passes and the
 * window `load` event — until the layout settles (~3s) or the visitor scrolls.
 * `scroll-margin-top` on the target is respected, keeping it clear of any fixed
 * header. Works on every page (cross-page nav, direct load, and same-page hash).
 */
export default function HashScroll() {
	const pathname = usePathname();

	useEffect(() => {
		let userInteracted = false;

		const currentId = () => {
			const raw = window.location.hash;
			if (!raw || raw.length < 2) return "";
			try {
				return decodeURIComponent(raw.slice(1));
			} catch {
				return raw.slice(1);
			}
		};

		const scrollToTarget = () => {
			if (userInteracted) return;
			const id = currentId();
			if (!id) return;
			const el = document.getElementById(id);
			if (el) el.scrollIntoView({ behavior: "auto", block: "start" });
		};

		const onUser = () => {
			userInteracted = true;
		};

		// Re-pin the target whenever the page reflows (images/fonts loading, layout shift).
		const ro = new ResizeObserver(() => scrollToTarget());

		let timers: number[] = [];
		let settleTimer = 0;

		const run = () => {
			userInteracted = false;
			if (!currentId()) return;
			ro.observe(document.body);
			scrollToTarget();
			timers.forEach((t) => window.clearTimeout(t));
			timers = [50, 200, 500, 1000, 1800].map((ms) => window.setTimeout(scrollToTarget, ms));
			window.clearTimeout(settleTimer);
			settleTimer = window.setTimeout(() => ro.disconnect(), 3200);
		};

		const onHashChange = () => run();

		window.addEventListener("wheel", onUser, { passive: true });
		window.addEventListener("touchmove", onUser, { passive: true });
		window.addEventListener("keydown", onUser);
		window.addEventListener("load", scrollToTarget);
		window.addEventListener("hashchange", onHashChange);

		run();

		return () => {
			ro.disconnect();
			timers.forEach((t) => window.clearTimeout(t));
			window.clearTimeout(settleTimer);
			window.removeEventListener("wheel", onUser);
			window.removeEventListener("touchmove", onUser);
			window.removeEventListener("keydown", onUser);
			window.removeEventListener("load", scrollToTarget);
			window.removeEventListener("hashchange", onHashChange);
		};
	}, [pathname]);

	return null;
}
