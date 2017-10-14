import React from 'react';
import styled from 'styled-components';
import { HashRouter as Router, Route } from 'react-router-dom';
import TeamScoresContainer from '../../containers/TeamScoresContainer';
import PlayByPlay from './PlayByPlay';
import Link from './Link';
import BoxStatsContainer from '../../containers/BoxStatsContainer';

const Nav = styled.div`
  width: 60%;
  margin: auto;
  display: flex;
  justify-content: space-around;
  margin-top: 14px;
  padding: 10px 8px;
  background: white;
  border-bottom: 1px solid lightgray;
`

const BoxScore = ({ match }) => (
  <div>
    <TeamScoresContainer match={match} />
    <Nav>
      <Link to={`/boxscore/${match._id}`} label="BOX SCORE" />
      <Link to={`/boxscore/playbyplay/${match._id}`} label="PLAY BY PLAY" />
      <Link to={`/boxscore/teamcomparison/${match._id}`} label="TEAM COMPARISON" />
    </Nav>
    <Route
      exact path="/boxscore/:id"
      component={() =>
        <BoxStatsContainer teamAId={match.teams[0]} teamBId={match.teams[1]} plays={match.plays} />}
    />
    <Route
      path="/boxscore/playbyplay"
      component={() =>
        <PlayByPlay plays={match.plays}
          teamAId={match.teams[0]}
          teamBId={match.teams[1]} />}
    />
    <Route
      path="/boxscore/teamcomparison"
      component={() =>
        <h1> HELLO </h1>
      }
    />
  </div>
);

export default BoxScore;