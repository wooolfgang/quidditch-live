import React from 'react';
import styled from 'styled-components';
import Link from './Link';
import DropdownLogin from './DropdownLogin';

const StyledDiv = styled.div`
  height: 70px;
  width: 100vw;
  background: ${props => props.theme.secondary};
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    color: white;
    font-size: 35px;
    position: relative;
    left: 70px;
  }
`;

const Container = styled.div`
  position: relative;
  right: 30px;
  display: flex;
`

const Nav = styled.div`
  position: relative;
  right: 100px;
  display: flex;
  justify-content: space-around;
  padding: 6px;
`

const Header = () => (
  <StyledDiv>
    <h1> Quidditch Live </h1>
    <Container>
      <Nav>
        <Link to="/" exact label="Home" />
        <Link to="/matches" exact label="Matches" />
      </Nav>
      <DropdownLogin />
    </Container>
  </StyledDiv>
);

export default Header;