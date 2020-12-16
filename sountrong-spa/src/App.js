import "./App.css";
import { Route } from "react-router-dom";
import NavbarContainer from "./components/navbar/NavbarContainer";
import Container from "@material-ui/core/Container";
import LoginContainer from "./components/auth/LoginContainer";
import SignupContainer from "./components/auth/SignupContainer";


function App() {
  return (    
    <div className="App">
      <NavbarContainer />
      <Container>
        <Route exact path="/" render={() => <LoginContainer />} />
        <Route exact path="/signup" render={() => <SignupContainer />} />
      </Container>
    </div>  
  );
}

export default App;
