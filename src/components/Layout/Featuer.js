import React from "react";
import FeatuerItem from "../Layout/FeatuerItem";
import "../Layout/Feature.css";

const Feature = () => {
  return (
    <section className="feature">
      <div className="featuer-pragraph">
        <h2 className="featuer-title heading-tre">
          Our <span className="text-featuer">Featuer</span>
        </h2>
        <p className="featuer-text">
          Letter of on become he tended active enable to. Vicinity relation
          sensible sociable
          <span className="featuer-surprise">surprise screened no up as.</span>
        </p>
      </div>
      <div className="feature-section container grid grid-4--cols">
        <FeatuerItem
          title="Work Load"
          text="Outward clothes promise at gravity do excited. Sufficient particular impossible by reasonable oh expression is. Yet preference connection unpleasant yet melancholy but end appearance."
          path="/project"
        />
        <FeatuerItem
          title="Time Tracking"
          text="Outward clothes promise at gravity do excited. Sufficient particular impossible by reasonable oh expression is. Yet preference connection unpleasant yet melancholy but end appearance."
          path="/project"
        />
        <FeatuerItem
          title="Collaborations"
          text="Outward clothes promise at gravity do excited. Sufficient particular impossible by reasonable oh expression is. Yet preference connection unpleasant yet melancholy but end appearance."
          path="/project"
        />
        <FeatuerItem
          title="Work Load"
          text="Outward clothes promise at gravity do excited. Sufficient particular impossible by reasonable oh expression is. Yet preference connection unpleasant yet melancholy but end appearance."
          path="/project"
        />
      </div>
      <div className="featuer-btn">
        <button className="btn-medium featuer-btns">Explore All</button>
      </div>
    </section>
  );
};

export default Feature;
