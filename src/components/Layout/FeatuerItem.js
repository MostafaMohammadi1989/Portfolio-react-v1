import React from "react";
import { Link } from "react-router-dom";

const FeatuerItem = (props) => {
  return (
    <div className="featueritem">
      <div className="featureitem-container">
        <div className="featureitem-title">{props.title}</div>
        <div className="featureitem-p">{props.text}</div>
        <div className="feautureItem-Link">
          <Link to={props.path} className="featueritem-links">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeatuerItem;
