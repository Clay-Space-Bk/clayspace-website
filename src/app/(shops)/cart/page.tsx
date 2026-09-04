
import CartMain from '@/components/clayspace/CartPageMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Clay Space — Cart",
};

const page = () => {

    return (
        <CartMain />
    );
};

export default page;