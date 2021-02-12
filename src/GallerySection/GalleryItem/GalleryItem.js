import React from 'react';
import VectraImg from '../../assets/images/Vectra/vectra.jpg';
import styles from './GalleryItem.module.scss';


const GalleryItem = () => (

    <a href="google.com" className={styles.wrapper} >
        <img src={VectraImg} alt="Opel Vectra"/>
        <h3>Opel Vectra</h3>
    </a>

);

export default GalleryItem;