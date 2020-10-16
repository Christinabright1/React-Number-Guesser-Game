import React from "react";
import { Header } from "../header/header.component";
import { Computer } from "../computer/computer.component";
import { User } from "../user/user.component";
import { Button } from "../../button/button.component";

import "./container.style.css";

import "./container.style.css";
class Container extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      score: 0,
      target: "?",
      computer: "?",
      roundNumber: 1,
      disabled: true
    };
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value
    });
  };

  handleIncrement = () => {
    this.setState({
      value: this.state.value + 1
    });
  };
  handleDecrement = () => {
    this.setState({
      value: this.state.value - 1
    });
  };
  //Generate target number
  generateTarget = () => {
    const target = Math.floor(Math.random() * 9);
    this.setState({ target });
    return target;
  };
  //Generate computer value
  generateComputerValue = () => {
    const computer = Math.floor(Math.random() * 10);
    this.setState({
      computer
    });
    return computer;
  };

  compareGuesses = (user, computer, target) => {
    user = this.state.value;
    target = this.generateTarget();
    computer = this.generateComputerValue();

    /*console.log(target);
    console.log(computer);
    console.log(user);*/
    const userWins = Math.abs(user - target) < Math.abs(computer - target);
    const winner = userWins ? (
      <span className="winnerColor">"user wins"</span>
    ) : (
      "computer wins"
    );

    this.setState({ winner });

    //Activate the next round button
    this.setState({ disabled: false });
    return winner;
  };
  //update round number
  updateroundNumber = () => {
    this.setState({
      roundNumber: this.state.roundNumber + 1
    });

    //Disable the UserMakeGuess
  };
  render() {
    //update round number
    const updateroundNumber = () => {
      this.setState({
        roundNumber: this.state.roundNumber + 1
      });

      //Deactivate the nextRoundButton
      this.setState({
        disabled: true
      });
    };
    return (
      <div>
        <div className="container">
          <Header
            target={this.state.target}
            roundNumber={this.state.roundNumber}
          />
          <Computer
            score={this.state.score}
            winner={this.winner}
            computer={this.state.computer}
            isWinner={this.state.winner}
          />
          <User
            value={this.state.value}
            handleChange={this.handleChange}
            score={this.state.score}
            handleIncrement={this.handleIncrement}
            handleDecrement={this.handleDecrement}
            handleTarget={this.generateTagert}
            handleComputerValue={this.generateComputerValue}
            compareGuesses={this.compareGuesses}
            isWinner={this.state.winner}
            isMakeGuessActive={!this.state.disabled}
          />
        </div>
        <Button
          onClickHandler={updateroundNumber}
          disabled={this.state.disabled}
        />
      </div>
    );
  }
}

export default Container;
