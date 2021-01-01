import React from 'react';
import Button from '../Components/Button/Button';
import GalleryItem from './GalleryItem/GalleryItem';
import styles from './GallerySection.module.scss';

const GallerySection = () => (
    <section className={styles.wrapper}>
        <h2 className={styles.title}>Realizacje</h2>

        <div className={styles.galleryElementsWrapper}>
            
        </div>

        <div className={styles.parent}>
            <div className={styles.div1}><GalleryItem /></div>
            <div className={styles.div2}><GalleryItem /></div>
            <div className={`${styles.div3}`}><GalleryItem /></div>
            <div className={styles.div4}><GalleryItem /></div>
            <div className={styles.div5}><GalleryItem /></div>
        </div>

        <div className={styles.button}>
            <Button 
                href="/realizacje"
                title="zobacz wszystkie realizacje"
            />
        </div>
    </section>
)

export default GallerySection;