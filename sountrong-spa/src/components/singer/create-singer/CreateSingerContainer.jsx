import React from "react";
import { connect } from "react-redux";
import CreateSinger from "./CreateSinger";
import { createSinger } from "../../../redux/singers-reducer";
import { ToastContainer } from "react-toastify";
import { alert } from '../../untils/Toast'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const CreateSingerContainer = (props) => {
  let submit = (formData) => {
    props
      .createSinger(formData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        alert.error(error.message);
      });
  };
  
  return (
    <>
      <CreateSinger submit={submit} />
      <ToastContainer />
    </>
  );
};

let mapStateToProps = (state) => {
  return {};
};
export default connect(mapStateToProps, { createSinger })(
  CreateSingerContainer
);
