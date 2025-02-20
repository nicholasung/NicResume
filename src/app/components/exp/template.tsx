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
            <b>Position</b>
            <p style={{fontSize: '14px'}}>Vancouver, BC | June 2023 - September 2023</p>
            <hr style={{ width: '100%', border: '1px solid white' }} />
            <p style={{ maxWidth: '400px', textAlign: 'center' }}>
                DESCRIPTION
            </p>
        </div>
    );
};