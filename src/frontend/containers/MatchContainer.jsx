import { connect } from 'react-redux';
import { filterByIds } from '../reducers';
import Match from '../components/Match';

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  teams: filterByIds(state.entities.teams, ownProps.match.teams),
});

const MatchContainer = connect(mapStateToProps)(Match);
export default MatchContainer;
