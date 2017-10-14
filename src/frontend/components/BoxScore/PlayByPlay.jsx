import React from 'react';
import styled from 'styled-components';
import Avatar from '../Avatar';

const StyledDiv = styled.div`
  margin: auto;
  width: 60%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  height: 400px;
  overflow-y: scroll;
  font-family: 'Oswald', sans-serif;
  font-size: 14px;
`;

const Play = styled.div`
  ${props => props.isTeamA && 'align-self: flex-end;'};
  ${props => props.isTeamB && 'align-self: flex-start;'};
  margin: 0px;
  height: 80px;
`;

const PlayByPlay = ({ plays, teamAId, teamBId }) => (
  <StyledDiv>
    {
      plays.map(play =>
        <Play
          isTeamA={teamAId === play.teamId}
          isTeamB={teamBId === play.teamId}
        >
          <Avatar imageUrl={`https://api.adorable.io/avatars/60/${play.playerId}`} />
          <span>{play.action} at {play.timestamp} </span>
        </Play>
      )
    }
  </StyledDiv>
);
export default PlayByPlay;