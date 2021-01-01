import React from 'react';
import styles from './Header.module.scss'
import Nav from './Nav/Nav';
import SocialMediaBar from './SocialMediaBar/SocialMediaBar.js';

const Header = () => (
    <header className={styles.wrapper}>
        <Nav />
        <SocialMediaBar />
    </header>
);

export default Header