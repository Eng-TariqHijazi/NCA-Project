import React from "react";
import "./Head.css";
export const Head = ({ title, text }) => {
  return (
    <div className="head-img">
      <div className="head-color">
        <div className="container">
          <b>{title}</b>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};
