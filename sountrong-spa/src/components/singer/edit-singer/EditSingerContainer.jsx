import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import FormSinger from "../create-singer/FormSinger";
import { updateSinger, getSinger } from "../../../redux/singers-reducer";
import { alert } from '../../untils/toast'

export const EditSingerContainer = (props) => {
  const history = useHistory();
  const [id, setId] = useState(0);

  useEffect(() => {
    let singerId = props.match.params.id;
    if (singerId) {
      setId(singerId);
      props.getSinger(singerId);
    }
  }, []);

  let submit = (formData) => {
    const fd = new FormData();
    fd.append("mainImage", formData.mainImage);
    fd.append("description", formData.description);
    fd.append("carierStart", formData.carierStart);
    fd.append("endOfCarier", formData.endOfCarier);
    fd.append("name", formData.name);

    props
      .updateSinger(id, fd)
      .then((_) => {
        alert.success(`Группа ${formData.name} изменена`);
        history.push(`/singers/${id}`);
      })
      .catch((error) => {
        alert.error(error.message);
      });
  };

  return (
    <>
      {props.isFetching ? <div>Ждите</div> : <FormSinger submit={submit} singer={props.singer}/>}
    </>
  );
};
let mapStateToProps = (state) => {
  return {
    singer: state.singers.singer,
    isFetching: state.singers.isFetching,
  };
};

export default compose(
  connect(mapStateToProps, { getSinger, updateSinger }),
  withRouter
)(EditSingerContainer);
