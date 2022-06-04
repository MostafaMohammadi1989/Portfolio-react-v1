import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <header>
      <div className="log">
        <Link to="/logo">Logo</Link>
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/project">Project</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <div className="loging">
        <Link to="/login">Loging</Link>
        <Link to="/singup">SignUp</Link>
      </div>
    </header>
  );
};

export default Navbar;
