import React from 'react';
import NavItem from './NavItem/NavItem';
import styles from './Nav.module.scss';

const Nav = () => (
<>
    <nav>
        <ul className={styles.wrapper}>
            <NavItem
                link="#uslugi"
                linkTitle="zakres usług"
            />
            <NavItem
                link="#relizacje"
                linkTitle="realizacje"
            />
            <NavItem
                link="#ofirmie"
                linkTitle="o firmie"
            />
            <NavItem
                link="#kontakt"
                linkTitle="kontakt"
            />
        </ul>
    </nav>
</>
);

export default Nav;