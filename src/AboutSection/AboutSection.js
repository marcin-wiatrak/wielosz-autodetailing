import React from 'react';
import styles from './AboutSection.module.scss';
import wieloszBg from '../assets/images/wielosz_about.jpg'

const AboutSection = () => (
    <section className={styles.wrapper}>
        <h2 className={styles.title}>O firmie</h2>
        <div className={styles.rightBg}>
            <img src={wieloszBg} alt="Dawid Wieli Wielosz"/>
        </div>

        <div className={styles.content}>
            <p className={styles.shortNote}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore sunt accusantium nisi ab culpa dicta ut sapiente similique quia natus praesentium suscipit fugit, quaerat ea omnis minima atque asperiores explicabo doloremque voluptatibus aliquam odit nemo quae error. Quis atque nihil, molestiae maxime nesciunt officiis, laboriosam temporibus ipsum sunt consequatur vitae.
            </p>
            <div className={styles.coopWrapper}>
                <div className={styles.coopBox}>
                    FX PROTECT
                </div>
                <div className={styles.coopBox}>
                    Chemotion
                </div>
                <div className={styles.coopBox}>
                    Chemotion
                </div>
                <div className={styles.coopBox}>
                    Chemotion
                </div>
                <div className={styles.coopBox}>
                    Chemotion
                </div>
                <div className={styles.coopBox}>
                    Chemotion
                </div>
            </div>
        </div>
    </section>
)

export default AboutSection;