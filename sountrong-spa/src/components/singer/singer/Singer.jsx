import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import AlbumCard from "./AlbumCard";
import PaperTypograhy from "../../shared/PaperTypograhy";
import { role } from "../../../settings/roles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    marginTop: 40,
  },
}));

export const Singer = (props) => {
  const classes = useStyles();
  
  let albums = null;
  
  if (props.singer.albums && props.singer.albums.data) {
    let data = Array.from(props.singer.albums.data);
    albums = data.map((album) => (
      <Grid key={album.id} item xs={3}>
        <AlbumCard
          album={album.attributes}
          id={album.id}
          singerId={props.singer.id}
        />
      </Grid>
    ));
  }
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <PaperTypograhy
          body={props.singer.name}
          classes={classes}
          variant="h3"
        />
        <PaperTypograhy
          body={props.singer.description}
          classes={classes}
          variant="body1"
        />
      </Grid>
      {albums}
    </Grid>
  );
};
export default Singer;
