import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import pdf from "../uploads/menuCocktails_Balausta.pdf";

import cocktailbar from "../images/cocktail-bar.jpg";
import jager from "../images/jager.jpg";
import cocktailTall from "../images/cocktail-tall.jpg";
import cocktailSide from "../images/cocktail-side.jpg";

import { pageLoadAnimation } from "../animations/pageAnimations";
import BottomPhotos from "../components/BottomPhotos";

const CocktailBar = () => {
  useEffect(() => {
    pageLoadAnimation(".cocktail-bar");
  });

  return (
    <div className="cocktail-bar">
      <div className="hero">
        <h1>
          Sweet, spicy, light or refreshing. There is a cocktail for every
          moment of the day and every taste. Discover yours.
        </h1>
      </div>
      <div className="hero-image">
        <img src={cocktailbar} alt="" />
      </div>

      <section className="cocktail-bar-info container">
        <div className="cocktail-menu">
          <h2>
            Our cocktail bar offers a complete selection of drinks, from
            universal cocktails to new recipes designed by our bartender, for
            those looking for new flavours.
          </h2>
          <a className="button" href={pdf} target="_blank">
            The cocktail menu
          </a>
        </div>
        <div className="carousel">
          <img src={jager} alt="" />
        </div>

        <div className="last-line">
          <h2>
            We have cocktails for every occasion: restorative, with proteins and
            vitamins to complete your breakfast; an aperitif to thirst the
            appetite; digestive, right after lunch; and invigorating, to vivify
            you at the end of the day.
          </h2>
        </div>
      </section>
      <BottomPhotos img1={cocktailTall} img2={cocktailSide} />
    </div>
  );
};

export default CocktailBar;
