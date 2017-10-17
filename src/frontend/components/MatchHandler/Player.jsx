import React from 'react';
import styled from 'styled-components';
import Avatar from '../Avatar';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  cursor: pointer;
  border-radius: 8px;
  background: ${props => props.chosen && props.theme.bg};
  border-radius: ${props => props.chosen && '0px'};
  color: ${props => props.chosen && 'white'};

  span {
    font-size: 10px;
  }
`
const Player = ({ name, teamId, _id, onPlayerSelect, chosen, type }) => (
  <StyledDiv onClick={() => { onPlayerSelect && onPlayerSelect(name, _id, teamId) }} chosen={chosen}>
    <Avatar width="60px" imageUrl={`https://api.adorable.io/avatars/60/${_id}`} />
    <span> {name} </span>
    <span> {type} </span>
  </StyledDiv>
);

export default Player;