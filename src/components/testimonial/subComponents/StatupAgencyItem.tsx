import quoteImg from "../../../../public/assets/img/clayspace/testimonial/quote.png";
import { TestimonialDT } from "@/types/testimonial-d-t";
import testimonialsData from "@/data/testimonialData";
import { StarIconFour } from "@/svg";
import Image from "next/image";

// Import Swiper components and modules
import { Swiper, SwiperSlide } from "swiper/react";

const StatupTestimonialSlideItem = () => {
    // The four Clay Space member testimonials, chosen by id rather than by
    // position. This was `slice(40, 44)` — deleting any earlier entry in the
    // shared 62-item array silently swapped what the home page showed.
    const HOME_TESTIMONIAL_IDS = [41, 42, 43, 44];
    const displayedTestimonial: TestimonialDT[] = HOME_TESTIMONIAL_IDS
        .map((id) => testimonialsData.find((t) => t.id === id))
        .filter(Boolean) as TestimonialDT[];
    
    return (
        <div className="st-testimonial-wrapper">
            <div className="swiper">
                <Swiper
                    className="st-testimonial-active"
                    slidesPerView={1.7}
                    loop={true}
                    spaceBetween={30}
                    breakpoints={{
                        '1200': { slidesPerView: 1.7 },
                        '992': { slidesPerView: 1.7 },
                        '768': { slidesPerView: 2 },
                        '576': { slidesPerView: 1 },
                        '0': { slidesPerView: 1 },
                    }}
                >
                    {displayedTestimonial.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="st-testimonial-item">
                                <div className="st-testimonial-item-user">
                                    <span>{item.name}</span>
                                    <p>{item.position}</p>
                                </div>
                                <div className="st-testimonial-item-content">
                                    <div className="st-testimonial-item-quote">
                                        <Image src={quoteImg} alt="Quote icon" />
                                    </div>
                                    <p dangerouslySetInnerHTML={{ __html: item.quote.replace(/\n/g, '<br />') }} />
                                    <div className="testimonial-rating">
                                        {Array(item.rating).fill(null).map((_, index) => (
                                            <StarIconFour key={index} width="16" />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default StatupTestimonialSlideItem;


