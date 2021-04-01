import React, { useEffect } from "react";
import { pageLoadAnimation } from "../animations/pageAnimations";

const Book = () => {
  useEffect(() => {
    pageLoadAnimation(".book-page");
  });

  return (
    <div className="book-page">
      <h2>We can't do any bookings at the moment...</h2>
    </div>
  );
};

export default Book;
