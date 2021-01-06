import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getSinger } from "../../../redux/singers-reducer";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import Singer from "./Singer";

const SingerContainer = (props) => {
  useEffect(() => {
    let singerId = props.match.params.id;
    if (singerId) {
      props.getSinger(singerId);
    }
  }, []);
  return (
    <>
      {props.isFetching ? (
        <div>Ждите</div>
      ) : (
        <Singer singer={props.singer}/>
      )}
    </>
  );
};

let mapPropsToState = (state) => {
  return {
    singer: state.singers.singer,
    role: state.auth.role,
    isFetching: state.singers.isFetching,
  };
};

export default compose(
  connect(mapPropsToState, { getSinger }),
  withRouter
)(SingerContainer);
