import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import NavDrawer from './NavDrawer';

const HamburgerNav = () => {
  return (
    <nav className="navigation" id="navbar">
    <div className="nav-content">
      <MenuIcon
        // style={{height: "25px", width: "25px"}}
      />
    </div>
    {/* <NavDrawer/> */}
  </nav>
  )
}

export default HamburgerNav
