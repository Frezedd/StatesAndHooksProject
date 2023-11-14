import React, {Component } from 'react'
import Counterdisplayer from './Counterdisplayer'
import Evencounterdisplayer from './Evencounterdisplayer'

export class Mycounter extends Component {
  constructor(){
    super();
    this.state={
      Clicks:0
    };
}
allClicksCounter =() =>{
  console.log(Mycounter);
    this.setState((updateChanges)=>
    ({Clicks:updateChanges.Clicks + 1,
    }));
};
  render() {
    return (
      <div>
        <h1>My Counter</h1>
        {/* Render the Counterdisplayer component and pass the current click count as a prop */}
        <Counterdisplayer Clicks={this.state.Clicks} />
        <Evencounterdisplayer Clicks={this.state.Clicks} />
        
        {/* Button to trigger the click count update */}
        <button onClick={this.allClicksCounter}>
          Click me!
        </button>
      </div>
    )
  }
}

export default Mycounter
