import React from "react";
import Tilt from "react-tilt";
import "./Logo.css";
import brain from "./brain.png";

export const Logo = () => {
  return (
    <div className=" Logo ma4 mt0">
      <Tilt
        className="Tilt br3 ba shadow-2 grab"
        options={{ max: 55 }}
        style={{ height: 250, width: 250 }}
      >
        <div className="Tilt-inner pa5">
          <img className=" bg shadow-3 br2 ba" src={brain} alt="noimage" />
          <h2>Welcome</h2>
        </div>
      </Tilt>
    </div>
  );
};
