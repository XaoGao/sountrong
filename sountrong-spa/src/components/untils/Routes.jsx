import React from "react";
import { Route } from "react-router-dom";
import Container from "@material-ui/core/Container";
import LoginContainer from "../auth/LoginContainer";
import SignupContainer from "../auth/SignupContainer";
import Home from "../home/Home";
import SingersContainer from "../singers/SingersContainer";
import SingerContainer from "../singer/singer/SingerContainer";
import CreateSingerContainer from "../singer/create-singer/CreateSingerContainer";
import EditSingerContainer from "../singer/edit-singer/EditSingerContainer";

export const Routes = () => {
  return (
    <Container>
      <Route exact path="/" render={() => <Home />} />

      <Route exact path="/login" render={() => <LoginContainer />} />
      <Route exact path="/signup" render={() => <SignupContainer />} />

      <Route exact path="/singers" render={() => <SingersContainer />} />
      <Route exact path="/singers/:id" render={() => <SingerContainer />} />

      <Route exact path="/create-singer" render={() => <CreateSingerContainer/>} />
      <Route exact path="/edit-singer/:id" render={() => <EditSingerContainer/>} />
    </Container>
  );
};
