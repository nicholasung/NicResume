import Image from 'next/image';
import React from 'react';
import styles from './imghover.module.css';

interface SBProps {
}

export const Sb: React.FC<SBProps> = () => {
    return (
            <div className={styles.container}>
                <a href="https://github.com/nicholasung/BoardsSnapboard" target="_blank" rel="noopener noreferrer">
                    <Image 
                        src="/images/Snapback.png" 
                        alt="An image of my custom PCB" 
                        width={250} 
                        height={250} 
                        className={styles.image}
                    />
                </a>
                <h3>Board&apos;s Snapboard</h3>
                <b>KiCad, PCB Manufacturing</b><br/>
                <p className={styles.text}>July 2020</p>
                <p className={styles.text}>
                    Recreated and manufactured an unintrusive filtering circuit for 3.3v potentiometer based joysticks to prevent overshooting the centre.
                </p>
            </div>
    );
};