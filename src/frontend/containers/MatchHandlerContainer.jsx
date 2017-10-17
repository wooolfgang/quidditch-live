import React from 'react';
import { connect } from 'react-redux';
import { fetchMatch } from '../actions/MatchActions';
import { filterById } from '../reducers/selectors';
import MatchHandler from '../components/MatchHandler/MatchHandler';
import PlayByPlay from '../components/MatchPlays/PlayByPlay';
import Spinner from '../components/Spinner';

class MatchHandlerContainer extends React.Component {
  componentDidMount() {
    const { fetchMatch, id } = this.props;
    fetchMatch(id, client);
  }

  componentDidUpdate(prevProps) {
    const { fetchMatch, id } = this.props;
    if (id !== prevProps.id) {
      fetchMatch(id, client);
    }
  }

  render() {
    const { match, isFetching } = this.props;
    return (
      <div>
        {
          !match ? <Spinner /> : <div>
            <MatchHandler match={match} />
            <PlayByPlay
              teamAId={match.teams[0]}
              teamBId={match.teams[1]}
              plays={match.plays}
              matchStart={match.dateStarted}
              height="500px"
            />
          </div>
        }
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  id: ownProps.match.params.id,
  match: filterById(state.entities.matches, ownProps.match.params.id),
  isFetching: state.isFetching
});

const mapDispatchToProps = (dispatch) => ({
  fetchMatch: (id, api) => dispatch(fetchMatch(id, api)),
})

MatchHandlerContainer = connect(mapStateToProps, mapDispatchToProps)(MatchHandlerContainer);
export default MatchHandlerContainer;
