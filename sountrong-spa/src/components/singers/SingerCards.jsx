import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardImage from "../shared/CardImage";
import CardAction from "../shared/CardAction";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginTop: 45,
  },
});

export const SingerCards = (props) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardImage height="300" title={props.singer.name} image={props.singer.mainImage}/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.singer.name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardAction
        to={`/singers/${props.id}`}
        count={props.singer.countOfAlbums}
        title="альбомов"
        toEdit={`/edit-singers/${props.id}`}
      />
    </Card>
  );
};
export default SingerCards;
