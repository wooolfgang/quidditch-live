import React from 'react';
import { array, string, number } from 'prop-types';
import styled from 'styled-components';
import uuidv1 from 'uuid/v1';
import PlayRow from './PlayRow';

const StyledDiv = styled.div`
  margin: auto;
  width: 60%; 
  padding: 20px;
  height: 400px;
  overflow-y: scroll;
  font-size: 14px;
  margin-bottom: 20px;
  height: ${props => props.height && props.height};
  font-family: ${props => props.theme.normalFont};
`;

const PlayByPlay = ({ plays, teamAId, teamBId, matchStart, height }) => {
  const matchStartTimestamp = new Date(matchStart).getTime();
  return (
    <StyledDiv height={height}>
      {
        plays.slice().reverse().map(play =>
          <PlayRow
            {...play}
            key={uuidv1()}
            isTeamA={teamAId === play.teamId}
            isTeamB={teamBId === play.teamId}
            matchStartTimestamp={matchStartTimestamp}
          />
        )
      }
    </StyledDiv>
  )
};

PlayByPlay.propTypes = {
  plays: array.isRequired,
  teamAId: string.isRequired,
  teamBId: string.isRequired,
  matchStart: string.isRequired,
  height: string,
};

export default PlayByPlay;