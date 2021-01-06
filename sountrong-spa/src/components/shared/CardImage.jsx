import React from "react";
import nouser from "../../assets/no-user.jpg";
import CardMedia from "@material-ui/core/CardMedia";

export const CardImage = (props) => {
  return (
    <CardMedia
      component="img"
      alt={props.title}
      height={props.height}
      image={props.image ? `http://localhost:3001/${props.image}` : nouser}
      title={props.title}
    />
  );
};
export default CardImage;
