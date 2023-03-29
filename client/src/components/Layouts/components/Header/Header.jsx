// import React, { useState } from 'react';

// // thêm icon
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCaretDown, faWallet } from '@fortawesome/free-solid-svg-icons';

// import classNames from 'classnames/bind';
// import styles from './Header.module.scss';
// import Wrapper from '../../../Wrapper/Wrapper';
// import Dropdown from '../../../Dropdown/Dropdown';

// const cx = classNames.bind(styles);

// function Header() {
//     const [activeAction, setActiveAction] = useState(false);
//     const user = JSON.parse(localStorage.getItem('user'));

//     const isActive = () => {
//         setActiveAction(!activeAction);
//     };

//     return (
//         <header className={cx('wrapper')}>
//             <div className={cx('inner')}>
//                 <div className={cx('money')}>
//                     <FontAwesomeIcon icon={faWallet} /> {user.money} vnđ
//                 </div>

//                 <div onClick={isActive} className={cx('acion')}>
//                     <div className={cx('logo')}>Xin chào: {user.name}</div>
//                     <div>
//                         <FontAwesomeIcon icon={faCaretDown} />
//                         {activeAction && (
//                             <div className={cx('acion-list')}>
//                                 <Wrapper>
//                                     <Dropdown />
//                                 </Wrapper>
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </header>
//     );
// }

// export default Header;

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import Dropdown from '../../../Dropdown/Dropdown';
import IMGAvatar from '../../../../assets/images/avata.jpg';

const settings = [
    {
        name: 'Profile',
        link: null,
    },
    {
        name: 'Logout',
        link: '/login',
    },
];

function Header() {
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const user = JSON.parse(localStorage.getItem('user'));

    // const handleOpenNavMenu = (event) => {
    //     setAnchorElNav(event.currentTarget);
    // };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    // const handleCloseNavMenu = () => {
    //     setAnchorElNav(null);
    // };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}></Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}></Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt={user.name} src={IMGAvatar} />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            <Dropdown onClick={handleCloseUserMenu} />
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Header;
