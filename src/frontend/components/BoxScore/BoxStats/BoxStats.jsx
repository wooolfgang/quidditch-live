import React from 'react';
import { string, array } from 'prop-types';
import styled from 'styled-components';
import StatTable from './StatTable';

const StyledDiv = styled.div`
  width: 70%;
  margin: auto;
  padding-bottom: 50px;
`;
const Heading = styled.p`
  padding: 5px 8px;
  color: #333;
  font-size: 18px;
  font-family: ${props => props.theme.normalFont};
  background: ${props => props.theme.neutralOne};
`;

const BoxStats = ({ teamAPlayers, teamBPlayers, teamAName, teamBName, plays }) => (
  <StyledDiv>
    <Heading> {teamAName} </Heading>
    <StatTable players={teamAPlayers} plays={plays} />
    <Heading> {teamBName} </Heading>
    <StatTable players={teamBPlayers} plays={plays} />
  </StyledDiv>
);

BoxStats.propTypes = {
  teamAPlayers: array.isRequired,
  teamBPlayers: array.isRequired,
  teamAName: string.isRequired,
  teamBName: string.isRequired,
  plays: array.isRequired
};

export default BoxStats;