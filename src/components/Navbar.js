import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const Navbar = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit">
            Viagogo Coding Challenge
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
