import React from "react";

const ClientItem = (props) => {
  return (
    <div className="clientitem grid grid-clientitem">
      <div className="clientitem-left">
        <span className="background">
          <img src={props.src} alt={props.alt} className="clientitem-img" />
        </span>
      </div>
      <div className="clientitem-right">
        <div className="clientitem-title">{props.title}</div>
        <div className="clientitem-p">{props.paragraph}</div>

        <div className="clientitem-personal">
          <h4 className="name">{props.name}</h4>
          <p className="occupation">{props.occupation}</p>
        </div>
      </div>
    </div>
  );
};

export default ClientItem;
