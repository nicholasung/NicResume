import Image from 'next/image';
import React from 'react';
import styles from './imghover.module.css';
interface GCProps {
}

export const Gc: React.FC<GCProps> = () => {
    return (
        <div className={styles.container}>
        <a href="https://github.com/nicholasung/gcalbot" target="_blank" rel="noopener noreferrer">
            <Image 
                src="/images/gcalbot.png" 
                alt="Discord Slash Google Calendar" 
                width={250} 
                height={250} 
                className={styles.image}
            />
        </a>
        <h3>Google Calendar Discord Bot</h3>
        <b>Docker, Python, Web APIs</b><br/>
        <p className={styles.text}>March 2025</p>
        <p className={styles.text}>
            A discord bot that syncs discord server events with a shared google calendar via the Google Calendar web API. Used to help organize plans with my friend group. Hosted on docker on my homelab.
        </p>
    </div>
    );
};