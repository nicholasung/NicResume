import React from 'react';
import '../globals.css';
import { Bastion, Cn } from './exp/index';

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
                <Bastion/>
                
            </div>
        </>
    );
};

export default Exp;