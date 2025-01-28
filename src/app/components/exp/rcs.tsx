import React from 'react';

interface RCSProps {
    // Define your component props here if any
}

export const Rcs: React.FC<RCSProps> = () => {
    // Component logic goes here

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h3>
                Richmond Christian School
            </h3> 
            <b>Administrative Assistant</b><br/>
            <p style={{fontSize: '14px'}}>Richmond, BC | June 2022 – August 2022</p>
            <hr style={{ width: '100%', border: '1px solid white' }} />
            <p style={{ maxWidth: '400px', textAlign: 'center' }}>
            Assisted with organizational, financial, and enrolment tasks. Additionally, aided the IT department with an inventory system for iPad&apos;s across multiple locations.
            </p>
        </div>
    );
};