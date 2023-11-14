import React, { Component } from 'react';
import CounterDisplayer from './CounterDisplayer';

class MyCounter extends Component {
  constructor(props) {
    super(props);
    // Initialize state with a property named 'clicks' set to 0
    this.state = {
      clicks: 0,
    };
  }

  // Function to update or increase the state by one
  allClicksCounter = () => {
    this.setState((prevState) => ({
      clicks: prevState.clicks + 1,
    }));
  };

  render() {
    return (
      <div>
        <h1>My Counter</h1>
        {/* Render the CounterDisplayer component and pass the current click count as a prop */}
        <CounterDisplayer clicks={this.state.clicks} />
        
        {/* Button to trigger the click count update */}
        <button onClick={this.allClicksCounter}>
          Click me!
        </button>
      </div>
    );
  }
}

export default MyCounter;
