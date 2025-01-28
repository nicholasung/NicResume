import React from 'react';

interface UBCEAProps {
    // Define your component props here if any
}

export const Ubcea: React.FC<UBCEAProps> = () => {
    // Component logic goes here

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h3>
                UBC Esports Association
            </h3> 
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <b>Developer</b>
                <p style={{ fontSize: '12px', marginLeft: '8px' }}>Prev. President</p>
            </div>
            <p style={{fontSize: '14px'}}>Vancouver, BC | June 2020 - Present</p>
            <hr style={{ width: '100%', border: '1px solid white' }} />
            <p style={{ maxWidth: '400px', textAlign: 'center' }}>
            Helped with development of a custom station management webapp for our PC Cafe. This entailed code reviews and pair programming sessions. Previously I led a large collegiate club with over 100 executives and 600 members with a focus on community building. Worked collaboratively with high profile organizations including Memory Express and Canucks Sports & Entertainment.
            </p>
        </div>
    );
};