import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styles from './icons.module.css';

const Footer: React.FC = () => {
    return (
        <div>
            <h4>CONTACT</h4>
            <h5>nicholaskeaneung@gmail.com</h5>
            <div className={styles.icongrid}>
                <a href="mailto:nicholaskeaneung@gmail.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faEnvelope} className={`${styles.icon} ${styles.email}`} />
                </a>
                <a href="https://www.linkedin.com/in/nicholasung-/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} className={`${styles.icon} ${styles.linkedin}`} />
                </a>
                <a href="https://github.com/nicholasung" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} className={`${styles.icon} ${styles.github}`} />
                </a>
                <a href="/Nicholas_Ung_Resume.pdf" target="_blank" rel="noopener noreferrer" className={styles.resumeButton}>
                    <span>Resume</span>
                </a>
            </div>
        </div>
    );
};

export default Footer;