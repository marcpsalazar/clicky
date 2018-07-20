import React from "react";
import "./ImageCard.css";

const ImageCard = props => (
  <div
    className ="card"
    value={props.id}
    onClick={props.clickCard}>
    <div className ="card-img">
    <img alt={props.alt}
    src={props.image} />
    </div>
  </div>
);

export default ImageCard
