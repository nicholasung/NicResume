import React from 'react';
import './css/grid.css';
import { Rhs, Ubc } from './edu/index';

interface EduProps {
}

const Edu: React.FC<EduProps> = () => {
    // Component logic goes here

    return (
        <div className="container">
                <Ubc />
                <Rhs />
        </div>
    );
};

export default Edu;