import React, { useEffect } from "react";
import pdf from "../uploads/menuCocktails_Balausta.pdf";

import restaurant from "../images/restaurant.jpg";
import food from "../images/food2.jpg";
import frenchToast from "../images/french-toast.jpg";
import restaurantClose from "../images/restaurant-close.jpg";

import { Link } from "react-router-dom";
import { pageLoadAnimation } from "../animations/pageAnimations";
import BottomPhotos from "../components/BottomPhotos";

const Restaurant = () => {
  useEffect(() => {
    pageLoadAnimation(".restaurant");
  });
  return (
    <div className="restaurant">
      <div className="hero">
        <h1>
          At Balausta restaurant we offer a varied menu of appetisers, lunches
          and dinners, available every day from 12.00 pm to 11.00 pm.
        </h1>
      </div>
      <div className="hero-image">
        <img src={restaurant} alt="" />
      </div>
      <section className="container restaurant-info">
        <div className="book">
          <h2>
            Our menu values our gastronomic culture while adding a contemporary
            twist, with quintessential Andalusian dishes such as Malaga salad or
            Gazpachuelo.
          </h2>
          <Link className="button" to="/book">
            Book
          </Link>
        </div>

        <div className="carousel">
          <img src={food} alt="" />
        </div>

        <div className="menus">
          <h2>
            A commitment to Malaga's contemporary culture, with the stamp of
            quality from Michelin-starred chef José Carlos García, who also
            holds two Sol Repsol awards.
          </h2>
          <div className="menu-links">
            <a className="secondary-button" target="_blank" href={pdf}>
              The Menu
            </a>
            <a className="secondary-button" target="_blank" href={pdf}>
              Tasting Menu
            </a>
          </div>
        </div>

        <div className="cocktail-menu">
          <h2>
            Our Cocktail Bar boasts a varied menu, from well-known drinks to our
            barman’s new creations for those seeking new flavours.
          </h2>
          <a className="secondary-button" target="_blank" href={pdf}>
            The cocktail menu
          </a>
        </div>
      </section>

      <BottomPhotos img1={frenchToast} img2={restaurantClose} />
    </div>
  );
};

export default Restaurant;
