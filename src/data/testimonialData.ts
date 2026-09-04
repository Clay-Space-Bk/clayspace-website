import { TestimonialDT } from "@/types/testimonial-d-t";

/**
 * Clay Space member testimonials.
 *
 * Trimmed from 59 entries to 4. The other 55 were demo content — invented
 * reviewer names, lorem quotes and a third-party logo — which shipped in the
 * bundle without ever rendering.
 *
 * Consumed only by StatupAgencyItem, which selects by **id**. It used to take
 * `slice(40, 44)`, so deleting any earlier entry silently changed which
 * testimonials the home page displayed. Keep the selection id-based.
 */
const testimonialsData: TestimonialDT[] = [
    {
        id: 41,
        name: 'Maya R.',
        position: 'Communal Member',
        quote: 'I came in through a Foundation class and never left. Having <i>24/7 access to a bench and a kiln</i> changed my practice completely — I make more now in a month than I used to in a year.',
        rating: 5
    },
    {
        id: 42,
        name: 'Daniel O.',
        position: 'Work-Studio Member',
        quote: 'The glaze room alone is worth it. <i>Thirty-plus housemade glazes, a test tile wall,</i> and a glaze kitchen where you can mix your own once you learn the ropes. Nowhere else in Brooklyn.',
        rating: 5
    },
    {
        id: 43,
        name: 'Priya S.',
        position: 'Wheel Throwing Student',
        quote: 'Twelve wheels, a picture window, and sunlight all day. My instructor met me exactly where I was — <i>no experience, no pressure,</i> just a lot of very patient centering.',
        rating: 5
    },
    {
        id: 44,
        name: 'Tomas L.',
        position: 'Clay Play Parent',
        quote: 'My daughter goes Wednesdays after school and comes home covered in slip and glowing. <i>Process over product</i> is not just a slogan here — you can see it in what she brings home.',
        rating: 5
    }
];

export default testimonialsData;
