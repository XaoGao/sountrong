import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import UserMenu from "./UserMenu";
import Typography from "@material-ui/core/Typography";
import { NavLink } from "react-router-dom";
import { role } from '../../settings/roles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  decorationNavLink: {
    textDecoration: "none",
    color: "#ffffff",
  },
}));

export const Navbar = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Container>
          <Toolbar>
            <Typography variant="h5" className={classes.title}>
              <NavLink to={"/"} className={classes.decorationNavLink}>
                Sountrong
              </NavLink>
            </Typography>
            <Typography variant="h6" className={classes.title}>
              <NavLink to={"/singers"} className={classes.decorationNavLink}>
                Группы
              </NavLink>
            </Typography>
            {props.isAuth && role.canEdit(props.role) ? (
              <Typography variant="h6" className={classes.title}>
                <NavLink
                  to={"/create-singer"}
                  className={classes.decorationNavLink}
                >
                  Добавить группу
                </NavLink>
              </Typography>
            ) : (
              ""
            )}

            <UserMenu
              isAuth={props.isAuth}
              username={props.username}
              logout={props.logout}
            />
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Navbar;
