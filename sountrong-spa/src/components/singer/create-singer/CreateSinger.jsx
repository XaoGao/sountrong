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
import DateFnsUtils from '@date-io/date-fns';
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

export const CreateSinger = (props) => {
  const [name, setName] = useState("Битлс");
  const [description, setDescription] = useState("Известная группа из ливерпуля");
  const [carierStart, setCarierStart] = useState(new Date());
  const [endOfCarier, setEndOfCarier] = useState(null);

  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h4" component="h2">
          Добавить музыкальную группу
        </Typography>
        <FormControl className={classes.container} fullWidth variant="outlined">
          <TextField
            className={classes.field}
            id="standard-basic"
            label="Название группы"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            className={classes.field}
            id="outlined-multiline-static"
            label="Описание группы"
            multiline
            rows={4}
            variant="outlined"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Grid container spacing={3}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid item xs={6}>
                <DatePicker
                  views={["year"]}
                  label="Начало карьеры"
                  value={carierStart}
                  onChange={setCarierStart}
                  animateYearScrolling
                />
              </Grid>
              <Grid item xs={6}>
                <DatePicker
                  views={["year"]}
                  label="Конец карьеры"
                  value={endOfCarier}
                  onChange={setEndOfCarier}
                  animateYearScrolling
                />
              </Grid>
            </MuiPickersUtilsProvider>
          </Grid>
        </FormControl>
      </CardContent>
      <CardActions>
        <Button
          className={classes.saveButton}
          variant="contained"
          color="primary"
          startIcon={<SaveIcon />}
          onClick={() =>
            props.submit({ name, description, carierStart, endOfCarier })
          }
        >
          Добавить
        </Button>
      </CardActions>
    </Card>
  );
};
export default CreateSinger;
