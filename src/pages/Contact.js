import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { pageLoadAnimation } from "../animations/pageAnimations";
import BottomPhotos from "../components/BottomPhotos";
import salmon from "../images/salmon.jpg";
import frenchToast from "../images/french-toast.jpg";
import laksa from "../images/laksa.jpg";

const Contact = () => {
  useEffect(() => {
    pageLoadAnimation(".contact");
  });

  return (
    <div className="contact">
      <div className="hero">
        <h1>Discover where the restaurant is located and how to contact us.</h1>
      </div>
      <section className="contact-info">
        <div className="maps-block">
          <div>
            <h2>
              We are located in the historic centre of Malaga, in Calle Granada
              57-59.
            </h2>
            <a
              className="secondary-button"
              href="https://www.google.com/maps"
              target="=_blank"
            >
              View in maps
            </a>
          </div>
          <img src={salmon} alt="" width="200" />
        </div>

        <div className="other-contact">
          <p>We can be contacted via email or telephone on +34 952 216 000</p>
          <p>
            Opening hours: <br />
            Open every day from 12.00 am to 12.00 am.
          </p>
          <p>
            Two hours of parking free with your reservation, in Alcazaba´s
            parking, two minutes walking from Balausta
          </p>
        </div>
      </section>
      <BottomPhotos img1={frenchToast} img2={laksa} />
    </div>
  );
};

export default Contact;
