import React, { useState } from 'react';

// thêm icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faWallet } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Wrapper from '../../../Wrapper/Wrapper';
import Dropdown from '../../../Dropdown/Dropdown';

const cx = classNames.bind(styles);

function Header() {
    const [activeAction, setActiveAction] = useState(false);

    const isActive = () => {
        setActiveAction(!activeAction);
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('money')}>
                    <FontAwesomeIcon icon={faWallet} /> 25.000.000 vnđ
                </div>

                <div onClick={isActive} className={cx('acion')}>
                    <div className={cx('logo')}>Xin chào Nguyễn Tuấn Anh</div>
                    <div>
                        <FontAwesomeIcon icon={faCaretDown} />
                        {activeAction || (
                            <div className={cx('acion-list')}>
                                <Wrapper>
                                    <Dropdown />
                                </Wrapper>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
