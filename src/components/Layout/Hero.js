import React from "react";
import "../Layout/Hero.css";

const Hero = () => {
  return (
    <section className="hero ">
      <div className="hero-section container  grid grid-2--cols">
        <div className="hero-left-side">
          <div className="hero-left-title">
            <h1 className="hero-pro-title heading-pri">
              Providing <span className="hero-best">Best</span>
            </h1>
            <h2 className="hero-web-title heading-sec">WEB Services</h2>
          </div>
          <div className="hero-left-text">
            <p className="hero-text">
              Letter of on become he tended active enable to. Vicinity
              <span className="hero-p">
                relation sensible sociable surprise screened no up as.
              </span>
            </p>
          </div>
          <div className="hero-buttons">
            <button className="started-btn">Get Started</button>
            <button className="explore-btn">Explore</button>
          </div>
        </div>
        <div className="hero-right-side">right side</div>
      </div>
    </section>
  );
};

export default Hero;
