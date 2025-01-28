import React from 'react';

interface BastionProps {
}

export const Bastion: React.FC<BastionProps> = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h3>
                Bastion
            </h3> 
            <b>Fintech Business Intern</b><br/>
            <p style={{fontSize: '14px'}}>Makati, Philippines | June 2023 - September 2023</p>
            <hr style={{ width: '100%', border: '1px solid white' }} />
            <p style={{ maxWidth: '400px', textAlign: 'center' }}>
            Collaborated with IT and Software Engineers to create systems that maintain critical nationwide financial systems and enable internal operations to continue.
            </p>
        </div>
    );
};