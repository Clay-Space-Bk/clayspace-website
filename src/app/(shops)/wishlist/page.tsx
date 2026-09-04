import WishlistMain from '@/components/pages/WishlistMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Clay Space — Wishlist",
};

const page = () => {
    return (
        <WishlistMain />
    );
};

export default page;