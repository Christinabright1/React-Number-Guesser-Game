import React from "react";
import "./user.style.css";
export const User = (props) => (
  <div className="user">
    <p>You</p>
    <p>score: {props.score}</p>
    <input
      type="number"
      className="displayUserNumber"
      value={props.value}
      onChange={props.handleChange}
    />
    <br />
    <button className="button button1">-</button>
    <button className="button button2" onClick={props.handleIncrement}>
      +
    </button>
    <br />
    <button
      className="makeGuess"
      onClick={props.compareGuesses}
      disabled={props.isMakeGuessActive}
    >
      Make a Guess
    </button>
    <span>{props.isWinner === "user wins" ? props.isWinner : ""}</span>
  </div>
);
