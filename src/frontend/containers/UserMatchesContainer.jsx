import React from 'react';
import { connect } from 'react-redux';
import { bool, array } from 'prop-types';
import UserMatches from '../components/UserMatches/UserMatches';
import Spinner from '../components/Spinner';
import { filterByIds } from '../reducers/selectors';
import { fetchMatches } from '../actions/MatchActions';
import { authenticate } from '../actions/UserActions';
import client from '../client';

class UserMatchesContainer extends React.Component {
  state = { isAuthenticated: false }
  static propTypes = {
    isFetching: bool,
    matches: array,
  }

  async componentDidMount() {
    const { authenticate, fetchMatches } = this.props;
    const user = await authenticate(client);
    await fetchMatches(client, { query: { handler: user._id } });
    this.setState({ isAuthenticated: user._id ? true : false });
  }

  render() {
    const { isAuthenticated } = this.state;
    const { isFetching, matches } = this.props;

    if (!isAuthenticated) {
      return <div> Not authenticated </div>
    }

    return (
      <div>
        {
          (isFetching || !matches) ?
            <Spinner /> :
            <UserMatches matches={matches} />
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isFetching: state.isFetching,
  matches: filterByIds(state.entities.matches, state.result),
});

const mapDispatchToProps = (dispatch) => ({
  fetchMatches: (api, query) => dispatch(fetchMatches(api, query)),
  authenticate: api => dispatch(authenticate(api))
});

UserMatchesContainer = connect(mapStateToProps, mapDispatchToProps)(UserMatchesContainer);
export default UserMatchesContainer;
