import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="logo">LOGO</div>
      <div className="nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/restaurant">Restaurant </Link>
          </li>
          <li>
            <Link to="/cocktail-bar">Cocktail Bar</Link>
          </li>
          <li>
            <Link to="/events"> Events</Link>
          </li>
          <li>
            <Link to="/contact"> Contact</Link>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="socials">Socials</div>
        <div className="policy">policy-policy-policy</div>
        <div className="number">56789876</div>
      </div>
    </div>
  );
};

export default Footer;
