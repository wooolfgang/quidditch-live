import React from 'react';
import { connect } from 'react-redux';
import { fetchMatches } from '../actions/MatchActions';
import { filterByIds } from '../reducers/selectors';
import client from '../client';
import { getRandomFromArray } from '../../utils';
import Frontpage from '../components/Frontpage/Frontpage';
import Spinner from '../components/Spinner';

class MainContainer extends React.Component {
  async componentDidMount() {
    const { fetchMatches } = this.props;
    await fetchMatches(client);
  }

  render() {
    const { isFetching, matches } = this.props;
    const featuredMatch = matches[0];
    return (
      <div>
        {
          (isFetching || !matches) ? <Spinner /> :
            <Frontpage matches={matches} featuredMatch={featuredMatch} />
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  matches: filterByIds(state.entities.matches, state.result),
  isFetching: state.isFetching,
});

const mapDispatchToProps = dispatch => ({
  fetchMatches: api => dispatch(fetchMatches(api))
});

MainContainer = connect(mapStateToProps, mapDispatchToProps)(MainContainer);
export default MainContainer;
