import React from "react";
import ServiceItem from "./ServiceItem";
import "./Services.css";
import Development from "../img/Development.png";
import Managment from "../img/Managment.png";
import Designing from "../img/Designing.png";
import Search from "../img/Search.png";

const Services = (props) => {
  return (
    <section className="services">
      <div className="services-section container">
        <div className="services-pragraph">
          <h2 className="services-title heading-tre">
            Best <span className="text-service">Services</span>
          </h2>
          <p className="services-text">
            Letter of on become he tended active enable to. Vicinity relation
            sensible sociable
            <span className="services-surprise">
              surprise screened no up as.
            </span>
          </p>
        </div>

        <div className="services-photo grid grid-2--cols">
          <div className="services-left-silde">
            <div className="develop">
              <ServiceItem
                src={Development}
                alt="A photo about coding program"
                path="/project"
                label="Web Development"
              />
            </div>
            <div className="managment">
              <ServiceItem
                src={Managment}
                alt="A photo about coding program"
                path="/project"
                label="Managment"
              />
            </div>
          </div>
          <div className="services-right-silde">
            <div className="designing">
              <ServiceItem
                src={Designing}
                alt="A photo about coding program"
                path="/project"
                label="Designing"
              />
            </div>
            <div className="search">
              <ServiceItem
                src={Search}
                alt="A photo about coding program"
                path="/project"
                label="SEO"
              />
            </div>
          </div>
        </div>
        <div className="services-btn">
          <button className="btn-medium">Explore All</button>
        </div>
      </div>
    </section>
  );
};

export default Services;
