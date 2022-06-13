import React from "react";
import Hero from "../Layout/Hero";
import Logos from "../Layout/Logos";
import Services from "../Layout/Services";
import Featuer from "../Layout/Featuer";
import "../Peages/Home.css";
import Clients from "../Layout/Clients";
import Pricing from "../Layout/Pricing";

const Home = () => {
  return (
    <div>
      <Hero />
      <Logos />
      <Services />
      <Featuer />
      <Clients />
      <Pricing />
    </div>
  );
};

export default Home;
