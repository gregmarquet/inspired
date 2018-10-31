import React, { Component } from 'react';

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
      <div>
        <img src={this.state.photo.url} alt="photo"/>
      </div>
    )
  }
}

export default NasaPOD