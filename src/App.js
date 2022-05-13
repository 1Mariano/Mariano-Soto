import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Coderhouse</h1>
        <p>
          Curso React js. 
        </p>
        <a
          className="App-link"
          href="https://www.coderhouse.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ir a Coderhouse
        </a>
      </header>
    </div>
  );
}

export default App;
