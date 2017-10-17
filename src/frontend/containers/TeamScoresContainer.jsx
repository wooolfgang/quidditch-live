import { connect } from 'react-redux';
import { computeTeamStat, filterById } from '../reducers/selectors';
import TeamScores from '../components/BoxScore/TeamScores';
import * as statTypes from '../constants/StatTypes';

const mapStateToProps = (state, ownProps) => {
  const teamAId = ownProps.match.teams[0];
  const teamBId = ownProps.match.teams[1];
  return {
    teamAScore: computeTeamStat(teamAId, ownProps.match.plays, statTypes.TEAM_SCORE),
    teamBScore: computeTeamStat(teamBId, ownProps.match.plays, statTypes.TEAM_SCORE),
    teamAName: filterById(state.entities.teams, teamAId).name,
    teamBName: filterById(state.entities.teams, teamBId).name,
  };
};

const TeamScoresContainer = connect(mapStateToProps)(TeamScores);
export default TeamScoresContainer;
