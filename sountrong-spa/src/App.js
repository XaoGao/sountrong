import './App.css';
import Navbar from './components/navbar/Navbar';
import Container from '@material-ui/core/Container';
import Login from './components/auth/Login';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container>
        <Login/>
      </Container>
    </div>
  );
}

export default App;
