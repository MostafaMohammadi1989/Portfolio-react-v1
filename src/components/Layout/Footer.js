import React from "react";
import "../Layout/Footer.css";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer-section container">
        <div className="footer-title">
          <p className="footer-paragraph">
            People who are <span>ready took these courses!</span>
          </p>
          <button className="btn-medium-2">Schedule demo</button>
        </div>
        <div className="footer-links  grid footer-grid">
          <div className="footer-payment">
            <h3 className="payment-title">PayMe</h3>
            <p className="payment-text">
              Crechterwoord K12 182 DK
              <span>Alknjkcb, All Rights Reserved</span>
            </p>
          </div>
          <div className="footer-link">
            <h3 className="link-title">Links</h3>
            <ul className="link-items">
              <li className="link-item">Overons</li>
              <li className="link-item">Social Media</li>
              <li className="link-item">Counters</li>
              <li className="link-item">Contact</li>
            </ul>
          </div>
          <div className="footer-company">
            <h3 className="link-title">Company</h3>
            <ul className="link-items">
              <li className="link-item">Terms & Conditions</li>
              <li className="link-item">Privacy Policy</li>
              <li className="link-item">Contact</li>
            </ul>
          </div>
          <div className="footer-touch">
            <h3 className="link-title">Get in touch</h3>
            <ul className="link-items">
              <li className="link-item">Crechterwoord K12 182</li>
              <li className="link-item">085-132567</li>
              <li className="link-item">info@payme.net</li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          <p>© 2021 Payme. All rights reserved</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
