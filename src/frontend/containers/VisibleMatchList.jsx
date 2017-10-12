import React from 'react';
import { connect } from 'react-redux';
import MatchList from '../components/MatchList';
import { getMatches } from '../reducers';
import { fetchMatches } from '../actions';

const mapStateToProps = state => ({
  matches: getMatches(state.entities.matches, state.result),
});

class VisibileMatchList extends React.Component {
  render() {
    const { matches } = this.props;
    return (
      <MatchList matches={matches} />
    )
  }
}

VisibileMatchList = connect(mapStateToProps)(VisibileMatchList);
export default VisibileMatchList;

