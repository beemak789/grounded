import React, { useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@mui/styles';
import { flexbox } from '@mui/system';


const useStyles = makeStyles({
  paper: {
    display: "flex",
    alignItems: "flex-end",
    width: 120
  }
});

const NavDrawer = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => {
    setOpen(!open)
  }

  return (
    <div>
      <Drawer
        style={{ width: '30px' }}
        variant='persistent'
        anchor='top'
        open={toggleDrawer}
        classes={{ paper: classes.paper }}
      >
        {/* on click in menu item */}
        <MenuItem id='show-account'>My Account</MenuItem>
        <MenuItem id='show-logout'>Logout</MenuItem>
      </Drawer>
    </div>
  );
};

export default NavDrawer;
