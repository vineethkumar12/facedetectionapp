import React from "react";
import "./Face.css";

export const Face = ({ image, box }) => {
  console.log(box);
  return (
    <div className="center1 ">
      <div className=" absolute mt2">
        <img id="input-image" className="image w6 " src={image} alt="" />
        <div
          className="bounding-box"
          style={{
            top: box.topRow,
            left: box.leftCol,
            right: box.rightCol,
            bottom: box.bottomRow,
          }}
        ></div>
      </div>
    </div>
  );
};
