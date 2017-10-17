import React from 'react';
import styled from 'styled-components';
import uuidv1 from 'uuid/v1';
import PlayRow from './PlayRow';

const StyledDiv = styled.div`
  margin: auto;
  width: 60%; 
  padding: 20px;
  height: 400px;
  overflow-y: scroll;
  font-family: 'Oswald', sans-serif;
  font-size: 14px;
  margin-bottom: 20px;
  height: ${props => props.height && props.height};
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

export default PlayByPlay;