import { connect } from 'react-redux';
import { getTeams } from '../reducers';
import Match from '../components/Match';

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  teams: getTeams(state, ownProps.match.teams),
});

const MatchContainer = connect(mapStateToProps)(Match);
export default MatchContainer;
