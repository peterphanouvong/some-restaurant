import React from "react";

const BottomPhotos = ({ img1, img2 }) => {
  return (
    <div className="bottom-photos">
      <img className="img1" src={img1} alt="" width="200" />
      <img className="img2" src={img2} alt="" width="200" />
    </div>
  );
};

export default BottomPhotos;
