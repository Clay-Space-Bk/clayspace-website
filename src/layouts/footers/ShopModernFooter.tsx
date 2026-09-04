import ClayMailingList from '@/components/clayspace/ClayMailingList';
import ShopModernCopyright from './subComponents/ShopModernCopyright';
import Link from 'next/link';

const ShopModernFooter = () => {
    return (
        <footer>
            {/* -- footer area start -- */}
            <div className="tp-footer-area tp-footer-shop-style pt-60 pb-30" style={{ backgroundColor: "#4D3D30" }}>
                <div className="container-fluid p-0">
                    <div className="tp-footer-shop-top">
                        <div className="row gx-0">
                            <div className="col-lg-3 col-6">
                                <div className="tp-footer-shop-widget tp-footer-shop-col-1">
                                    <h4 className="tp-footer-shop-widget-title">STUDIO</h4>
                                    <ul>
                                        <li><Link className="tp-line-white" href="/">Home</Link></li>
                                        <li><Link className="tp-line-white" href="/about">About</Link></li>
                                        <li><Link className="tp-line-white" href="/membership">Membership</Link></li>
                                        <li><Link className="tp-line-white" href="/journal">Journal</Link></li>
                                        <li><Link className="tp-line-white" href="/contact">Contact</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-6">
                                <div className="tp-footer-shop-widget tp-footer-shop-col-1">
                                    <h4 className="tp-footer-shop-widget-title">LEARN</h4>
                                    <ul>
                                        <li><Link className="tp-line-white" href="/classes">Classes</Link></li>
                                        <li><Link className="tp-line-white" href="/workshops">Workshops</Link></li>
                                        <li><Link className="tp-line-white" href="/camps">Classes for Kids</Link></li>
                                        <li><Link className="tp-line-white" href="/clay-camp">Clay Camp</Link></li>
                                        <li><Link className="tp-line-white" href="/events">Events</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-6">
                                <div className="tp-footer-shop-widget tp-footer-shop-col-1">
                                    <h4 className="tp-footer-shop-widget-title">SHOP</h4>
                                    <ul>
                                        <li><Link className="tp-line-white" href="/ceramics">Ceramics</Link></li>
                                        <li><Link className="tp-line-white" href="/cafe">Café</Link></li>
                                        <li><Link className="tp-line-white" href="/gift-cards">Gift Cards</Link></li>
                                        <li><Link className="tp-line-white" href="/shop">Tools & Clay</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-6">
                                <div className="tp-footer-shop-widget tp-footer-shop-col-1">
                                    <h4 className="tp-footer-shop-widget-title">HELP</h4>
                                    <ul>
                                        <li><Link className="tp-line-white" href="/faq">FAQ</Link></li>
                                        <li><Link className="tp-line-white" href="/careers">Careers</Link></li>
                                        <li><Link className="tp-line-white" href="/firing-inquiry">Outside Firing</Link></li>
                                        <li><Link className="tp-line-white" href="/commissions">Commissions</Link></li>
                                        <li><Link className="tp-line-white" href="/centered-in-equity">Centered in Equity</Link></li>
                                        <li><Link className="tp-line-white" href="#">Member Portal</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ClayMailingList />

                    <div className="tp-footer-shop-big-text">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="tp-hero-shop-title tp-char-animation" style={{ fontWeight: 300 }}>clay space</div>
                            </div>
                        </div>
                    </div>
                    {/*Footer copyright */}
                    <ShopModernCopyright />
                </div>
            </div>
            {/* -- footer area end -- */}

        </footer>
    );
};

export default ShopModernFooter;