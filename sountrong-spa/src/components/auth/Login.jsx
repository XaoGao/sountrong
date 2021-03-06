import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { NavLink, Redirect } from "react-router-dom";

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

export const Login = (props) => {
  const [username, setUsername] = useState("xaogao");
  const [password, setPassword] = useState("password");
  const classes = useStyles();

  if (props.isAuth) {
    return <Redirect to="/" />;
  }
  
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
              className={`${classes.margin} ${classes.marginTopForField}`}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              id="password-basic"
              label="Password"
              variant="outlined"
              fullWidth={true}
              size="medium"
              className={classes.margin}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
              <Button onClick={() => props.login(username, password)}>
                Войти
              </Button>
              <Button>
                <NavLink to={"/signup"} className={classes.decorationNavLink}>
                  Зарегистрироваться
                </NavLink>
              </Button>
            </ButtonGroup>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Login;
