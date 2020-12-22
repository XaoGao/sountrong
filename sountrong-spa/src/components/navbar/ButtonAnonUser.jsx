import React from "react";
import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";

export const ButtonAnonUser = (props) => {
  return (
    <div>
      <Button color="inherit">
        <NavLink to={"/login"} className={props.decorationNavLink}>
          Войти
        </NavLink>
      </Button>
    </div>
  );
};
export default ButtonAnonUser;
