import React, { useEffect } from "react";
import { connect } from "react-redux";
import FormSinger from "./FormSinger";
import { createSinger, purgeSinger } from "../../../redux/singers-reducer";
import { alert } from '../../untils/toast'
import { useHistory } from "react-router-dom";

export const CreateSingerContainer = (props) => {
  const history = useHistory();

  useEffect(() => {
    props.purgeSinger();
  }, []);


  let submit = (formData) => {
    const fd = new FormData();
    fd.append('mainImage', formData.mainImage);
    fd.append('description', formData.description);
    fd.append('carierStart', formData.carierStart);
    fd.append('endOfCarier', formData.endOfCarier);
    fd.append('name', formData.name);

    props
      .createSinger(fd)
      .then((response) => {
        alert.success(`Успешно добавлена группа ${formData.name}`);
        history.push(`/singers/${response.data.singer.data.id}`);
      })
      .catch((error) => {
        alert.error(error.message);
      });
  };
  
  return (
    <>
      <FormSinger submit={submit} singer={props.singer}/>
    </>
  );
};

let mapStateToProps = (state) => {
  return {
    singer: state.singers.singer
  };
};
export default connect(mapStateToProps, { createSinger, purgeSinger })(
  CreateSingerContainer
);
