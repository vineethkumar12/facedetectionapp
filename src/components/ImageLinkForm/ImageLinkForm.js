import React from "react";
import "./image.css";
export const ImageLinkForm = ({ input1, onchange, onbuttonclick }) => {
  return (
    <div className="h1">
      <p className="f3">
        {"This Magic Brain will detect faces in your pictures. Ones try it"}
      </p>
      <div className="detect">
        <div className="center he br3 shadow-3 w-40 pa3 tc h4.7">
          <input
            type="text"
            onChange={onchange}
            className="f4 w-60 ba  br2 shadow-3  "
          />
          <button
            onClick={onbuttonclick}
            className="br2 grow link  ba pv2 ph2 dib  bg-pink pointer h2 ma1"
          >
            {" "}
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};
