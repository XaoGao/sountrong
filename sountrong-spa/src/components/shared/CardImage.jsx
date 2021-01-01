import React from "react";
import nouser from "../../assets/no-user.jpg";
import CardMedia from "@material-ui/core/CardMedia";

export const CardImage = (props) => {
  return (
    <CardMedia
      component="img"
      alt={props.title}
      height={props.height}
      image={nouser}
      title={props.title}
    />
  );
};
export default CardImage;
