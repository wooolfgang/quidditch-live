import React from 'react';
import { array, string, func } from 'prop-types';
import styled from 'styled-components';
import Player from './Player';
import * as playTypes from '../../constants/PlayTypes';

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  width: 50%;
  margin: auto;
  margin-bottom: 10px;
`;

const Players = ({ players, onPlayerSelect, currentPlayer, currentAction }) => {
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
        {
          (currentAction === playTypes.SNITCH_CAUGHT || !currentAction) &&
          <Player
            {...seeker}
            onPlayerSelect={currentAction && onPlayerSelect}
            chosen={seeker._id === currentPlayer}
          />
        }
      </Container>
      <Container>
        {(currentAction === playTypes.GOAL_MADE || currentAction === playTypes.GOAL_MISSED || !currentAction) &&
          chasers.map(chaser =>
            <Player
              {...chaser}
              onPlayerSelect={currentAction && onPlayerSelect}
              key={chaser._id}
              chosen={chaser._id === currentPlayer}
            />
          )
        }
      </Container>
      <Container>
        {
          (currentAction === playTypes.CHASER_BEAT || !currentAction) &&
          beaters.map(beater =>
            <Player
              {...beater}
              onPlayerSelect={currentAction && onPlayerSelect}
              key={beater._id}
              chosen={beater._id === currentPlayer}
            />
          )
        }
      </Container>
      <Container>
        {
          (currentAction === playTypes.GOAL_BLOCKED || !currentAction) &&
          <Player
            {...keeper}
            onPlayerSelect={currentAction && onPlayerSelect}
            chosen={keeper._id === currentPlayer}
          />
        }
      </Container>
    </div>
  )
};

Players.propTypes = {
  players: array.isRequired,
  onPlayerSelect: func,
  currentPlayer: string,
  currentAction: string,
};

export default Players;