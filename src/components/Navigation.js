import React from "react";
import { Link } from "react-router-dom";
import image from "../images/food1.jpg";
import { closeMenuAnimation } from "../animations/menuAnimations";

const Navigation = () => {
  const handleCloseMenu = () => {
    closeMenuAnimation();
  };

  return (
    <div className="navigation">
      <div className="content">
        <img src={image} height="700" alt="" />
        <ul>
          <li>
            <Link onClick={handleCloseMenu} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link onClick={handleCloseMenu} to="/restaurant">
              Restaurant
            </Link>
          </li>
          <li>
            <Link onClick={handleCloseMenu} to="/cocktail-bar">
              Cocktail Bar
            </Link>
          </li>
          <li>
            <Link onClick={handleCloseMenu} to="/events">
              Events
            </Link>
          </li>
          <li>
            <Link onClick={handleCloseMenu} to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
