import React from "react";
import "./computer.style.css";
export const Computer = (props) => (
  <div className="computer">
    <p>Computer</p>
    <p>score: {props.score}</p>
    <h2>{props.computer}</h2>
    <span>{props.isWinner === "computer wins" ? props.isWinner : ""}</span>
  </div>
);
