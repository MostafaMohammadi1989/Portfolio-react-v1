import React from "react";
// import { Link } from "react-router-dom";
import CCO from "../img/CCO.svg";

const PricingItem = (props) => {
  return (
    <section className="pricingitem">
      <div className="pricingitem-section">
        <div className="pricingitem-title">
          <h3>{props.title}</h3>
        </div>
        <div className="pricingitem-price">
          <h2>{props.price}</h2>
        </div>
        <div className="pricingitem-list">
          <ul className="pricingitem-list-ul">
            <li className="pricingitem-list-li">
              <img src={CCO} alt="check" className="check" />
              {props.list1}
            </li>
            <li className="pricingitem-list-li">
              <img src={CCO} alt="check" className="check" />
              {props.list2}
            </li>
            <li className="pricingitem-list-li">
              <img src={CCO} alt="check" className="check" />
              {props.list3}
            </li>
            <li className="pricingitem-list-li">
              <img src={CCO} alt="check" className="check" />
              {props.list4}
            </li>
            <li className="pricingitem-list-li">
              <img src={CCO} alt="check" className="check" />
              {props.list5}
            </li>
          </ul>
        </div>
        <div>
          {/* <Link to={props.path} className="pricingitem-link"> */}
          <button className="btn-large">{props.btnLabel}</button>
          {/* </Link> */}
        </div>
      </div>
    </section>
  );
};

export default PricingItem;
