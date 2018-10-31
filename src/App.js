import React, { Component } from 'react';
import Moment from 'react-moment';

import NasaPOD from './components/NasaPOD/NasaPOD'
import './App.css';

class App extends Component {
  render() {
    return (
      
      <div className="App">
        <header className="App-header">
          <h1>Inspired</h1>
          
          <Moment 
            className="month" 
            format='MMMM Do, YYYY' />
                      
        </header>
        <div>
          <NasaPOD />
        </div>
      </div>
    );
  }
}

export default App;
