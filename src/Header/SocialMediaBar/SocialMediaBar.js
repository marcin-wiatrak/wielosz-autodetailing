import React from 'react';
import styles from './SocialMediaBar.module.scss'
import instagramLogo from '../../assets/images/ig.svg';
import facebookLogo from '../../assets/images/fb.svg';

const SocialMediaBar = () => (
    <ul className={styles.wrapper}>
        <li className={styles.item}>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" ><img src={instagramLogo} alt=""/></a>
        </li>
        <li className={styles.item}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" ><img src={facebookLogo} alt=""/></a>
        </li>
    </ul>
)

export default SocialMediaBar