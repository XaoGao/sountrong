import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

export const PaperTypograhy = (props) => {
  return (
    <Paper className={props.classes.paper}>
      <Typography variant={props.variant} align="center">
        {props.body}
      </Typography>
    </Paper>
  );
};
export default PaperTypograhy;
