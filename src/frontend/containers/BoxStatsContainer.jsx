import { connect } from 'react-redux';
import BoxStats from '../components/BoxScore/BoxStats/BoxStats';
import { filterByIds, filterById } from '../reducers/selectors';
import * as statTypes from '../constants/StatTypes';

const mapStateToProps = (state, ownProps) => ({
  teamAPlayers: filterByIds(state.entities.players, state.entities.teams[ownProps.teamAId].players),
  teamBPlayers: filterByIds(state.entities.players, state.entities.teams[ownProps.teamBId].players),
  teamAName: filterById(state.entities.teams, ownProps.teamAId).name,
  teamBName: filterById(state.entities.teams, ownProps.teamBId).name,
});

const BoxStatsContainer = connect(mapStateToProps)(BoxStats);
export default BoxStatsContainer;
