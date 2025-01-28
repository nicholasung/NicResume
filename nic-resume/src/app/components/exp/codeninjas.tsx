import React from 'react';

interface CNProps {
    // Define your component props here if any
}

export const Cn: React.FC<CNProps> = () => {
    // Component logic goes here

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h3>
                Code Ninjas
            </h3> 
            <b>Code Sensei</b><br/>
            <p style={{fontSize: '14px' }}>Richmond, BC | June 2024 - Present</p>
            <hr style={{ width: '100%', border: '1px solid white' }} />
            <p style={{ maxWidth: '400px', textAlign: 'center' }}>
                Architected and deployed local storage server with remote access emphasizing reliability and cost effectiveness. Additionally, provided live instruction for microcontrollers, AI Training, Lua and other Computer Science fundamentals.
            </p>
        </div>
    );
};