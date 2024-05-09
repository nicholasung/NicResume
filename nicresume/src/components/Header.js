import React, { useEffect } from 'react';
import './Header.css';

function Header() {
    // const smallWidth = 768;
    const [isNavVisible, setIsNavVisible] = React.useState(true);
    const [isSmallScreen, setIsSmallScreen] = React.useState(false);
    const toggleNav = () => {
        setIsNavVisible(!isNavVisible);
    }
    
    const handleMediaQueryChange = mediaQuery => {
        if (mediaQuery.matches) {
            setIsSmallScreen(true);
            setIsNavVisible(false);
        } else {
            setIsSmallScreen(false);
        }
    }

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 768px)");
        mediaQuery.addListener(handleMediaQueryChange);
        handleMediaQueryChange(mediaQuery);

        return () => {
            mediaQuery.removeListener(handleMediaQueryChange);
        };
    }, []);

    return (
        <header className="header">
            {(!isSmallScreen || isNavVisible) && (
                <nav className={"Nav"}>
                    <a href="/">Home</a>
                    <a href="/">Projects</a>
                    <a href="/">Experience</a>
                    <a href="/">Education</a>
                    <a href="/">Contact</a>
                </nav>
            )}
            <button onClick={toggleNav} className='Burger'>
                Toggle Nav
            </button>
        </header>
        
    );
}

export default Header;