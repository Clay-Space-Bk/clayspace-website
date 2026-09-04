import RegisterMain from '@/components/pages/RegisterMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Clay Space — Register",
};

const page = () => {
    return (
        <RegisterMain />
    );
};

export default page;