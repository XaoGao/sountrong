import React, { useEffect } from "react";
import { initApp } from "./redux/app-reducer";
import { connect } from "react-redux";
import "./App.css";
import { Route } from "react-router-dom";
import NavbarContainer from "./components/navbar/NavbarContainer";
import Container from "@material-ui/core/Container";
import LoginContainer from "./components/auth/LoginContainer";
import SignupContainer from "./components/auth/SignupContainer";
import Home from "./components/home/Home"
import SingersContainer from "./components/singers/SingersContainer";

export const App = (props) => {
  useEffect(() => {
    props.initApp();
  }, []);
  return (
    <div className="App">
      <NavbarContainer />
      <Container>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/singers" render={() => <SingersContainer />} />
        <Route exact path="/signup" render={() => <SignupContainer />} />
        <Route exact path="/login" render={() => <LoginContainer />} />
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    // initialized: state.app.initialized,
    // isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps, { initApp })(App);
