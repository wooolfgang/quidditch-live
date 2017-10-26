import React from 'react';
import { number, string } from 'prop-types';
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
  display: inline-block;
  color: #FAFAFA;
  padding: 3px 11.5px;
  border-radius: 999px;
  min-width: 35px;
  text-align: center;
  font-family: ${props => props.theme.serifFont};
  border: 2px solid ${props => props.theme.neutralThree};
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

TeamScores.propTypes = {
  teamAScore: number.isRequired,
  teamBScore: number.isRequired,
  teamAName: string.isRequired,
  teamBName: string.isRequired,
};

export default TeamScores;