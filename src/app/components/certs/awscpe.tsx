import Image from 'next/image';
import React from 'react';
import styles from './imghover.module.css';
interface CPEProps {
}

export const Cpe: React.FC<CPEProps> = () => {
    return (
        <div className={styles.container}>
        <p className={styles.title}>AWS Cloud Practitioner Essentials</p>
        <p className={styles.text}>Feburary 2025</p>
        <a href="https://explore.skillbuilder.aws/learn/courses/134/aws-cloud-practitioner-essentials/lessons" target="_blank" rel="noopener noreferrer">
            <Image 
                src="/images/awslogo.png" 
                alt="AWS Logo" 
                width={250} 
                height={250} 
                className={styles.image}
            />
        </a>
    </div>
    );
};