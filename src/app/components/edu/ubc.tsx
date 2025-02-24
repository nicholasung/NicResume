import React from 'react';

interface UBCProps {
    // Define your component props here if any
}

export const Ubc: React.FC<UBCProps> = () => {
    // Component logic goes here

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h3>
                University of British Columbia
            </h3> 
            <b>Bachelors of Science</b>
            Vancouver, BC <br/> September 2020 - Present
        </div>
    );
};