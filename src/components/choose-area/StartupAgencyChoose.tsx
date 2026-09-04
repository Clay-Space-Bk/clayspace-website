import shape from '../../../public/assets/img/clayspace/testimonial/testimonial-shape.png';
import thumb from '../../../public/assets/img/clayspace/products/product-12.jpg';
import { ArrowThirteen } from '@/svg';
import Image from 'next/image';
import Link from 'next/link';

const StartupAgencyChoose = () => {
    return (
        <div className="st-choose-area p-relative tp-bounce-trigger st-choose-ptb st-choose-bg pb-160">
            <div className="container container-1320">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="st-choose-heading mb-70">
                            <span className="tp-section-subtitle st tp_fade_anim" data-delay=".3">{`// AMENITIES & PERKS`}</span>
                            <h3 className="tp-section-title-playfair mb-20 tp_fade_anim" data-delay=".5">A FULLY EQUIPPED <br />
                                <span>CERAMIC CENTER</span>
                            </h3>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="st-choose-btn text-start text-lg-end mt-25 mb-30">
                            <Link className="tp-btn-border-2 st" href="/amenities">
                                SEE AMENITIES{" "}
                                <span>
                                    <ArrowThirteen />
                                </span>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="st-choose-list mb-30">
                            <ul>
                                <li>+ 6 kilns, 1.4 to 16 cu ft</li>
                                <li>+ 30+ housemade glazes</li>
                                <li>+ Glaze kitchen &amp; spray booth</li>
                                <li>+ Clay &amp; tool shop on site</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="st-choose-text-wrap mb-30">
                            <p>Clay Space provides members and students with a fully <br />
                                equipped ceramic center filled with natural light and <br />
                                amazing people — 100% sunlight, no basement vibes. <br />
                                A 12-wheel throwing classroom, a handbuilding room, a <br />
                                Northstar extruder and slab roller, and a dedicated 24/7 <br />
                                members work area behind a private entrance.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-4">
                        <div className="st-choose-shape tp-bounce">
                            <Image src={shape} alt="" />
                        </div>
                    </div>
                    <div className="col-xl-8">
                        <div className="st-choose-thumb mt-40 text-start text-lg-end">
                            <Image style={{ width: "100%", height: "auto" }} data-speed=".8" src={thumb} alt="The glaze kitchen at Clay Space" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StartupAgencyChoose;