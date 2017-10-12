import { connect } from 'react-redux';
import { getMatchById } from '../reducers';
import MatchHandler from '../components/MatchHandler/MatchHandler';

const mapStateToProps = (state, ownProps) => ({
  match: getMatchById(state.entities.matches, ownProps.match.params.id),
});

const MatchHandlerContainer = connect(mapStateToProps)(MatchHandler);
export default MatchHandlerContainer;
