import React from 'react';
import { bool, number } from 'prop-types';
import styled from 'styled-components';

const StyledBar = styled.div`
  height: 50px;
  margin-bottom: 20px;
  background: ${props => props.theme.neutralThree};
  width: ${props => `${props.width}%`};

  ${props => props.isTeamA && 'align-self: flex-end;'};
  ${props => props.isTeamB && 'align-self: flex-start;'};
  ${props => props.isHigher && `background: ${props.theme.bg};`};
`;

const Bar = (props = { width, isTeamA, isTeamB, isHigher }) => (
  <StyledBar {...props} />
);

Bar.propTypes = {
  width: number.isRequired,
  isTeamA: bool,
  isTeamB: bool,
  isHigher: bool.isRequired
};

export default Bar;
