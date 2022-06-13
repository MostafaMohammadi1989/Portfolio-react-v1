import React from "react";

const ClientItem = (props) => {
  return (
    <div className="clientitem grid grid-clientitem">
      <div className="clientitem-left">
        <div className="background">
          <img src={props.src} alt={props.alt} className="clientitem-img" />
        </div>
      </div>
      <div className="clientitem-right">
        <div className="clientitem-right-section">
          <div className="clientitem-title">
            <h3>{props.title}</h3>
          </div>
          <div className="clientitem-p">
            <p>{props.paragraph}</p>
          </div>

          <div className="clientitem-personal">
            <h4 className="name">{props.name}</h4>
            <p className="occupation">{props.occupation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientItem;
