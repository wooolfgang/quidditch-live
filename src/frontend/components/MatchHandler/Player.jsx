import React from 'react';
import styled from 'styled-components';
import Avatar from '../Avatar';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  cursor: pointer;

  span {
    font-size: 10px;
  }
`
const Player = ({ name, teamId, _id, onPlayerSelect }) => (
  <StyledDiv onClick={() => onPlayerSelect(name, _id, teamId)}>
    <Avatar imageUrl={`https://api.adorable.io/avatars/60/${_id}`} />
    <span> {name} </span>
  </StyledDiv>
);

export default Player;