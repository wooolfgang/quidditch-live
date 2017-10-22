import React from 'react';
import styled from 'styled-components';
import { playStatement, getTimestampDiff, timestampToDate } from '../../../../utils';
import Avatar from '../../Avatar';

const StyledDiv = styled.div`
  padding: 8.5px;
  text-align: center;
  margin-bottom: 10px;
  display: flex;
  min-height: 50px;
  align-items: center;
  position: relative;
`;

const Play = styled.span`
  font-size: 13.5px;
  padding-left: 3px;
`;

const Time = styled.span`
  width: 10%;
  font-size: 11px;    
  position: absolute;
  right: 27.5px;
  color: ${props => props.theme.dark};
  font-family: ${props => props.theme.normalFont};
`

const FeaturedPlay = ({ action, playerId, player, timestamp, matchStarted }) => (
  <StyledDiv>
    <Avatar width="20px " imageUrl={`https://api.adorable.io/avatars/20/${playerId}`} />
    <Play> {playStatement(action, player)}</Play>
    <Time> {timestampToDate(getTimestampDiff(timestamp, matchStarted))} </Time>
  </StyledDiv>
);

export default FeaturedPlay;