import Image from 'next/image';
import React from 'react';

interface JPProps {
    // Define your component props here if any
}

export const Jp: React.FC<JPProps> = () => {
    // Component logic goes here

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            
            <a href="https://youtu.be/8tixVvmrgY8" target="_blank" rel="noopener noreferrer">
                <Image 
                    src="/images/bird_idle_f1.png" 
                    alt="example text" 
                    width={250} 
                    height={250} 
                    style={{ 
                        marginTop: '16px', 
                        width: '250px', 
                        height: '250px', 
                        objectFit: 'cover', // Defines how the image should be resized to fit its container
                        objectPosition: 'top' // Defines the position of the image within its container
                    }} 
                />
            </a>

            <h3>
                Just Parry
            </h3> 
            <b>C++, OpenGL, Git</b><br/>
            <p style={{fontSize: '14px'}}>September 2024 - December 2024</p>
            <p style={{ maxWidth: '400px', textAlign: 'center' }}>
                DESCRIPTION
            </p>
        </div>
    );
};