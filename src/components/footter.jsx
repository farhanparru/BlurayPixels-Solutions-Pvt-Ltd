// Footer.js
import React from "react";
import './asstes/styles/footter.css'

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section company">
          <h2>BlueRay Pixels Solutions Pvt Ltd</h2>
          <p>
            <span className="footer-icon">📧</span> BlueRayPixels65@gmail.com
          </p>
          <p>
            <span className="footer-icon">📞</span> +91 9072937703
          </p>
        </div>

        <div className="footer-section links">
          <h3>Useful Links</h3>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#home">Home</a></li>
          </ul>
        </div>

        <div className="footer-section services">
          <h3>Services</h3>
          <ul>
            <li>Temp Settings</li>
            <li>Permanent Staffing</li>
            <li>HR Consulting</li>
            <li>Business Consulting</li>
          </ul>
        </div>

        <div className="footer-section social">
          <h3>Follow</h3>
          <div className="social-icons">
            <a href="#linkedin">🔗</a>
            <a href="#facebook">📘</a>
            <a href="#instagram">📸</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          Copyright © BlueRay Pixels Solutions Pvt Ltd 2024. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
