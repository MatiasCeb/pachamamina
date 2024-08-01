import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
