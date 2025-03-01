import Image from 'next/image';
import React from 'react';
import styles from './imghover.module.css';

interface JPProps {
}

export const Jp: React.FC<JPProps> = () => {
    return (
            <div className={styles.container}>
                <a href="https://youtu.be/8tixVvmrgY8" target="_blank" rel="noopener noreferrer">
                    <Image 
                        src="/images/bird_idle_f1.png" 
                        alt="An image of my custom PCB" 
                        width={250} 
                        height={250} 
                        className={styles.image}
                    />
                </a>
            <h3>
                Just Parry
            </h3> 
            <b>C++, OpenGL, Git</b><br/>
            <p className={styles.text}>September 2024 - December 2024</p>
            <p className={styles.text}>
                A fighting game prototype built with a custom engine in C++ with a focus on responsiveness. My significant contributions includes leading scrums, low level polling logic, code reviews and documentation. Built with guidance from UBC Course CPSC 427: Video Game Programming.
            </p>
        </div>
    );
};