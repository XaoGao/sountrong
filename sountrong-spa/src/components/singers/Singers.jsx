import React from "react";
import SingerCards from "./SingerCards";

export const Singers = (props) => {
  let singers = null;
  if (props.singers) {
    let data = Array.from(props.singers);
    debugger;
    singers = data.map((singer) => (
      <SingerCards key={singer.id} singer={singer.attributes} />
    ));
  }
  return <div>{singers}</div>;
};
export default Singers;
