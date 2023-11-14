import React, { Component } from 'react';

class CounterDisplayer extends Component {
  render() {
    return (
      <div>
        <p>Click Count: {this.props.clicks}</p>
      </div>
    );
  }
}

export default CounterDisplayer;

