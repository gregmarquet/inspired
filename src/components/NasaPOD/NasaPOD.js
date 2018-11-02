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
    fetch('https://api.nasa.gov/planetary/apod?api_key=0KvJyqcBE8xlAMCw12g7oVaIOnVp9SD6bjMeavEV')
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
        {this.state.photo.media_type === 'video' 
          ? <iframe 
              title="This is a unique title"
              type="text/html"
              width="100%"
              height="600"
              src={this.state.photo.url}
              frameBorder="0">
            </iframe>
          : <img
            className="pod_image"
            src={this.state.photo.url}
            alt={this.state.photo.url} />
        }
        
        <p className="pod_image-explanation">             {this.state.photo.explanation}
        </p>
      </div>
    )
  }
}

export default NasaPOD