import Image from 'next/image';
import React from 'react';

interface XYZProps {
    // Define your component props here if any
}

export const Xyz: React.FC<XYZProps> = () => {
    // Component logic goes here

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            
            <a href="https://google.com" target="_blank" rel="noopener noreferrer">
                <Image 
                    src="/images/discordemotebot.png" 
                    alt="example text" 
                    width={500} 
                    height={500} 
                    style={{ 
                        marginTop: '16px', 
                        width: '275px', 
                        height: '275px', 
                        objectFit: 'cover', // Defines how the image should be resized to fit its container
                        objectPosition: 'center' // Defines the position of the image within its container
                    }} 
                />
            </a>

            <h3>
                PROJECT
            </h3> 
            <b>Skills</b><br/>
            <p style={{fontSize: '14px'}}>June 2023 - September 2023</p>
            <p style={{ maxWidth: '400px', textAlign: 'center' }}>
                DESCRIPTION
            </p>
        </div>
    );
};