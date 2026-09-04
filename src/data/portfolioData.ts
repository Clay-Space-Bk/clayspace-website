import { StaticImageData } from 'next/image';
import portfolio5 from '../../public/assets/img/clayspace/products/product-01.jpg';
import portfolio6 from '../../public/assets/img/clayspace/products/product-04.jpg';
import portfolio7 from '../../public/assets/img/clayspace/products/product-09.jpg';
import portfolio8 from '../../public/assets/img/clayspace/products/product-07.jpg';
import portfolio9 from '../../public/assets/img/clayspace/products/product-10.jpg';
import portfolio10 from '../../public/assets/img/clayspace/products/product-08.jpg';

export interface PortfolioDT {
  id: number;
  image: StaticImageData;
  categories?: string[];
  year?: string;
  title: string;
  colClass?: string;
  itemClass?: string;
  category?: string;
  hasSpaceLeft?: boolean;
  link: string;
};

/**
 * The six studio images in the home page's staggered grid.
 *
 * Trimmed from 60 entries to 6. The other 54 were demo content — an agency
 * portfolio ("Electro Hub", "SliceMaster", "GreenGrip Cutter") — which shipped
 * in the bundle, and held ~50 demo images in `public/`, without ever rendering.
 *
 * Consumed only by StartupAgencyPortfolio, which selects by **id** in three
 * rows: [5,6], [7,8], [9,10]. `colClass` and `itemClass` position each tile,
 * so the ids and the classes have to stay paired.
 */
const portfolioData: PortfolioDT[] = [
  {
    id: 5,
    title: 'Wheel Throwing',
    image: portfolio5,
    colClass: 'col-xl-4 col-md-6',
    itemClass: 'st-portfolio-item-1',
    link: "/our-story",
  },
  {
    id: 6,
    title: 'Bisqueware',
    image: portfolio6,
    colClass: 'offset-xl-5 col-xl-3 col-md-6',
    itemClass: 'st-portfolio-item-2',
    link: "/our-story",
  },
  {
    id: 7,
    title: 'Made in Brooklyn',
    image: portfolio7,
    colClass: 'offset-xxl-4 col-xxl-2 col-xl-3 col-md-6',
    itemClass: 'st-portfolio-item-3',
    link: "/our-story",
  },
  {
    id: 8,
    title: 'Glaze & Surface',
    image: portfolio8,
    colClass: 'offset-xl-3 col-xl-3 col-md-6',
    itemClass: 'st-portfolio-item-5',
    link: "/our-story",
  },
  {
    id: 9,
    title: 'Member Work',
    image: portfolio9,
    colClass: 'col-xl-3 col-md-6',
    itemClass: 'st-portfolio-item-4',
    link: "/our-story",
  },
  {
    id: 10,
    title: 'Out of the Kiln',
    image: portfolio10,
    colClass: 'offset-xl-2 col-xl-7 col-md-6',
    itemClass: 'st-portfolio-item-6',
    link: "/our-story",
  },
];

export default portfolioData;
