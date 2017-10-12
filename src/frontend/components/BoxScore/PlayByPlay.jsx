import React from 'react';

const PlayByPlay = ({ plays }) => (
  <div>
    {
      plays.map(play => <p> {play.action} by {play.player} at {play.timestamp} </p>)
    }
  </div>
);
export default PlayByPlay;