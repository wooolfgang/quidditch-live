import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 999px;
  display: inline-block;
  border: 1px solid gray;
  cursor: pointer;
  padding: 10px;
`
const Player = ({ name, teamId, onPlayerSelect }) => (
  <StyledDiv onClick={() => onPlayerSelect(name, teamId)}> {name} </StyledDiv>
);

export default Player;