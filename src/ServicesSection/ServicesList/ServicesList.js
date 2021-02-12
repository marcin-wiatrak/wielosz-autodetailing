import React from 'react';
import ServicesDataList from '../../data/ServicesList';
import { NavLink } from 'react-router-dom';
import styles from './ServicesList.module.scss'

const ServicesList = () => (
    <ul className={styles.wrapper}>
        {ServicesDataList.map(item => (
            <li className={styles.listItem}>
                <NavLink to={item.id.toString()} activeClassName={styles.active} className={styles.listItemLink}>{item.title}</NavLink>
            </li>
        ))}
    </ul>
)

export default ServicesList;