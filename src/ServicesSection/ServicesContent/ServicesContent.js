import React from 'react';
import ServicesDataList from '../../data/ServicesList';
import { useParams } from 'react-router-dom';
import styles from './ServicesContent.module.scss';


const ServicesContent = () => {

    let urlID  = useParams();
    let singleServiceData = ServicesDataList.find(x => x.id === parseInt(urlID.id));
    
    return (
      <div className={styles.wrapper}>
        {singleServiceData.image !== "" ? <img className={styles.serviceImage} src={singleServiceData.image} alt="123"/>  : null}
        <p className={styles.serviceDescription}>{singleServiceData.description}</p>
      </div>
    );
}

export default ServicesContent;