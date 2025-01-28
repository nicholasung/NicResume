import React from 'react';
import '../globals.css';
import { Azf } from './certs/index';
import { Ubc } from './edu/index';

interface EdCertsProps {
}

const EdCerts: React.FC<EdCertsProps> = () => {
    return (
        <>
            <h1>
                Education & Certifications
            </h1>
            <div className="grid"  >
            <Ubc/>
            <Azf/>
            </div>
        </>
    );
};

export default EdCerts;