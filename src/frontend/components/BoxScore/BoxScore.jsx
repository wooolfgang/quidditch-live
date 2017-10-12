import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';
import ScoreContainer from '../../containers/ScoreContainer';
import PlayByPlay from './PlayByPlay';

const BoxScore = ({ match }) => (
  <div>
    <ScoreContainer match={match} />
    <PlayByPlay plays={match.plays} />
  </div>
);

export default BoxScore;