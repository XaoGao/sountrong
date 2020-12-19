import React from 'react'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  decorationNavLink: {
    textDecoration: "none",
    color: "#ffffff",
  },
}));

export const UserMenu = (props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
    {props.isAuth ? 
      <div>
        <Button color="inherit" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
          {props.username}
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={() => props.logout()}>Logout</MenuItem>
        </Menu>
      </div> : 
      <Button color="inherit">
        <NavLink to={"/login"} className={classes.decorationNavLink}>
          Войти
        </NavLink>
      </Button>
    }
    </div>
  )
}

export default UserMenu;