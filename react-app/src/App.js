import React from 'react';
import logo from './logo.svg';
import './App.css';
import './css/FooterComponent.css';
import './css/NewMushroomComponent.css';
import FooterComponent from './components/FooterComponent.js';
import NewMushroomComponent from './components/NewMushroomComponent'

function App() {
  return (

    <div className="App">
      <NewMushroomComponent />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <FooterComponent />
    </div>
  );
}

export default App;
