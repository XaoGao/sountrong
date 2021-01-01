import React, { useEffect } from "react";
import { initApp } from "./redux/app-reducer";
import { connect } from "react-redux";
import "./App.css";
import NavbarContainer from "./components/navbar/NavbarContainer";
import { Routes } from "./components/untils/Routes";


export const App = (props) => {
  useEffect(() => {
    props.initApp();
  }, []);
  return (
    <div className="App">
      <NavbarContainer />
      <Routes/>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized,
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps, { initApp })(App);
