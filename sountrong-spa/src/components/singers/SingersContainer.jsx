import { useEffect } from "react";
import { connect } from "react-redux";
import Singers from "./Singers";
import { getSingers } from "../../redux/singers-reducer";

import React from "react";

const SingersContainer = (props) => {
  useEffect(() => {
    props.getSingers();
  }, []);

  return (
    <>
      {props.isFetching ? (
        <div>Ждите</div>
      ) : (
        <Singers singers={props.singers} />
      )}
    </>
  );
};

let mapStateToProps = (state) => {
  return {
    singers: state.singers.singers,
    isFetching: state.singers.isFetching,
  };
};

export default connect(mapStateToProps, { getSingers })(SingersContainer);
