import React from "react";
import PricingItem from "./PricingItem";
import "../Layout/Pricing.css";

const Pricing = () => {
  return (
    <section className="pricing">
      <div className="pricing-pragraph">
        <h2 className="pricing-title heading-tre">
          Our <span className="text-pricing">Pricing Plan</span>
        </h2>
        <p className="pricing-text">
          Letter of on become he tended active enable to. Vicinity relation
          sensible sociable
          <span className="pricing-surprise">surprise screened no up as.</span>
        </p>
      </div>
      <div className="pricing-section container gird grid-3--cols"></div>
    </section>
  );
};

export default Pricing;
