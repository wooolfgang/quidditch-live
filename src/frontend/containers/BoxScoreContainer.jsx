import { connect } from 'react-redux';
import BoxScore from '../components/BoxScore/BoxScore';
import { getMatchById } from '../reducers';

const mapStateToProps = (state, ownProps) => ({
  match: getMatchById(state.entities.matches, ownProps.match.params.id),
});

const BoxScoreContainer = connect(mapStateToProps)(BoxScore);
export default BoxScoreContainer;

