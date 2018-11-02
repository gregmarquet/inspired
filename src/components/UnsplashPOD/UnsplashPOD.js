import React from 'react';

function Unsplash(props) {
  return (
    <div className="pod_container">
      <h2 className="pod_title">Unsplash Photo Of The Day - {props.category[0].toUpperCase() + props.category.slice(1)}</h2>
      <img
        className="pod_image"
        src={`https://source.unsplash.com/daily?${props.category}`}
        alt={props.category} />
    </div>
  )
}

export default Unsplash;