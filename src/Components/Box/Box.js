import React from "react";
import "./Box.css";

const Box = ({ title, desc, src, onClickBox }) => {
  return (
    <div className="local-box" onClick={onClickBox}>
      <div className="img-wrapper">
        <img src={src} />
      </div>
      <div className="details">
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Box;
