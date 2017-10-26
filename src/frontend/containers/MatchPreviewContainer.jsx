import { connect } from 'react-redux';
import { string, number } from 'prop-types';
import { filterById, computeTeamStat } from '../reducers/selectors';
import * as statTypes from '../constants/StatTypes';
import MatchPreview from '../components/Frontpage/MatchPreview';

const mapStateToProps = (state, ownProps) => {
  const teamAId = ownProps.match.teams[0];
  const teamBId = ownProps.match.teams[1];
  return {
    matchId: ownProps.match._id,
    dateStarted: ownProps.match.dateStarted,
    teamAScore: computeTeamStat(teamAId, ownProps.match.plays, statTypes.TEAM_SCORE),
    teamBScore: computeTeamStat(teamBId, ownProps.match.plays, statTypes.TEAM_SCORE),
    teamAName: filterById(state.entities.teams, teamAId).name,
    teamBName: filterById(state.entities.teams, teamBId).name,
  };
};

const MatchPreviewContainer = connect(mapStateToProps)(MatchPreview);

MatchPreviewContainer.propTypes = {
  matchId: string,
  dateStarted: string,
  teamAScore: number,
  teamBScore: number,
  teamAName: string,
  teamBName: string,
};

export default MatchPreviewContainer;
