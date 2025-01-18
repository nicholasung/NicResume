import React from 'react';

interface BastionProps {
    // Define your component props here if any
}

export const Bastion: React.FC<BastionProps> = () => {
    // Component logic goes here

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h3>
                Bastion
            </h3> 
            <b>Fintech Business Intern</b><br/>
            <p style={{fontSize: '14px'}}>Makati, Philippines | June 2023 - September 2023</p>
            <hr style={{ width: '90%', border: '1px solid white' }} />
            <p style={{ maxWidth: '400px', textAlign: 'center' }}>
            Collaborated with IT and Software Engineers to create systems that maintain critical nationwide financial systems and enable internal operations to continue.
            </p>
        </div>
    );
};