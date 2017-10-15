import React from 'react';
import styled from 'styled-components';
import uuidv1 from 'uuid/v1';
import Play from './Play';

const StyledDiv = styled.div`
  margin: auto;
  width: 60%; 
  padding: 20px;
  height: 400px;
  overflow-y: scroll;
  font-family: 'Oswald', sans-serif;
  font-size: 14px;
`;

const PlayByPlay = ({ plays, teamAId, teamBId, matchStart }) => {
  const matchStartTimestamp = new Date(matchStart).getTime();
  return (
    <StyledDiv>
      {
        plays.slice().reverse().map(play =>
          <Play
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