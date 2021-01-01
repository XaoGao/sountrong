import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardImage from "../../shared/CardImage";
import CardAction from "../../shared/CardAction";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export const AlbumCard = (props) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardImage height="140" title={props.album.title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.album.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Жанр, язык,
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardAction
        to={`${props.singerId}/albums/${props.id}`}
        count={props.album.countSong}
        title="Песен"
      />
    </Card>
  );
};
export default AlbumCard;
