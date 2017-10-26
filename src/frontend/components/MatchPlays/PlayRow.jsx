import React from 'react';
import { string, number, bool } from 'prop-types';
import styled from 'styled-components';
import Avatar from '../Avatar';
import { getTimestampDiff, timestampToDate, playStatement } from '../../../utils';

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

PlayRow.propTypes = {
  action: string.isRequired,
  player: string.isRequired,
  timestamp: number.isRequired,
  playerId: string.isRequired,
  isTeamA: bool,
  isTeamB: bool,
  matchStartTimestamp: number.isRequired
};

export default PlayRow;