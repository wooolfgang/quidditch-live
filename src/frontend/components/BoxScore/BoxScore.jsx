import React from 'react';
import { object } from 'prop-types';
import styled from 'styled-components';
import { HashRouter as Router, Route } from 'react-router-dom';
import TeamScoresContainer from '../../containers/TeamScoresContainer';
import PlayByPlay from '../MatchPlays/PlayByPlay';
import Link from './Link';
import BoxStatsContainer from '../../containers/BoxStatsContainer';
import TeamComparisonContainer from '../../containers/TeamComparisonContainer';

const Nav = styled.div`
  width: 60%;
  margin: auto;
  display: flex;
  justify-content: space-around;
  margin-top: 14px;
  padding: 10px 0px;
  background: white;
  border-bottom: 1px solid lightgray;
`;

const BoxScore = ({ match }) => {
  const teamAId = match.teams[0];
  const teamBId = match.teams[1];
  return (
    <div>
      <TeamScoresContainer match={match} />
      <Nav>
        <Link to={`/boxscore/${match._id}`} label="BOX SCORE" />
        <Link to={`/boxscore/playbyplay/${match._id}`} label="PLAY BY PLAY" />
        <Link to={`/boxscore/teamcomparison/${match._id}`} label="TEAM COMPARISON" />
      </Nav>
      <Route exact path="/boxscore/:id" component={() => <BoxStatsContainer teamAId={teamAId} teamBId={teamBId} plays={match.plays} />} />
      <Route path="/boxscore/playbyplay" component={() => <PlayByPlay teamAId={teamAId} teamBId={teamBId} plays={match.plays} matchStart={match.dateStarted} />} />
      <Route path="/boxscore/teamcomparison" component={() => <TeamComparisonContainer teamAId={teamAId} teamBId={teamBId} plays={match.plays} />} />
    </div>
  )
};

BoxScore.propTypes = {
  match: object.isRequired,
};

export default BoxScore;