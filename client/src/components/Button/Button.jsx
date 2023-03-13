import React from 'react';

import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({ children }) {
    let Comp = 'button';

    const classes = cx('wrapper');

    return (
        <Comp classNames={classes}>
            <span>{children}</span>
        </Comp>
    );
}

export default Button;
