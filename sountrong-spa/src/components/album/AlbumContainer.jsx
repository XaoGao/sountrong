import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import Album from "./show/Album";
import { getAlbum } from "../../redux/album-reducer";

const AlbumContainer = (props) => {
  useEffect(() => {
    let albumId = props.match.params.albumId;
    if (albumId) {
      props.getAlbum(albumId);
    }
  }, []);
  return (
    <>
      <Album album={props.album} />
    </>
  );
};

let mapStateToProps = (state) => {
  return {
    album: state.albums.album,
    isFetching: state.albums.isFetching,
  };
};

export default compose(
  connect(mapStateToProps, { getAlbum }),
  withRouter
)(AlbumContainer);
