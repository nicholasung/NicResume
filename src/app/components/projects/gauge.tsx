import Image from 'next/image';
import React from 'react';
import styles from './imghover.module.css';
interface OPGProps {
}

export const Opg: React.FC<OPGProps> = () => {
    return (
        <div className={styles.container}>
        <a href="https://youtube.com/shorts/BkHmQEv1WnE" target="_blank" rel="noopener noreferrer">
            <Image 
                src="/images/gauge_wip.png" 
                alt="example text" 
                width={250} 
                height={250} 
                className={styles.image}
            />
        </a>
        <h3>Oil Pressure Gauge</h3>
        <b>C++, ESP32S3, Arduino, Product Design</b><br/>
        <p className={styles.text}>January 2024 - Feburary 2024</p>
        <p className={styles.text}>
            A oil pressure gauge designed to use a budget friendly development board and other componenets. It is designed to be easily adapted to many use cases. This is done with readable code and clear definitions of sensor and UI settings. This allows for usage of many sensors for many purposes with the onboard ADC. 
        </p>
    </div>
    );
};