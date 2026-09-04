import { awardDT } from "@/types/award-d-t";

//clay space workshop thumbs
import csWorkshop1 from "../../public/assets/img/clayspace/products/product-04.jpg";
import csWorkshop2 from "../../public/assets/img/clayspace/products/product-07.jpg";
import csWorkshop3 from "../../public/assets/img/clayspace/products/product-12.jpg";
import csWorkshop4 from "../../public/assets/img/clayspace/products/product-06.jpg";
import csWorkshop5 from "../../public/assets/img/clayspace/products/product-02.jpg";

/**
 * Upcoming workshops and semesters, shown on the home page.
 *
 * Two other exports lived here — `homeAwardsData` and `portfolioAwardsData` —
 * carrying invented design awards ("AWWWARDS Honors", "Site of the Day")
 * attributed to Clay Space. Nothing imported them, but a fabricated credential
 * has no business in the source at all. Both are gone.
 */
export const startupAwardsData: awardDT[] = [
    // clay space workshops & events data start
    {
        id: 1,
        title: "Make Your Own Mold! with Catalina Parra",
        date: "Jun 20\u201321, 2026",
        image: csWorkshop1
    },
    {
        id: 2,
        title: "On the Surface: Decorative Techniques with Nina Berinstein",
        date: "Jul 10\u201331, 2026",
        image: csWorkshop2
    },
    {
        id: 3,
        title: "Nerikomi & Neriage with a/d gayle",
        date: "Jul 18\u201319, 2026",
        image: csWorkshop5
    },
    {
        id: 4,
        title: "Glaze Chemistry & Application with Michael Gundlach",
        date: "Aug 29\u201330 + Sep 2",
        image: csWorkshop3
    },
    {
        id: 5,
        title: "Fall Semester \u2014 12 weeks, adults & kids",
        date: "Sep 13 \u2014 Dec 12",
        image: csWorkshop4
    }
    // clay space workshops & events data end
]
