import React from 'react';
import styles from './MainSection.module.scss';
import logoWielosz from '../assets/images/logo_white.svg';

const MainSection = () => (
    <section className={styles.wrapper}>
        <div className={styles.bgImage} />

        <div className={styles.centerWrapper}>
            <img src={logoWielosz} alt="Logo Wielosz auto detailing" className={styles.mainLogo}/>
            <h1 className={styles.title}>Twoje auto <span className={styles.headingSecondLine}>w dobrych rękach</span></h1>
        </div>

    </section>
)

export default MainSection;