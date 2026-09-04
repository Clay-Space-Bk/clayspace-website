import ProductPagination from '@/components/product/subComponents/ProductPagination';
import CursorAndBackgroundProvider from '@/components/provider/CustomCursorProvider';
import ShopModernSubscribePopup from '@/components/Popup/ShopModernSubscribePopup';
import AnimationWrapper from '@/components/shared/Animation/AnimationWrapper';
import ScrollSmoothProvider from '@/components/provider/ScrollSmoothProvider';
import ShopProductArea from '@/components/product/ShopProductArea';
import ShopModernFooter from '@/layouts/footers/ShopModernFooter';
import ShopModernHeader from '@/layouts/headers/ShopModernHeader';
import CartOffcanvas from '@/components/offcanvas/CartOffcanvas';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import SearchArea from '@/components/search-area/SearchArea';

const ShopMain = () => {
    return (
        <ScrollSmoothProvider>
            <CursorAndBackgroundProvider bgColor='#F4F0EA'>
                <AnimationWrapper>
                    <div id="magic-cursor" className="cursor-bg-red">
                        <div id="ball"></div>
                    </div>

                    {/* Global Components */}
                    <BackToTop />
                    <CartOffcanvas />
                    <SearchArea />
                    <ShopModernSubscribePopup />
                    <ShopModernHeader />

                    <div id="smooth-wrapper">
                        <div id="smooth-content">
                            {/* Main Content Sections */}
                            <main>
                                {/* The page had no <h1>. Search and answer engines use the
                                    top-level heading to work out what a page is about, and
                                    this one is listed in the sitemap. */}
                                <div style={{ padding: "48px clamp(24px, 8vw, 90px) 0" }}>
                                    <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)", margin: "0 0 12px" }}>
                                        Shop
                                    </h1>
                                    <p style={{ margin: 0, maxWidth: "58ch" }}>
                                        Clay, tools and finished ceramics from the Clay Space studio
                                        in Greenpoint, Brooklyn.
                                    </p>
                                </div>
                                <ShopProductArea />
                                <ProductPagination />
                            </main>
                            <ShopModernFooter />
                        </div>
                    </div>
                </AnimationWrapper>
            </CursorAndBackgroundProvider>
        </ScrollSmoothProvider>
    );
};

export default ShopMain;