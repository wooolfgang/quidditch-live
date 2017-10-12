import React from 'react';
import { connect } from 'react-redux';
import MatchList from '../components/MatchList';
import { filterByIds } from '../reducers';
import { fetchMatches } from '../actions';
import Spinner from '../components/Spinner';

class VisibileMatchList extends React.Component {
  componentDidMount() {
    fetchMatches();
  }

  render() {
    const { matches, isFetching } = this.props;
    return (
      <div>
        {isFetching ? <Spinner /> : <MatchList matches={matches} />}
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

VisibileMatchList = connect(mapStateToProps, mapDispatchToProps)(VisibileMatchList);
export default VisibileMatchList;

