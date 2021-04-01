import React, { useEffect, useState } from "react";
import pdf from "../uploads/menuCocktails_Balausta.pdf";

// Components
import { ReactComponent as Cross } from "../images/cross.svg";
import { ReactComponent as Hamburger } from "../images/hamburger.svg";
import { Link } from "react-router-dom";

// Animations
import {
  closeMenuAnimation,
  openMenuAnimation,
} from "../animations/menuAnimations";

const Header = () => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollDown, setScrollDown] = useState(true);

  const handleCloseMenu = () => {
    console.log("close menu");
    closeMenuAnimation();
  };

  const handleOpenMenu = () => {
    console.log("open menu");
    openMenuAnimation();
  };

  useEffect(() => {
    function logit() {
      setScrollY(window.pageYOffset);

      if (window.pageYOffset >= scrollY) {
        setScrollDown(true);
      } else {
        setScrollDown(false);
      }
    }
    function watchScroll() {
      window.addEventListener("scroll", logit);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", logit);
    };
  }, [scrollY]);

  return (
    <div
      className="header"
      style={
        scrollY === 0
          ? {
              background: "transparent",
              transform: `translate3d(0px, 0px, 0px)`,
            }
          : {
              background: "#03110f",
              transform: scrollDown
                ? `translate3d(0px, -120px, 0px)`
                : `translate3d(0px, 0px, 0px)`,
            }
      }
    >
      <div className="icon">
        <Cross className="cross" onClick={handleCloseMenu} />
        <Hamburger className="hamburger" onClick={handleOpenMenu} />
      </div>

      <Link to="book" className="button">
        Book
      </Link>
    </div>
  );
};

export default Header;
