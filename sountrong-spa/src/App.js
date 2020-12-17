import React, { useEffect } from "react";
import { initApp } from "./redux/app-reducer";
import { connect } from "react-redux";
import "./App.css";
import { Route } from "react-router-dom";
import NavbarContainer from "./components/navbar/NavbarContainer";
import Container from "@material-ui/core/Container";
import LoginContainer from "./components/auth/LoginContainer";
import SignupContainer from "./components/auth/SignupContainer";

export const App = (props) => {
  useEffect(() => {
    props.initApp();
  }, []);
  return (
    <div className="App">
      <NavbarContainer />
      <Container>
        <Route exact path="/" render={() => <LoginContainer />} />
        <Route exact path="/signup" render={() => <SignupContainer />} />
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
