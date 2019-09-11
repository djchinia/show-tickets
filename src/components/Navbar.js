import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    padding: 20,
  },
  title: {
    flexGrow: 1,
    alignItems: 'center',
    fontSize: 20,
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography position="static" className={classes.title}>
            Viagogo Coding Challenge
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
