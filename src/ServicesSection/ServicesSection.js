import React from 'react';
import List from './List/List';
import styles from './ServicesSection.module.scss';

const ServicesSection = () => (
    <section className={styles.wrapper}>
        <h2 className={styles.title}>Zakres usług</h2>
        <List />
    </section>
)

export default ServicesSection;