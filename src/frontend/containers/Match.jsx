import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getTeams } from '../reducers';

const StyledDiv = styled.div`
  display: inline-block;
  width: 425px;
  height: 100px;
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: .2s;
  cursor: pointer;
`;

const mapStateToProps = (state, { match: { teams } }) => ({
  teams: getTeams(state, teams)
})

const Match = ({ match, teams }) => (
  <StyledDiv>
    <span> {teams[0].name}  VS  {teams[1].name} </span>
    <span> {match.dateStarted} </span>
  </StyledDiv>
);

export default connect(mapStateToProps)(Match);