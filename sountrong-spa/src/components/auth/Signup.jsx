import React from "react";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { NavLink } from "react-router-dom";
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import LockIcon from '@material-ui/icons/Lock';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  marginTopForCard: {
    marginTop: theme.spacing(15),
  },
  marginTopForField: {
    marginTop: theme.spacing(5),
  },
  boxCenter: {
    display: "flex",
  },
  decorationNavLink: {
    textDecoration: "none",
    color: "#ffffff",
  },
}));

export const Signup = () => {
  const classes = useStyles();
  return (
    <Box margin="auto" width={700}>
      <Card className={classes.marginTopForCard}>
        <CardContent>
          <form noValidate autoComplete="off">
            <Typography variant="h4" align="center">
              Войти
            </Typography>
            <TextField
              id="username-basic"
              label="Username"
              variant="outlined"
              fullWidth={true}
              size="medium"
              className={`${classes.margin}`}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <TextField
                  id="firstname-basic"
                  label="Имя"
                  variant="outlined"
                  fullWidth={true}
                  size="medium"
                  className={`${classes.margin}`}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="lastname-basic"
                  label="Фамилия"
                  variant="outlined"
                  fullWidth={true}
                  size="medium"
                  className={`${classes.margin}`}
                />
              </Grid>
            </Grid>
            <TextField
              id="password-basic"
              label="Password"
              variant="outlined"
              fullWidth={true}
              size="medium"
              className={classes.margin}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon />
                  </InputAdornment>
                ),
              }}
            />
          </form>
          <hr />
          <Grid container justify="flex-end">
            <ButtonGroup
              size="large"
              variant="contained"
              color="primary"
              aria-label="large outlined primary button group"
            >
              <Button>
                <NavLink to={"/"} className={classes.decorationNavLink}>
                  Войти в существующую учетку
                </NavLink>
              </Button>
              <Button>
                  Зарегистрироваться
              </Button>
            </ButtonGroup>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Signup;
