import React from 'react';
import styled from 'styled-components';

const StyledBar = styled.div`
  width: ${props => `${props.width}%`};
  height: 50px;
  margin-bottom: 20px;
  background: ${props => props.theme.neutralThree};

  ${props => props.isTeamA && 'align-self: flex-end;'};
  ${props => props.isTeamB && 'align-self: flex-start;'};
  ${props => props.isHigher && `background: ${props.theme.bg};`};
`;

const Bar = (props) => (
  <StyledBar {...props} />
);

export default Bar;
