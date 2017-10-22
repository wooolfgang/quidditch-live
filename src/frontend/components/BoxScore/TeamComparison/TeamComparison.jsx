import React from 'react';
import styled from 'styled-components';
import { getPercentage } from '../../../../utils';
import Bar from './Bar';

const StyledDiv = styled.div`
  width: 60%;
  margin: auto;
  display: flex;
  padding: 30px;
`;

const Container = styled.div`
  flex: 5;
  display: flex;
  flex-direction: column;
`;

const Middle = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;

  p {
    margin: auto;
    height: 50px; 
    font-size: 13px;
    text-align: center;
    font-family: ${props => props.theme.normalFont};

    span {
      padding: 3px;
      display: block;
    }
  }
`

const TeamComparison = ({ teamAStats, teamBStats }) => {
  const totalGM = teamAStats.goalsMade + teamBStats.goalsMade;
  const totalGA = teamAStats.goalAttemps + teamBStats.goalAttemps;
  const totalBlocks = teamAStats.blocks + teamBStats.blocks;

  return (
    <StyledDiv>
      <Container>
        <Bar width={getPercentage(teamAStats.goalsMade, totalGM)} isTeamA isHigher={teamAStats.goalsMade > teamBStats.goalsMade} />
        <Bar width={getPercentage(teamAStats.goalAttemps, totalGA)} isTeamA isHigher={teamAStats.goalAttemps > teamBStats.goalAttemps} />
        <Bar width={getPercentage(teamAStats.blocks, totalBlocks)} isTeamA isHigher isHigher={teamAStats.blocks > teamBStats.blocks} />
      </Container>
      <Middle>
        <p> GOALS MADE <span> {totalGM} </span> </p>
        <p> GOAL ATTEMPS <span> {totalGA} </span> </p>
        <p> BLOCKS <span> {totalBlocks} </span> </p>
      </Middle>
      <Container>
        <Bar width={getPercentage(teamBStats.goalsMade, totalGM)} isTeamB isHigher={teamAStats.goalsMade < teamBStats.goalsMade} />
        <Bar width={getPercentage(teamBStats.goalAttemps, totalGA)} isTeamB isHigher={teamAStats.goalAttemps < teamBStats.goalAttemps} />
        <Bar width={getPercentage(teamBStats.blocks, totalBlocks)} isTeamB isHigher={teamAStats.blocks < teamBStats.blocks} />
      </Container>
    </StyledDiv>
  )
};

export default TeamComparison;
