import React from 'react';

class Evencounterdisplayer extends React.Component {
  render() {
    const {Clicks} = this.props;
    const evenClicks = Clicks - (Clicks % 2);

    return (
      <div>
        <p>Even Clicks: {evenClicks}</p>
      </div>
    );
  }
}

export default Evencounterdisplayer;
