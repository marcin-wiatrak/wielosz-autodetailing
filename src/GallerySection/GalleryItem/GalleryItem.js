import React from 'react';
import VectraImg from '../../assets/images/Vectra/vectra.jpg';
import styles from './GalleryItem.module.scss';


const GalleryItem = () => (

    <div className={`${styles.wrapper}`} >
        <img src={VectraImg} alt="Opel Vectra"/>
        <h3>Opel Vectra</h3>
    </div>

);

export default GalleryItem;