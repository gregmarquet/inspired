import React, { Component } from 'react';

import './NasaPOD.css'

class NasaPOD extends Component {
  constructor(props) {
    super(props)

    this.state = {
      photo: {}
    }
  }

  componentDidMount() {
    fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(results => results.json())
      .then(data  => this.setState({
        photo: data
      }))
      .then(() => console.log(this.state.photo))
  }
  
  render() {
    
    return (
      <div className="pod_container">
        <h3>{this.state.photo.title}</h3>
        <img 
          className="pod_image"
          src={this.state.photo.url} 
          alt={this.state.photo.url}/>
        <p>{this.state.photo.explanation}</p>
      </div>
    )
  }
}

export default NasaPOD