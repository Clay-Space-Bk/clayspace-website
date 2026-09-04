import { blogDT } from "@/types/blog-d-t";
import blog20 from "../../public/assets/img/clayspace/products/product-09.jpg";
import blog21 from "../../public/assets/img/clayspace/products/product-10.jpg";
import blog22 from "../../public/assets/img/clayspace/products/product-01.jpg";

/**
 * Clay Space journal posts shown on the home page.
 *
 * Trimmed from 43 entries to 3. The other 40 were demo content — invented
 * author names and filler headlines — which shipped in the bundle, and pulled
 * ~20 demo images with them, without ever rendering.
 *
 * Consumed only by StartupBlogItem, which selects by **id**. It used to take
 * `slice(19, 22)`, so deleting any earlier entry silently changed which posts
 * the home page displayed. Keep the selection id-based.
 */
const blogData: blogDT[] = [
    {
        id: 20,
        title: "Greenpoint Open Studios: 30+ members open their benches",
        image: blog20,
        category: "Events",
        date: "May 30, 2026",
        link: "/journal"
    },
    {
        id: 21,
        title: "The Great Brooklyn Throw Down returns for a 4th year",
        image: blog21,
        category: "Community",
        date: "May 31, 2026",
        link: "/journal"
    },
    {
        id: 22,
        title: "Inside the glaze kitchen: mixing your own at Clay Space",
        image: blog22,
        category: "Studio",
        date: "Aug 29, 2026",
        link: "/journal"
    },
];

export default blogData;
