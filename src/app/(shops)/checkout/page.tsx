import CheckoutMain from '@/components/clayspace/CheckoutPageMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Clay Space — Checkout",
};

const page = () => {
    return (
        <CheckoutMain />
    );
};

export default page;