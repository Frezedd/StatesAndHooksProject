import React, { Component } from 'react'

export class Counterdisplayer extends Component {
  render() {
    return (
      <>
        <p>Click Count: {this.props.Clicks}</p>
      </>
    )
  }
}

export default Counterdisplayer
