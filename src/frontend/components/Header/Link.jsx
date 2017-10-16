import React from 'react';
import { Route, Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  a {
    color: ${props => (props.active ? `${props.theme.bg}` : 'white')} !important;
    background: ${props => (props.active && `${props.theme.neutralOne};`)};
    border-radius: 5px;
    padding: 7px;
    margin: 0px 2px;
    font-size: 17px;
    font-family: 'Oswald', sans-serif;
    text-decoration: none !important;
    transition:  0.2s;

    :hover {
      background: ${props => props.theme.neutralOne};
      opacity: 0.8;
      color: ${props => props.theme.bg} !important;
    }
  }
`

const CustomLink = ({ label, to, exact }) => (
  <Route
    path={to}
    exact={exact}
    children={({ match }) => (
      <Container active={match}>
        <Link to={to} > {label} </Link>
      </Container>
    )}
  />
);

export default CustomLink;
