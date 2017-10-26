import { connect } from 'react-redux';
import { string, array, number } from 'prop-types';
import { filterById, computeTeamStat } from '../reducers/selectors';
import FeaturedMatch from '../components/Frontpage/FeaturedMatch/FeaturedMatch';
import * as statTypes from '../constants/StatTypes';

const mapStateToProps = (state, ownProps) => {
  const teamAId = ownProps.featuredMatch.teams[0];
  const teamBId = ownProps.featuredMatch.teams[1];
  return {
    teamAScore: computeTeamStat(teamAId, ownProps.featuredMatch.plays, statTypes.TEAM_SCORE),
    teamBScore: computeTeamStat(teamBId, ownProps.featuredMatch.plays, statTypes.TEAM_SCORE),
    teamAName: filterById(state.entities.teams, teamAId).name,
    teamBName: filterById(state.entities.teams, teamBId).name,
    plays: ownProps.featuredMatch.plays,
    matchStarted: ownProps.featuredMatch.dateStarted,
  };
};

const FeaturedMatchContainer = connect(mapStateToProps)(FeaturedMatch);

FeaturedMatchContainer.propTypes = {
  teamAScore: number,
  teamBScore: number,
  teamAName: string,
  teamBName: string,
  plays: array,
  matchStarted: string,
};

export default FeaturedMatchContainer;

