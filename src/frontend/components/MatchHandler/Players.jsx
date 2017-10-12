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
          name={seeker.name}
          teamId={seeker.teamId}
          type='SEEKER'
          onPlayerSelect={onPlayerSelect} />
      </Container>
      <Container>
        {
          chasers.map(chaser =>
            <Player
              name={chaser.name}
              type='CHASER'
              onPlayerSelect={onPlayerSelect}
              key={chaser._id}
              teamId={chaser.teamId}
            />
          )
        }
      </Container>
      <Container>
        {
          beaters.map(beater =>
            <Player
              name={beater.name}
              type='BEATER'
              onPlayerSelect={onPlayerSelect}
              key={beater._id}
              teamId={beater.teamId}
            />
          )
        }
      </Container>
      <Container>
        <Player name={keeper.name} type='KEEPER' onPlayerSelect={onPlayerSelect} />
      </Container>
    </div>
  )
};

export default Players;