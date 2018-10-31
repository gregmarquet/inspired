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
        <h2 className="pod_title">Nasa Photo Of The Day</h2>
        <h3 className="pod_image-title">                  {this.state.photo.title}
        </h3>
        <img 
          className="pod_image"
          src={this.state.photo.url} 
          alt={this.state.photo.url}/>
        <p className="pod_image-explanation">             {this.state.photo.explanation}
        </p>
      </div>
    )
  }
}

export default NasaPOD