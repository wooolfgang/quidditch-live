import React from 'react';
import { object, func, bool } from 'prop-types';
import styled from 'styled-components';
import Link from './Link';
import DropdownLogin from './DropdownLogin';
import DropdownUser from './DropdownUser';

const StyledDiv = styled.div`
  height: 70px;
  width: 100vw;
  background: ${props => props.theme.secondary};
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    color: white;
    position: relative;
    left: 70px;
    font-family: 'HarryP';
    font-size: 32px;
  }
`;

const Container = styled.div`
  position: relative;
  right: 45px;
  display: flex;
`

const Nav = styled.div`
  position: relative;
  right: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 6px;
`

const Header = ({ handleLogin, handleLogout, user, isAuthenticated }) => (
  <StyledDiv>
    <p> Quidditch Live </p>
    <Container>
      {
        isAuthenticated &&
        <Nav>
          <Link to="/" exact label="Home" />
          <Link to="/matches" exact label="Matches" />
        </Nav>
      }
      {
        isAuthenticated ?
          <DropdownUser handleLogout={handleLogout} user={user} /> :
          <DropdownLogin handleLogin={handleLogin} />
      }
    </Container>
  </StyledDiv>
);

Header.propTypes = {
  handleLogin: func.isRequired,
  handleLogout: func.isRequired,
  user: object,
  isAuthenticated: bool.isRequired,
};

export default Header;