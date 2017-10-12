import { connect } from 'react-redux';
import { computeTeamScore, filterById } from '../reducers/';
import Score from '../components/BoxScore/Score';

const mapStateToProps = (state, ownProps) => {
  const teamAId = ownProps.match.teams[0];
  const teamBId = ownProps.match.teams[1];
  return {
    teamAScore: computeTeamScore(ownProps.match.plays, teamAId),
    teamBScore: computeTeamScore(ownProps.match.plays, teamBId),
    teamAName: filterById(state.entities.teams, teamAId).name,
    teamBName: filterById(state.entities.teams, teamBId).name,
  };
};

const ScoreContainer = connect(mapStateToProps)(Score);
export default ScoreContainer;
