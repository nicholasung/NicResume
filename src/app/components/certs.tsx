import React from 'react';
import '../globals.css';
import { Azf } from './certs/index';

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