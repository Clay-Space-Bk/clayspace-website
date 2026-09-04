import { ArrowFourteen } from '@/svg';
import Link from 'next/link';

const StartupAgencyHero = () => {
    return (
        <div className="st-hero-area st-hero-ptb tp-bounce-trigger p-relative">
            <div className="st-hero-border">
                <div className="tp-border-line-wrap">
                    <div className="tp-border-line"></div>
                    <div className="tp-border-line line-2"></div>
                    <div className="tp-border-line line-3"></div>
                    <div className="tp-border-line line-4"></div>
                </div>
            </div>

            {/* Primary action, parked under the floating logo in the top right. */}
            <div className="st-hero-btn clay-hero-cta tp-bounce">
                <Link href="/classes">
                    <span className="st-hero-btn-text">TAKE A CLASS </span>
                    <span className="st-hero-btn-svg">
                        <ArrowFourteen />
                    </span>
                </Link>
            </div>

            <div className="container container-1320">
                <div className="row justify-content-center">
                    <div className="col-xl-12">
                        <div className="st-hero-heading-box z-index-1">
                            <h1 className="clay-hero-line">
                                Clay Space is a <br />
                                Greenpoint ceramic center <br />
                                offering memberships, <br />
                                classes &amp; community events.
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StartupAgencyHero;
