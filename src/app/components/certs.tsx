import React from 'react';
import { Azf } from './certs/index';
import './component.css';

interface CertsProps {
}

const Certs: React.FC<CertsProps> = () => {
    // Component logic goes here

    return (
        <>
            <h1>
                Certifications
            </h1>
            <div className="grid"  >
            <Azf/>
            </div>
        </>
    );
};

export default Certs;