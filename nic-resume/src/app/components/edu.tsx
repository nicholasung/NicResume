import React from 'react';
import '../globals.css';
import { Rhs, Ubc } from './edu/index';

interface EduProps {
}

const Edu: React.FC<EduProps> = () => {
    // Component logic goes here

    return (
        <div className="grid" >
                <Ubc />
                <Rhs />
                <Ubc />
                <Ubc />
                
                
        </div>
    );
};

export default Edu;