"use client"
import StartupAgencyTestimonial from '@/components/testimonial/StartupAgencyTestimonial';
import CursorAndBackgroundProvider from '@/components/provider/CustomCursorProvider';
import StartupAgencyPortfolio from '@/components/portfolio/StartupAgencyPortfolio';
import StartupAgencyChoose from '@/components/choose-area/StartupAgencyChoose';
import ClayClassCards from '@/components/clayspace/ClayClassCards';
import ScrollSmoothProvider from '@/components/provider/ScrollSmoothProvider';
import AnimationWrapper from '@/components/shared/Animation/AnimationWrapper';
import StartupAgencyCounter from '@/components/counter/StartupAgencyCounter';
import StartupAgencyVideo from '@/components/video-area/StartupAgencyVideo';
import StartupAgencyHero from '@/components/hero-banner/StartupAgencyHero';
import StartupAgencyAward from '@/components/award/StartupAgencyAward';
import StartupAgencyBlog from '@/components/blog/StartupAgencyBlog';
import StartupAgencyCta from '@/components/cta/StartupAgencyCta';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import SearchArea from '@/components/search-area/SearchArea';

// Site chrome — the same header rail, cart and footer every other Clay Space page uses.
import CartOffcanvas from '@/components/offcanvas/CartOffcanvas';
import ShopModernHeader from '@/layouts/headers/ShopModernHeader';
import ShopModernFooter from '@/layouts/footers/ShopModernFooter';

const ClaySpaceHome = () => {
    return (
        <ScrollSmoothProvider>
            <CursorAndBackgroundProvider bgColor='var(--cs-cream)'>
                <AnimationWrapper>
                    <div className="cs-brand">
                    <div id="magic-cursor" className="cursor-bg-red-2">
                        <div id="ball"></div>
                    </div>

                    {/* Global Components */}
                    <BackToTop />
                    <SearchArea />
                    <CartOffcanvas />
                    <ShopModernHeader />

                    <div id="smooth-wrapper">
                        <div id="smooth-content">
                            {/* Main Content Sections */}
                            <main>
                                <StartupAgencyHero />
                                <StartupAgencyVideo />
                                <ClayClassCards />
                                <StartupAgencyPortfolio />
                                <StartupAgencyTestimonial />
                                <StartupAgencyAward />
                                <StartupAgencyChoose />
                                <StartupAgencyCounter />
                                <StartupAgencyBlog />
                                <StartupAgencyCta />
                            </main>
                            <ShopModernFooter />
                        </div>
                    </div>
                    </div>
                </AnimationWrapper>
            </CursorAndBackgroundProvider>
        </ScrollSmoothProvider>
    );
};

export default ClaySpaceHome;
