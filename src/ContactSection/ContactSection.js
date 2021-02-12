import React from 'react';
import styles from './ContactSection.module.scss';
import { Call, AlternateEmail, Room } from '@material-ui/icons';

const ContactSection = () => (
    <section className={styles.wrapper}>
    <h2 className={styles.title}>Kontakt</h2>

    <div className={styles.content}>
        <div className={styles.leftCol}>
            <h3>WIELOSZ AUTO DETAILING</h3>
            <p><Call className={styles.icon} />721 491 319</p>
            <p><AlternateEmail className={styles.icon} />kontakt@wieloszautodetailing.pl</p>
        </div>
        <div className={styles.separator}></div>
        <div className={styles.rightCol}>
            <p><Room className={styles.icon} /> ul. Lipowa 7a, 88-400 Żnin</p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2409.7373781218666!2d17.75304731597694!3d52.84511711983595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4703650ade02419f%3A0x31e7b1f09b23e86!2sWielosz%20Auto%20Detailing!5e0!3m2!1spl!2spl!4v1609510582316!5m2!1spl!2spl" title="wielosz_map" width="800" height="400" frameBorder="0" allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
        </div>
    </div>
</section>
)

export default ContactSection;