import Image from 'next/image';
import React from 'react';
import styles from './imghover.module.css';
interface AZFProps {
}

export const Azf: React.FC<AZFProps> = () => {
    return (
        <div className={styles.container}>
        <p className={styles.title}>Microsoft Certified: Azure Fundamentals</p>
        <p className={styles.text}>January 2025</p>
        <a href="https://learn.microsoft.com/en-ca/credentials/certifications/azure-fundamentals/?practice-assessment-type=certification" target="_blank" rel="noopener noreferrer">
            <Image 
                src="images/MS_fundamentals_badge.png" 
                alt="Microsoft Certified Fundamentals Icon" 
                width={150} 
                height={150} 
                className={styles.image}
            />
        </a>
    </div>
    );
};