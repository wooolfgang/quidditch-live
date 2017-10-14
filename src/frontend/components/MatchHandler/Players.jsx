import React from 'react';
import styled from 'styled-components';
import Player from './Player';

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  width: 50%;
  margin: auto;
  margin-bottom: 15px;
`;

const Players = ({ players, onPlayerSelect }) => {
  let seeker = '';
  let keeper = '';
  const chasers = [];
  const beaters = [];

  players.forEach(player => {
    if (player.type === 'SEEKER') {
      seeker = player;
    } else if (player.type === 'KEEPER') {
      keeper = player;
    } else if (player.type === 'CHASER') {
      chasers.push(player);
    } else if (player.type === 'BEATER') {
      beaters.push(player);
    }
  })

  return (
    <div>
      <Container>
        <Player
          {...seeker}
          onPlayerSelect={onPlayerSelect} />
      </Container>
      <Container>
        {
          chasers.map(chaser =>
            <Player
              {...chaser}
              onPlayerSelect={onPlayerSelect}
              key={chaser._id}
            />
          )
        }
      </Container>
      <Container>
        {
          beaters.map(beater =>
            <Player
              {...beater}
              onPlayerSelect={onPlayerSelect}
              key={beater._id}
            />
          )
        }
      </Container>
      <Container>
        <Player {...keeper} onPlayerSelect={onPlayerSelect} />
      </Container>
    </div>
  )
};

export default Players;