import LoginMain from '@/components/pages/LoginMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Clay Space — Login",
};

const page = () => {
    return (
        <LoginMain />
    );
};

export default page;