import React from 'react';
import styles from './ListElement.module.scss';

const ListElement = ({title, ...props}) => (
    <li
        className={styles.item}
        onClick={props.onClick}
        data-id={props.dataid}
    >
        {title}
    </li>
)

export default ListElement;