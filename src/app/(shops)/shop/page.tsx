import ShopMain from '@/components/pages/ShopMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Clay Space — Shop",
};

const page = () => {

    return (
        <ShopMain />
    );
};

export default page;