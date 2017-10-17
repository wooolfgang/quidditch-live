import { connect } from 'react-redux';
import { filterByIds } from '../reducers/selectors';
import MatchPreview from '../components/Main/MatchPreview';

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  teams: filterByIds(state.entities.teams, ownProps.match.teams),
});

const MatchPreviewContainer = connect(mapStateToProps)(MatchPreview);
export default MatchPreviewContainer;
