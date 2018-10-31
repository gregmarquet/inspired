import React, { Component } from 'react';
// import { NationalGeographicAPI } from 'national-geographic-api';

import './NatGeoPOD.css'

const natgeo = require('national-geographic-api').NationalGeographicAPI;

class NatGeoPOD extends Component {
  constructor(props) {
    super(props)

    this.state = {
      photo: {}
    }
  }

  componentDidMount() {
    natgeo.getPhotoOfDay()
      .then(data => this.setState({
        photo: data.data[0].attributes.image
      }))
      .then(() => console.log(this.state.photo))
  }

  render() {

    return (
      <div className="pod_container">
        <h2 className="pod_title">National Geography Photo Of The Day</h2>
        <h3 className="pod_image-title">                  {this.state.photo.title}
        </h3>
        <img
          className="pod_image"
          src={this.state.photo.uri}
          alt={this.state.photo.alt_text} />
        <p className="pod_image-explanation">             {this.state.photo.caption}
        </p>
      </div>
    )
  }
}

export default NatGeoPOD