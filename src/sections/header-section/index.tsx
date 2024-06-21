import Navigation from "./components/navigation";
import HamburgerMenu from "./components/hamburger";
import { useState, useEffect } from 'react';

function HeaderSection(): JSX.Element {
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

    useEffect(() => {
        const handResize = () => {
            setIsDesktop(window.innerWidth > 768);
        };

        window.addEventListener('resize', handResize);

        return () => {
            window.removeEventListener('resize', handResize);
        };
    }, []);

    return(
        <header className='flex justify-center py-5 px-10'>
            {isDesktop ? <Navigation /> : <HamburgerMenu />}
        </header>
    );
}

export default HeaderSection;