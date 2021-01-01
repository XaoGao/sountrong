import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ButtonAnonUser from "./ButtonAnonUser";
import ButtonUser from "./ButtonUser";

const useStyles = makeStyles((theme) => ({
  decorationNavLink: {
    textDecoration: "none",
    color: "#ffffff",
  },
}));

export const UserMenu = (props) => {
  const classes = useStyles();

  return (
    <div>
      {props.isAuth ? (
        <ButtonUser username={props.username} logout={props.logout}/>
      ) : (
        <ButtonAnonUser decorationNavLink={classes.decorationNavLink} />
      )}
    </div>
  );
};

export default UserMenu;
