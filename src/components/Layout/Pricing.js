import React from "react";
import PricingItem from "./PricingItem";
import "../Layout/Pricing.css";

const Pricing = (props) => {
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
      <div className="pricing-section container ">
        <div className="pricing-parts grid grid-3--cols">
          <PricingItem
            title="For start"
            price="$59"
            list1="Feedback Categorization"
            list2="Features prioritization"
            list3="Real-time collaboration"
            list4="Feedback loop notifications"
            list5="Essential dev tools integrations"
            btnLabel="Request Demo"
          />
          <PricingItem
            title="For Teams"
            price="$99"
            list1="Feedback Categorization"
            list2="Features prioritization"
            list3="Real-time collaboration"
            list4="Feedback loop notifications"
            list5="Essential dev tools integrations"
            btnLabel="Request Demo"
          />
          <PricingItem
            title="For Company"
            price="Custom"
            list1="Feedback Categorization"
            list2="Features prioritization"
            list3="Real-time collaboration"
            list4="Feedback loop notifications"
            list5="Essential dev tools integrations"
            btnLabel="Contact Us"
          />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
