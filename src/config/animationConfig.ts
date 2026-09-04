import {
    animationParagraph,
    buttonBounceAnimation,
    contactBgAnimation,
    ctaAnimation,
    portfolioShowcaseAnimation,
    portfolioTitleAnimation,
    productBannerAnimation,
    textRevealAnimation,
} from "@/hooks/useGsapAnimation";

/**
 * Route -> GSAP animations, looked up by `AnimationWrapper` as
 * `animationConfig[pathname]`.
 *
 * Only routes that exist can ever match. This map used to carry 41 keys, 38 of
 * which named demo routes (`/fashion-studio`, `/cryptocurrency`, `/portfolio-*`)
 * that the site does not serve — every one of them a dead lookup that kept its
 * animation functions alive in the bundle. Add a key only alongside a real route.
 */
export const animationConfig: Record<string, (() => void)[]> = {
    "/": [
        animationParagraph,
        textRevealAnimation,
        portfolioTitleAnimation,
        ctaAnimation,
        buttonBounceAnimation,
        portfolioShowcaseAnimation,
    ],
    "/shop": [productBannerAnimation],
    "/contact": [contactBgAnimation],
};
