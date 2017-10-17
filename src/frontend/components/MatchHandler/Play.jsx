import React from 'react';
import styled from 'styled-components';

const StyledP = styled.p`
  cursor: pointer;
  font-family: 'Oswald', sans-serif;
  font-size: 12px;
  padding: 5px 0px;
  border: 1px solid lightgray;
  background: ${props => props.chosen && props.theme.bg};
  border: ${props => props.chosen && props.theme.bg};
  color: ${props => props.chosen && 'white'};
`;

const Play = ({ chosen, onClick, children }) => (
  <StyledP chosen={chosen} onClick={onClick}> {children} </StyledP>
);

export default Play;

