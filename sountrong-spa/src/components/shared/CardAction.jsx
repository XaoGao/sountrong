import React from "react";
import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";

export const CardAction = (props) => {
  return (
    <CardActions>
      <Button color="primary">
        <NavLink to={props.to}>
          {props.count} {props.title}
        </NavLink>
      </Button>
    </CardActions>
  );
};
export default CardAction;
