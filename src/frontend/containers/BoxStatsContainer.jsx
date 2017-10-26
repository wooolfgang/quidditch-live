import { connect } from 'react-redux';
import { array, string } from 'prop-types';
import BoxStats from '../components/BoxScore/BoxStats/BoxStats';
import { filterByIds, filterById } from '../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
  teamAPlayers: filterByIds(state.entities.players, state.entities.teams[ownProps.teamAId].players),
  teamBPlayers: filterByIds(state.entities.players, state.entities.teams[ownProps.teamBId].players),
  teamAName: filterById(state.entities.teams, ownProps.teamAId).name,
  teamBName: filterById(state.entities.teams, ownProps.teamBId).name,
});

const BoxStatsContainer = connect(mapStateToProps)(BoxStats);

BoxStatsContainer.propTypes = {
  teamAPlayers: array,
  teamBPlayers: array,
  teamAName: string,
  teamBName: string,
};

export default BoxStatsContainer;
