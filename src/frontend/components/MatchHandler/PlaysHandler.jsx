import React from 'react';
import styled from 'styled-components';
import * as playTypes from '../../constants/PlayTypes';

const Heading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  h3 {
    width: 150px;
  }
`

const PlaysContainer = styled.div`
  text-align: center;

  p {
    border: 1px solid gray;
    cursor: pointer;
  }
`

const Button = styled.button`
  width: 100%;
  border: none;
  background: ${props => props.theme.fg};
  padding: 10px;
  color: white;
  cursor: pointer;
`

const PlaysHandler = ({ teamA, teamB, match, onActionSelect, submitPlay }) => (
  <div>
    <Heading>
      <h3>{teamA.name} </h3>
      VS
    <h3>{teamB.name} </h3>
    </Heading>
    <PlaysContainer>
      <p onClick={() => onActionSelect(playTypes.GOAL_MADE)}> {playTypes.GOAL_MADE} </p>
      <p onClick={() => onActionSelect(playTypes.GOAL_MISSED)}> {playTypes.GOAL_MISSED} </p>
      <p onClick={() => onActionSelect(playTypes.GOAL_BLOCKED)}> {playTypes.GOAL_BLOCKED} </p>
      <p onClick={() => onActionSelect(playTypes.SNITCH_APPEARS)}> {playTypes.SNITCH_APPEARS} </p>
      <p onClick={() => onActionSelect(playTypes.SNITCH_CAUGHT)}> {playTypes.SNITCH_CAUGHT} </p>
    </PlaysContainer>
    <Button onClick={submitPlay}> SUBMIT PLAY </Button>
  </div>
);

export default PlaysHandler;
