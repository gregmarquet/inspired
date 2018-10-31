import React, { Component } from 'react';

import NasaPOD from './components/NasaPOD/NasaPOD'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Inspired</h1>          
        </header>
        <div>
          <NasaPOD />
        </div>
      </div>
    );
  }
}

export default App;
