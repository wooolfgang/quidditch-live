import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  height: 70px;
  width: 100vw;
  background: ${props => props.theme.secondary};
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    color: white;
    margin: 0px;
    font-size: 35px;
  }
`;

const Header = () => (
  <StyledDiv>
    <h1> Quidditch Live! </h1>
  </StyledDiv>
);

export default Header;