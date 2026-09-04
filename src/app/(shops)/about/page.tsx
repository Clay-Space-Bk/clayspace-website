import AboutMain from '@/components/clayspace/AboutMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Clay Space — About",
};

const page = () => {
    return <AboutMain />;
};

export default page;
