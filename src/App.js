import React, { Component } from 'react';
import Header from "./components/Header";
import ImageCard from "./components/ImageCard";
import Jumbotron from "./components/Jumbotron";
import MainContainer from "./components/MainContainer";
import cards from "./cards.json";
import "./App.css";

class App extends Component {

  state = {
    cards,
    score: 0,
    highscore: 0,
  };


lose = () => {
  if (this.state.score > this.state.highscore) {
    this.setState({highscore: this.state.score});
  }
  this.state.cards.forEach(card => {
    card.clicked = false;
  })
  alert("IT'S ALL OVER!");
  this.setState({score: 0});
  return true;
}

clickCard = id => {
   if(this.state.clicked === false) {
        this.setState({clicked: true});
        this.setState({score: this.state.score +1})
        this.state.cards.sort(() => Math.random() - 0.5)
      return true;
    } else {
      this.lose();
    }
  }

  render() {
    return (
      <MainContainer>
        <Header score ={this.state.score} highscore ={this.state.highscore}></Header>
        <Jumbotron />
        {this.state.cards.map(card => (
          <ImageCard
            id={card.id}
            key={card.id}
            image={card.image}
            clicked={this.clickCard}
          />
      ))}
      </MainContainer>
    );
  }
}

export default App;
