import React from "react";
import "../Layout/Clients.css";
import ClientItem from "./ClientItem";
import Portrait from "../img/Portrait.png";

const Clients = () => {
  return (
    <section className="client">
      <div className="client-pragraph">
        <h2 className="client-title heading-tre">
          What <span className="text-client">Client</span> Say
        </h2>
        <p className="client-text">
          Letter of on become he tended active enable to. Vicinity relation
          sensible sociable
          <span className="client-surprise">surprise screened no up as.</span>
        </p>
      </div>
      <div className="client-section container">
        <ClientItem
          src={Portrait}
          alt="A portrait phote a man"
          title="Best Developers"
          paragraph="Outward clothes promise at gravity do excited. Sufficient particular impossible by reasonable oh expression is. Yet preference connection unpleasant yet melancholy but end appearance. And excellence partiality estimating terminated day everything."
          name="Robert Johnson"
          occupation="Director at Behance"
        />
      </div>
    </section>
  );
};

export default Clients;
