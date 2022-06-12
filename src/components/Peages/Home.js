import React from "react";
import Hero from "../Layout/Hero";
import Logos from "../Layout/Logos";
import Services from "../Layout/Services";
import Featuer from "../Layout/Featuer";
import "../Peages/Home.css";

const Home = () => {
  return (
    <div>
      <Hero />
      <Logos />
      <Services />
      <Featuer />
    </div>
  );
};

export default Home;
