import React from 'react';
import { connect } from 'react-redux';
import MatchPreviewList from '../components/Main/MatchPreviewList';
import { filterByIds } from '../reducers/selectors';
import { fetchMatches } from '../actions/MatchActions';
import Spinner from '../components/Spinner';

class MatchPreviewListContainer extends React.Component {
  componentDidMount() {
    fetchMatches();
  }

  render() {
    const { matches, isFetching } = this.props;
    return (
      <div>
        {isFetching ? <Spinner /> : <MatchPreviewList matches={matches} />}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  matches: filterByIds(state.entities.matches, state.result),
  isFetching: state.isFetching,
});

const mapDispatchToProps = dispatch => ({
  fetchMatches: dispatch(fetchMatches())
})

MatchPreviewListContainer = connect(mapStateToProps, mapDispatchToProps)(MatchPreviewListContainer);
export default MatchPreviewListContainer;

