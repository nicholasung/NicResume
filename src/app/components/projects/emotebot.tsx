import Image from 'next/image';
import React from 'react';
import styles from './imghover.module.css';
interface EBProps {
}

export const Eb: React.FC<EBProps> = () => {
    return (
        <div className={styles.container}>
        <a href="https://github.com/nicholasung/DiscordEmoteBot" target="_blank" rel="noopener noreferrer">
            <Image 
                src="/images/discordemotebot.png" 
                alt="An image of my Hamster Twix" 
                width={250} 
                height={250} 
                className={styles.image}
            />
        </a>
        <h3>Discord Emote Bot</h3>
        <b>Docker, Python, Web APIs</b><br/>
        <p className={styles.text}>October 2023 - May 2024</p>
        <p className={styles.text}>
            A simple discord bot that automatically takes flagged images and turns them into an emote. Runs within docker on my homelab.
        </p>
    </div>
    );
};