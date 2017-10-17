import React from 'react';
import styled from 'styled-components';
import Avatar from '../Avatar';
import { getTimestampDiff, timestampToDate } from '../../../utils';
import * as playTypes from '../../constants/PlayTypes';

const Container = styled.div`
  display: flex;
`;

const Row = styled.div`
  margin: 0px;
  height: 80px;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.neutralTwo};
  ${props => props.isTeamA && 'order: 1'};
  ${props => props.isTeamB && 'order: 3'};
`;

const Dummy = styled.div`
  flex: 1;
  height: 80px;
  ${props => props.isTeamA && 'order: 3'};
  ${props => props.isTeamB && 'order: 1'};
`;

const Time = styled.span`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  order: 2;
  font-size: 12px;
  padding: 5px 20px;
`;

const playStatement = (type, name) => {
  if (type === playTypes.GOAL_MADE) {
    return `${name} scored a goal!`;
  } else if (type === playTypes.GOAL_BLOCKED) {
    return `${name} blocked a goal!`;
  } else if (type === playTypes.GOAL_MISSED) {
    return `${name} missed a goal :(`;
  } else if (type === playTypes.SNITCH_APPEARS) {
    return 'The snitch has appeared in the game!';
  } else if (type === playTypes.SNITCH_CAUGHT) {
    return `The snitch has been caught by ${name}`;
  }
};

const PlayRow = ({ action, player, timestamp, playerId, isTeamA, isTeamB, matchStartTimestamp }) => (
  <Container>
    <Row isTeamA={isTeamA} isTeamB={isTeamB} >
      <Avatar imageUrl={`https://api.adorable.io/avatars/60/${playerId}`} />
      <span>{playStatement(action, player)}  </span>
    </Row>
    <Time>{timestampToDate(getTimestampDiff(timestamp, matchStartTimestamp))} </Time>
    <Dummy isTeamA={isTeamA} isTeamB={isTeamB} />
  </Container >
);

export default PlayRow;