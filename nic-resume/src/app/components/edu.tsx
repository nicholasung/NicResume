import React from 'react';
import { Rhs, Ubc } from './edu/index';

interface EduProps {
}

const Edu: React.FC<EduProps> = () => {
    // Component logic goes here

    return (
        <div>
            <Ubc />
            <Rhs />
        </div>
    );
};

export default Edu;