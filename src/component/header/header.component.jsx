import React from "react";
import "./header.style.css";
export const Header = (props) => (
  <div className="header">
    <h1>Round {props.roundNumber}</h1>
    <p>Target Number: {props.target} </p>
  </div>
);
