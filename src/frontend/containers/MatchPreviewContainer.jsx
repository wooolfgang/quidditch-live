import { connect } from 'react-redux';
import { filterByIds } from '../reducers/selectors';
import MatchPreview from '../components/Frontpage/MatchPreview';

const mapStateToProps = (state, ownProps) => ({
  match: ownProps.match,
  teams: filterByIds(state.entities.teams, ownProps.match.teams),
});

const MatchPreviewContainer = connect(mapStateToProps)(MatchPreview);
export default MatchPreviewContainer;
