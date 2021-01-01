import React, { useState } from "react";
import SingerCards from "./SingerCards";
import Grid from '@material-ui/core/Grid';

export const Singers = (props) => {
  const [spacing] = useState(2);
  let singers = null;
  if (props.singers) {
    let data = Array.from(props.singers);
    singers = data.map((singer) => (
      <Grid key={singer.id} item>
        <SingerCards singer={singer.attributes} id={singer.id}/>
      </Grid>
    ));
  }
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          {singers}
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Singers;
