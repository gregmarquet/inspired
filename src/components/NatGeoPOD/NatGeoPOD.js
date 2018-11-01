import React, { Component } from 'react';
// import { NationalGeographicAPI } from 'national-geographic-api';

import './NatGeoPOD.css'

const natgeo = require('national-geographic-api').NationalGeographicAPI;

class NatGeoPOD extends Component {
  constructor(props) {
    super(props)

    this.state = {
      photo: '',
      caption: '',
      title: '',
      altText: ''
    }
  }

  componentDidMount() {
    natgeo.getPhotoOfDay()
      .then((data) => {
        const photoData = data.data[0].attributes.image;
        const photo = photoData.uri
        const caption = photoData.caption;
        const title = photoData.title;
        const altText = photoData
        this.setState({
          photo,
          caption: caption.slice(3, caption.length - 5),
          title,
          altText
        })
      })
      .then(() => console.log(this.state.photo))
  }

  render() {

    return (
      <div className="pod_container">
        <h2 className="pod_title">National Geographic Photo Of The Day</h2>
        <h3 className="pod_image-title">                  {this.state.title}
        </h3>
        <img
          className="pod_image"
          src={this.state.photo}
          alt={this.state.altText} />
        <p className="pod_image-explanation">             
        { this.state.caption }
        </p>
      </div>
    )
  }
}

export default NatGeoPOD