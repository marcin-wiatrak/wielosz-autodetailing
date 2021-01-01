import React from 'react';
import styles from './NavItem.module.scss';

const NavItem = ({link, linkTitle}) => (
    
    <li className={styles.item}>
        <a href={link}>
            {linkTitle}
        </a>
    </li>
)

export default NavItem