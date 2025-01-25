import Image from 'next/image';
import React from 'react';
import styles from '../imghover.module.css'; // Adjust the import path if necessary
interface XYZProps {
    // Define your component props here if any
}

export const Xyz: React.FC<XYZProps> = () => {
    // Component logic goes here

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
        <b>skills</b><br/>
        <p className={styles.text}>Date</p>
        <p className={styles.text}>
            description
        </p>
    </div>
    );
};