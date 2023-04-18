import { Component } from 'react';
import { VidgetContainer, Header, Controls } from './App.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  incrementGood = () => {
    this.setState(prevState => ({ good: prevState.good + 1 }));
  };

  incrementNeutral = () => {
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  };

  incrementBad = () => {
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, num) => acc + num, 0);
  };

  countPositiveFeedbackPercentage = () => {
    //return;
    //this.countTotalFeedback();
    //this.state.good * 100
    return Math.round((this.state.good * 100) / this.countTotalFeedback()) || 0;
  };

  render() {
    return (
      <VidgetContainer>
        <Header>Please leave feedback</Header>
        <Controls>
          <button type="button" onClick={this.incrementGood}>
            Good
          </button>
          <button type="button" onClick={this.incrementNeutral}>
            Neutral
          </button>
          <button type="button" onClick={this.incrementBad}>
            Bad
          </button>
        </Controls>
        <Header>Statistics</Header>
        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p>
        <p>Bad: {this.state.bad}</p>
        <p>Total: {this.countTotalFeedback()}</p>
        <p>Positive feedback: {this.countPositiveFeedbackPercentage()}%</p>
      </VidgetContainer>
    );
  }
}
