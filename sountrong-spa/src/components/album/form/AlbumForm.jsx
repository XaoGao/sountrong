import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import SaveIcon from "@material-ui/icons/Save";
import CardSubmitFormButton from "../../shared/CardSubmitFormButton";
import DateFnsUtils from "@date-io/date-fns";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    marginTop: 50,
  },
  field: {
    marginTop: 30,
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 300,
  },
  saveButton: {
    float: "right",
  },
}));

export const AlbumForm = (props) => {
  const [title, setTitle] = useState(props.title);
  const [description, setDescription] = useState(props.description);
  const [yearOfIssue, setYearOfIssue] = useState(props.yearOfIssue);
  const [language, setLanguage] = useState(props.language);
  const [country, setCountry] = useState(props.country);
  const [duration, setDuration] = useState(props.duration);

  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h4" component="h2">
          {props.album.id ? "Обновить альбом" : "Добавить альбом"}
        </Typography>
        <FormControl className={classes.container} fullWidth variant="outlined">
          <TextField
            className={classes.field}
            id="standard-basic"
            label="Название альбома"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            className={classes.field}
            id="outlined-multiline-static"
            label="Описание альбома"
            multiline
            rows={4}
            variant="outlined"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DatePicker
              views={["year"]}
              label="Год выпуска альбома"
              value={yearOfIssue}
              onChange={setНearOfIssue}
              animateYearScrolling
            />
          </MuiPickersUtilsProvider>
        </FormControl>
      </CardContent>
      <CardSubmitFormButton
        saveButton={classes.saveButton}
        id={props.album.id}
        submit={props.submit}
      />
    </Card>
  );
};
