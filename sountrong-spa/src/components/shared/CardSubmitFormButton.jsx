import React from 'react'
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";

export const CardSubmitFormButton = (props) => {
  return (
    <CardActions>
        <Button
          className={props.saveButton}
          variant="contained"
          color="primary"
          startIcon={<SaveIcon />}
          onClick={() =>
            props.submit(props.formData)
          }
        >
          {props.id ? "Обновить" : "Добавить"}
        </Button>
      </CardActions>
  )
}
export default CardSubmitFormButton;