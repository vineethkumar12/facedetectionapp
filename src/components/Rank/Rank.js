import React from "react";
import "./Rank.css";

export const Rank = ({ name, entries }) => {
  return (
    <div className="Rank center" style={{}}>
      <div className="white  f3 ">
        <h1>Welcome</h1>
        <h3 style={{ textTransform: "uppercase" }}>{name} </h3>
      </div>
    </div>
  );
};
