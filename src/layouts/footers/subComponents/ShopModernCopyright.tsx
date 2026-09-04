import { getCurrentYear } from '@/utils/getCurrentYear';
import { InstagramTwo } from '@/svg';
import Link from 'next/link';

/* Deliberately not using the shared `.space` class here — it carries
   word-spacing: 8px, which is meant for a single short copyright line and
   falls apart across an address. */

const ShopModernCopyright = () => {
    return (
        <div className="tp-footer-shop-copyright cs-footer-meta pt-20 pb-10">
            <div className="row gy-3 align-items-end">
                <div className="col-lg-6">
                    <p>
                        <Link
                            href="https://maps.google.com/?q=275+Calyer+Street,+Brooklyn,+NY+11222"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            275 Calyer Street, Greenpoint, Brooklyn, NY 11222
                        </Link>
                        <br />
                        <span className="cs-footer-meta-dim">
                            Mon&ndash;Sat 10am&ndash;9:30pm &middot; Sun 10am&ndash;9pm &middot; Members 24/7
                        </span>
                    </p>
                </div>

                <div className="col-lg-6">
                    <p className="cs-footer-meta-end">
                        <Link href="mailto:info@clayspacebk.com">info@clayspacebk.com</Link>
                        <span className="cs-footer-meta-sep" aria-hidden>&middot;</span>
                        <Link
                            href="https://www.instagram.com/clayspace_bk/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Clay Space on Instagram"
                            className="cs-footer-meta-ig"
                        >
                            <InstagramTwo />
                            <span>@clayspace_bk</span>
                        </Link>
                        <br />
                        <span className="cs-footer-meta-dim">
                            &copy; Clay Space Ceramic Center {getCurrentYear()}
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ShopModernCopyright;
