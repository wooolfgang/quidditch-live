import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getTeamById } from '../../reducers';

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

let Middle;

Middle = ({ teamA, teamB, match, onActionSelect }) => (
  <div>
    <Heading>
      <h3>{teamA.name} </h3>
      VS
    <h3>{teamB.name} </h3>
    </Heading>
    <PlaysContainer>
      <p onClick={() => onActionSelect('GOAL_MADE')}> GOAL MADE </p>
      <p onClick={() => onActionSelect('GOAL_MISSED')}> GOAL MISSED </p>
      <p onClick={() => onActionSelect('GOAL_BLOCKED')}> GOAL BLOCKED </p>
      <p onClick={() => onActionSelect('SNITCH_APPEARS')}> SNITCH APPEARS </p>
      <p onClick={() => onActionSelect('SNITCH_CAUGHT')}> SNITCH CAUGHT </p>
    </PlaysContainer>
    <Button> SUBMIT PLAY </Button>
  </div>
);

const mapStateToProps = (state, ownProps) => ({
  teamA: getTeamById(state.entities.teams, ownProps.match.teams[0]),
  teamB: getTeamById(state.entities.teams, ownProps.match.teams[1]),
})

Middle = connect(mapStateToProps)(Middle)
export default Middle;
