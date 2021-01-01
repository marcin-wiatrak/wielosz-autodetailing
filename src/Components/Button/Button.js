import React from 'react';
import style from './Button.module.scss';

const Button = ({title, href}) => (

    <a
        href={href}
        className={style.button}
    >
        {title}
    </a>

)

export default Button;