import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  height: 200px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: ${props => props.theme.neutralTwo};
  background: ${props => props.theme.fg};
`;

const Score = styled.h1`
  font-family: 'Oswald', sans-serif;
  display: inline-block;
`;

const TeamName = styled.h2`
  display: inline-block;
  width: 180px;
`;

const TeamScores = ({ teamAScore, teamBScore, teamAName, teamBName }) => (
  <StyledDiv>
    <TeamName> {teamAName} </TeamName>
    <Score> {teamAScore} </Score>
    <Score> {teamBScore} </Score>
    <TeamName> {teamBName} </TeamName>
  </StyledDiv>
);

export default TeamScores;