import React from 'react';

interface XYZProps {
    // Define your component props here if any
}

export const Xyz: React.FC<XYZProps> = () => {
    // Component logic goes here

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h3>
                COMPANY
            </h3> 
            <b>Position</b><br/>
            Vancouver, BC | September 2020 - Present
            <hr style={{ width: '90%', border: '1px solid white' }} />
            <p style={{ maxWidth: '400px', textAlign: 'center' }}>
                DESCRIPTION
            </p>
        </div>
    );
};