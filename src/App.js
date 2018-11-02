import React, { Component } from 'react';
import Moment from 'react-moment';

import NasaPOD from './components/NasaPOD/NasaPOD'
import NatGeoPOD from './components/NatGeoPOD/NatGeoPOD'
import UnsplashPOD from './components/UnsplashPOD/UnsplashPOD'
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
          <NatGeoPOD />
          <UnsplashPOD category='desert' />
          <UnsplashPOD category='underwater' />
          <UnsplashPOD category='cityscape' />
          <UnsplashPOD category='landscape' />
          <UnsplashPOD category='architecture' />
          <UnsplashPOD category='animals' />
        </div>
      </div>
    );
  }
}

export default App;
