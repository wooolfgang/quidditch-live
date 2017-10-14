import React from 'react';
import { Route, Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  a {
    color: ${props => (props.active ? `${props.theme.fg}` : '#333')} !important;
    border-bottom: ${props => (props.active && `2px solid ${props.theme.fg}`)};
    font-size: 17px;
    padding: 2px;
    text-decoration: none !important;
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
