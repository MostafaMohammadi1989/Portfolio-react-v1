import React from "react";
import "./Logos.css";
import Pearlfisher from "../img/Pearlfisher.png";
import Brightpearl from "../img/Brightpearl.png";
import Planday from "../img/Planday.png";
import Umbraco from "../img/Umbraco.png";

const Logos = () => {
  return (
    <section className="logos">
      <div className="logos-section  ">
        <div className="logos-items grid grid-5--cols">
          <img className="logos-img" src={Pearlfisher} alt="Logo" />
          <img className="logos-img" src={Brightpearl} alt="Logo" />
          <img className="logos-img" src={Planday} alt="Logo" />
          <img className="logos-img" src={Umbraco} alt="Logo" />
          <img className="logos-img" src={Pearlfisher} alt="Logo" />
        </div>
      </div>
    </section>
  );
};

export default Logos;
