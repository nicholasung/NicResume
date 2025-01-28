import Image from 'next/image';
import React from 'react';
import styles from '../imghover.module.css';
interface XYZProps {
}

export const Xyz: React.FC<XYZProps> = () => {
    return (
        <div className={styles.container}>
        <a href="https://github.com/nicholasung/BoardsSnapboard" target="_blank" rel="noopener noreferrer">
            <Image 
                src="/images/Snapback.png" 
                alt="example text" 
                width={250} 
                height={250} 
                className={styles.image}
            />
        </a>
        <h3>PROJECT NAME</h3>
        <p className={styles.text}>Date</p>
    </div>
    );
};