import React from 'react';
import '../globals.css';
import { Cn } from './exp/codeninjas';

interface ExpProps {
    // Define your component props here
}

const Exp: React.FC<ExpProps> = () => {
    // Component logic goes here

    return (
        <>
            <h1>
                Experience
            </h1>
            <div className="grid"  >
                <Cn/>
                
            </div>
        </>
    );
};

export default Exp;