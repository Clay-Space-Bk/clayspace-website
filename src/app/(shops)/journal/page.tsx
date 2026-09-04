import JournalMain from '@/components/clayspace/JournalMain';
import { Metadata } from 'next';

export const metadata: Metadata = { title: "Clay Space — Journal" };

export default function page() { return <JournalMain />; }
