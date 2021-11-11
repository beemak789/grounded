import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { logout } from '../store/auth';
import { Link } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const HamburgerNav = (props) => {
  const dispatch = useDispatch();
  let user = useSelector((state) => state.auth);
  let cart = useSelector((state) => state.thisCart);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSignOutClose = () => {
    setAnchorEl(null);
    dispatch(logout());
    history.push('/');
  };

  return (
    <div className='hamburger-navigation' id='navbar'>
      <Button
        id='basic-button'
        aria-controls='basic-menu'
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MenuIcon />
      </Button>

      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem to='/me' component={Link}>
        <PersonIcon style={{width: "15px", height: "15px"}} />   My Account
        </MenuItem>
        <MenuItem>Order History</MenuItem>
        <MenuItem onClick={handleSignOutClose} to='/logout'>
          Sign Out  <ExitToAppIcon style={{width: "15px", height: "15px"}}/>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default HamburgerNav;
