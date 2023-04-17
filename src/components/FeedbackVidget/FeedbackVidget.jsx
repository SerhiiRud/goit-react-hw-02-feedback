import { Component } from 'react';

export class FeedbackVidget extends Component {
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

  render() {
    return (
      <>
        <button type="button" onClick={this.incrementGood}>
          Good
        </button>
        <button type="button" onClick={this.incrementNeutral}>
          Neutral
        </button>
        <button type="button" onClick={this.incrementBad}>
          Bad
        </button>
        <p>Please leave feedback</p>
        <p>Statistics</p>
        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p>
        <p>Bad: {this.state.bad}</p>
      </>
    );
  }
}