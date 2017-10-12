import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  height: 200px;
  width: 100%;
  background: #FAFAFA;
`

const Score = ({ teamAScore, teamBScore, teamAName, teamBName }) => (
  <StyledDiv>
    <p> {teamAScore} </p>
    <p> {teamBScore} </p>
    <p> {teamAName} </p>
    <p> {teamBName} </p>
  </StyledDiv>
);

export default Score;