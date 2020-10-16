import React from "react";
import "./footer.style.css";
export const Footer = props => (
  <div className="footer">
    <div>
      <h2>Step 1</h2>
      <p>Input a number between 0 and 9</p>
    </div>
    <div>
      <h2>Step 2</h2>
      <p>
        Click "Make a Guess" to submit your guess and see who won the round.
      </p>
    </div>
    <div>
      <h2>Step 3</h2>
      <p>Click "Next Round" to play again.</p>
    </div>
  </div>
);
