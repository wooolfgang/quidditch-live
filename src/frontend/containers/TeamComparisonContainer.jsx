import { connect } from 'react-redux';
import TeamComparison from '../components/BoxScore/TeamComparison/TeamComparison';
import { computeTeamStat } from '../reducers/selectors';
import * as statTypes from '../constants/StatTypes';

const mapStateToProps = (state, ownProps) => {
  const { plays, teamAId, teamBId } = ownProps;
  return {
    teamAStats: {
      goalsMade: computeTeamStat(teamAId, plays, statTypes.TEAM_GOALS_MADE),
      goalAttemps: computeTeamStat(teamAId, plays, statTypes.TEAM_GOALS_ATTEMPS),
      blocks: computeTeamStat(teamAId, plays, statTypes.TEAM_BLOCKS_MADE),
    },
    teamBStats: {
      goalsMade: computeTeamStat(teamBId, plays, statTypes.TEAM_GOALS_MADE),
      goalAttemps: computeTeamStat(teamBId, plays, statTypes.TEAM_GOALS_ATTEMPS),
      blocks: computeTeamStat(teamBId, plays, statTypes.TEAM_BLOCKS_MADE),
    },
  };
};

const TeamComparisonContainer = connect(mapStateToProps)(TeamComparison);
export default TeamComparisonContainer;
