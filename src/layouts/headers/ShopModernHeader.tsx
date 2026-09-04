"use client"
import clayspaceLogo from '../../../public/assets/img/logo/clayspace-logo.webp';
import ClayAuthPanel from '@/components/clayspace/ClayAuthPanel';
import ClayNavRail from '@/components/clayspace/ClayNavRail';
import { useState } from 'react';
import Image from 'next/image';

interface ShopModernHeaderProps {
    variantClass?: string;
    useWhiteLogo?: boolean;
}

const ShopModernHeader: React.FC<ShopModernHeaderProps> = () => {
    const [navOpen, setNavOpen] = useState(false);
    const [authOpen, setAuthOpen] = useState(false);

    return (
        <>
            {/* floating logo — toggles the menu, and stays layered on top so it's visible over the rail. */}
            <button
                onClick={() => setNavOpen((o) => !o)}
                aria-label="Toggle menu"
                style={{
                    position: 'fixed', top: 18, right: 24, zIndex: 1001,
                    background: 'none', border: 0, cursor: 'pointer', padding: 0, lineHeight: 0,
                    filter: 'drop-shadow(0 4px 14px rgba(0,0,0,.22))',
                }}
            >
                <Image width={84} src={clayspaceLogo} alt="Clay Space — open menu" priority />
            </button>

            <ClayNavRail
                open={navOpen}
                onClose={() => setNavOpen(false)}
                onAuth={() => setAuthOpen(true)}
            />
            <ClayAuthPanel open={authOpen} onClose={() => setAuthOpen(false)} />
        </>
    );
};

export default ShopModernHeader;
