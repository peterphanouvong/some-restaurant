import React, { useEffect } from "react";
import pdf from "../uploads/menuCocktails_Balausta.pdf";

import pears from "../images/pears.jpg";
import chef from "../images/chef.jpg";
import cocktail from "../images/cocktail.jpg";
import eggs from "../images/eggs.jpg";
import laksa from "../images/laksa.jpg";
import pastries from "../images/pastries.jpg";

import { pageLoadAnimation } from "../animations/pageAnimations";
import { Link } from "react-router-dom";
import BottomPhotos from "../components/BottomPhotos";

const Home = () => {
  useEffect(() => {
    pageLoadAnimation(".home");
  });

  return (
    <div className="home page">
      <section className="hero">
        <div className="hero-image"></div>
        <div className="hero-filter"></div>
        <h1>
          Welcome to Balausta, a gastronomic space where traditional recipes and
          devotion to the first-quality local products meet in an
          eighteenth-century former Andalusian palace.
        </h1>
      </section>
      <section className="some-info container">
        <div className="flex-block">
          <div>
            <h2>
              Our menu is a tribute to Malaga's traditional gastronomic culture,
              with an innovative twist.
            </h2>
            <a className="secondary-button" href={pdf} target="_blank">
              The Menu
            </a>
          </div>
          <img src={pastries} width="200" height="300" alt="" />
        </div>

        <div className="carousel">
          <img src={pears} alt="pears" />
        </div>

        <div className="book-a-table">
          <h2>
            A gastronomic space where locally-sourced seasonal products,
            regional wines and avant-garde cocktails take centre stage.
          </h2>
          <Link to="/book" className="button">
            Book a table
          </Link>
        </div>

        <div className="chef-block">
          <img src={chef} width="200" alt="chef" />
          <h2>
            Leading our kitchen are Michelin-starred chef José Carlos García and
            our head chef, Marcos Granados.
          </h2>
        </div>

        <div className="cocktail-block">
          <img src={cocktail} width="200" alt="" />
          <div>
            <h2>
              Tradition and originality also feature in our Cocktail Bar, with a
              selection of classic and signature cocktails. Open daily from
              12.30 pm to 12.00 am.
            </h2>
            <a href={pdf} target="_blank" className="secondary-button">
              The cocktail menu
            </a>
          </div>
        </div>
      </section>
      <BottomPhotos img1={eggs} img2={laksa} />
    </div>
  );
};

export default Home;
