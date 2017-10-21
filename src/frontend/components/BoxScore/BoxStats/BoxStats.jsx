import React from 'react';
import styled from 'styled-components';
import StatTable from './StatTable';

const StyledDiv = styled.div`
  width: 70%;
  margin: auto;
  padding-bottom: 50px;
`
const Heading = styled.p`
  font-family: 'Oswald', sans-serif;
  padding: 5px 8px;
  background: ${props => props.theme.neutralOne};
  color: #333;
  font-size: 18px;
`

const BoxStats = ({ teamAPlayers, teamBPlayers, teamAName, teamBName, plays }) => (
  <StyledDiv>
    <Heading> {teamAName} </Heading>
    <StatTable players={teamAPlayers} plays={plays} />
    <Heading> {teamBName} </Heading>
    <StatTable players={teamBPlayers} plays={plays} />
  </StyledDiv>
);

export default BoxStats;