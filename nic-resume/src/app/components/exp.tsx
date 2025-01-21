import React from 'react';
import '../globals.css';
import { Bastion, Boards, Cn, Rcs, Ubcea } from './exp/index';


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
                <Ubcea/>
                <Bastion/>
                <Rcs/>
                <Boards/>
            </div>
        </>
    );
};

export default Exp;