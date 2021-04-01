import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { pageLoadAnimation } from "../animations/pageAnimations";
import events from "../images/events.jpg";
import broccoli from "../images/broccoli.jpg";
import restaurantTall from "../images/restaurant-tall.jpg";
import restaurantClose from "../images/restaurant-close.jpg";
import BottomPhotos from "../components/BottomPhotos";

const Events = () => {
  useEffect(() => {
    pageLoadAnimation(".events");
  });

  return (
    <div className="events">
      <div className="hero">
        <h1>
          Private gatherings in the purest Andalusian style, in an authentic
          eighteenth-century palace.
        </h1>
      </div>
      <div className="hero-image">
        <img src={events} alt="" />
      </div>

      <section className="events-info">
        <div className="private-rooms">
          <h2>
            Chef José Carlos García has designed various menus for groups with
            dishes that are unique to us, which can be enjoyed on both the
            Balausta terrace and in Palacio Solecio’s private rooms.
          </h2>
          <img src={broccoli} alt="" width="200" />
        </div>

        <div className="book">
          <h2>
            For more information and bookings, please contact our events
            manager.
          </h2>
          <Link className="button" to="/book">
            Book
          </Link>
        </div>
      </section>
      <BottomPhotos img1={restaurantTall} img2={restaurantClose} />
    </div>
  );
};

export default Events;
