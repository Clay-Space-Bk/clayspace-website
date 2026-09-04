import testimonialShape from '../../../public/assets/img/clayspace/testimonial/testimonial-shape.png';
import testimonialBg from '../../../public/assets/img/clayspace/testimonial/testimonial-bg.png';
import StatupTestimonialSlideItem from './subComponents/StatupAgencyItem';
import StartupRatingBox from './subComponents/StartupRatingBox';
import Image from 'next/image';
import Link from 'next/link';

const RATING_BOX = {
    score: '4.9',
    reviewCount: '( 300+ MEMBERS & STUDENTS )',
    description: 'A non-competitive studio where one maker\u2019s success is another\u2019s inspiration.'
};

const StartupAgencyTestimonial = () => {
    return (
        <div className="st-testimonial-area p-relative st-testimonial-ptb tp-bounce-trigger pt-160 pb-180">

            {/* testimonial background  */}
            <div className="st-testimonial-shape">
                <div className="st-testimonial-shape-1">
                    <Image src={testimonialBg} alt="Testimonial background" />
                </div>
                <div className="st-testimonial-shape-2 tp-bounce">
                    <Image src={testimonialShape} alt="Testimonial decorative shape" />
                </div>
            </div>

            <div className="container container-1320">
                {/* testimonial header */}
                <div className="row">
                    <div className="col-lg-12">
                        <div className="st-testimonial-heading mb-70">
                            <span className="tp-section-subtitle st tp_fade_anim" data-delay=".3">
                                {` // OUR COMMUNITY`}
                            </span>
                            <h3 className="tp-section-title-playfair mb-20 tp_fade_anim" data-delay=".5">
                                WHAT MAKERS <br />
                                SAY <span>ABOUT US</span>
                            </h3>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-4">
                        <StartupRatingBox {...RATING_BOX} />
                    </div>

                    <div className="col-lg-8">
                        <StatupTestimonialSlideItem />
                    </div>
                </div>
                {/* testimonial footer */}
                <div className="row">
                    <div className="col-lg-12">
                        <div className="st-testimonial-bottom text-center tp_fade_anim" data-delay=".3">
                            <span>
                                Ready to get your hands dirty?{' '}
                                <Link href="/trynight">Book a TryNight</Link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};




export default StartupAgencyTestimonial;