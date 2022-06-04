import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header>
      <section className="main-nav container-nav">
        <div className="nav-log">
          <Link className="logo" to="/">
            Logo
          </Link>
        </div>
        <nav>
          <div className="nav-items">
            <Link className="nav-item" to="/">
              Home
            </Link>
            <Link className="nav-item" to="/about">
              About
            </Link>
            <Link className="nav-item" to="/project">
              Project
            </Link>
            <Link className="nav-item" to="/contact">
              Contact
            </Link>
          </div>
        </nav>
        <div className="nav-login">
          <Link className="login" to="/login">
            Login
          </Link>
          <Link className="signup" to="/singup">
            SignUp
          </Link>
        </div>
      </section>
    </header>
  );
};

export default Navbar;
