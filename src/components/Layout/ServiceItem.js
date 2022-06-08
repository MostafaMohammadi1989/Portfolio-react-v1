import React from "react";
import { Link } from "react-router-dom";

const ServiceItem = (props) => {
  return (
    <>
      <div className="service-item">
        <Link className="service-item-link" to={props.path}>
          <figure className="service-item-pic" data-category={props.label}>
            <img src={props.src} alt={props.alt} className="service-item-img" />
          </figure>
        </Link>
      </div>
    </>
  );
};

export default ServiceItem;
