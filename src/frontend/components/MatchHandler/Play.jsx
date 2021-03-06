import React from 'react';
import { bool, func, node } from 'prop-types';
import styled from 'styled-components';

const StyledP = styled.p`
  cursor: pointer;
  font-size: 12px;
  padding: 5px 0px;
  border: 1px solid lightgray;
  background: ${props => props.chosen && props.theme.bg};
  border: ${props => props.chosen && props.theme.bg};
  color: ${props => props.chosen && 'white'};
  font-family: ${props => props.theme.normalFont};
`;

const Play = ({ chosen, onClick, children }) => (
  <StyledP chosen={chosen} onClick={onClick}> {children} </StyledP>
);

Play.propTypes = {
  chosen: bool,
  onClick: func.isRequired,
  children: node
}

export default Play;

