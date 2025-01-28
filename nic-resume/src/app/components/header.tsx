import React from 'react';

interface HeaderProps {
    // Define your component props here
}

const Header: React.FC<HeaderProps> = () => {
    // Component logic goes here

    return (
        // JSX markup for the component goes here
        <div>
            <h1>
                Nicholas Ung
            </h1>
            <h3>
                UBC B.Sc Computer Science
            </h3>
        </div>
        
    );
};

export default Header;