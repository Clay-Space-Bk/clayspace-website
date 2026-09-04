import ContactMain from '@/components/clayspace/ContactMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Clay Space — Contact",
};

const page = () => {
    return <ContactMain />;
};

export default page;
