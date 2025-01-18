import React from 'react';
import '../globals.css';
import { Rhs, Ubc } from './edu/index';

interface EduProps {
}

const Edu: React.FC<EduProps> = () => {
    // Component logic goes here

    return (
        <>
            <h1>
                Education
            </h1>
            <div className="grid"  >
                    <Ubc />
                    <Rhs />  
            </div>
        </>
    );
};

export default Edu;