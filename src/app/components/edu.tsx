import React from 'react';
import './component.css';
import { Ubc } from './edu/index';

interface EduProps {
}

const Edu: React.FC<EduProps> = () => {
    return (
        <>
            <h1>
                Education
            </h1>
            <div className="grid"  >
                    <Ubc />
            </div>
        </>
    );
};

export default Edu;