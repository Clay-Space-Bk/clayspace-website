import CursorAndBackgroundProvider from '@/components/provider/CustomCursorProvider';
import ScrollSmoothProvider from '@/components/provider/ScrollSmoothProvider';
import AnimationWrapper from '@/components/shared/Animation/AnimationWrapper';
import ShopModernFooter from '@/layouts/footers/ShopModernFooter';
import ShopModernHeader from '@/layouts/headers/ShopModernHeader';
import CartOffcanvas from '@/components/offcanvas/CartOffcanvas';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import SearchArea from '@/components/search-area/SearchArea';
import RegisterForm from '@/components/forms/RegisterForm';

const RegisterMain = () => {
    return (
        <ScrollSmoothProvider>
            <CursorAndBackgroundProvider bgColor='#E9E3D6'>
                <AnimationWrapper>
                    <div id="magic-cursor" className="cursor-bg-red">
                        <div id="ball"></div>
                    </div>

                    {/* Global Components */}
                    <BackToTop />
                    <CartOffcanvas />
                    <SearchArea />
                    <ShopModernHeader />

                    <div id="smooth-wrapper">
                        <div id="smooth-content">
                            {/* Main Content Sections */}
                            <main>
                                <section className="p-relative z-index-1" style={{ minHeight: "100vh", backgroundColor: "#E9E3D6", display: "flex", justifyContent: "flex-end", alignItems: "stretch" }}>
                                    <RegisterForm />
                                </section>
                            </main>
                            <ShopModernFooter />
                        </div>
                    </div>
                </AnimationWrapper>
            </CursorAndBackgroundProvider>
        </ScrollSmoothProvider>
    );
};

export default RegisterMain;