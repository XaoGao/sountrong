import "./App.css";
import { Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Container from "@material-ui/core/Container";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";


function App() {
  return (    
    <div className="App">
      <Navbar />
      <Container>
        <Route exact path="/" render={() => <Login />} />
        <Route exact path="/signup" render={() => <Signup />} />
      </Container>
    </div>  
  );
}

export default App;
