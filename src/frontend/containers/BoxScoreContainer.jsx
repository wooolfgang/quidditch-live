import React from 'react';
import { connect } from 'react-redux';
import BoxScore from '../components/BoxScore/BoxScore';
import { fetchMatch, addPlay } from '../actions/MatchActions';
import { getCurrentMatch } from '../reducers/selectors';
import Spinner from '../components/Spinner';
import client from '../client';

class BoxScoreContainer extends React.Component {
  async componentDidMount() {
    const { fetchMatch, id } = this.props;
    await fetchMatch(id, client);
    this.initListeners();
  }

  componentDidUpdate(prevProps) {
    const { fetchMatch, id } = this.props;
    if (prevProps.id !== id) {
      fetchMatch(id, client);
    }
  }

  componentWillUnmount() {
    client.service('api/matches').removeListener('updated');
  }

  initListeners() {
    const { addPlay } = this.props;
    client.service('api/matches').on('updated', (match) => {
      const latestPlay = match.plays[match.plays.length - 1];
      addPlay(match._id, latestPlay);
    });
  }

  render() {
    const { match, isFetching } = this.props;
    return (
      <div>
        {
          (isFetching || !match) ? <Spinner /> : <BoxScore match={match} />
        }
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id || ownProps.match.url.split('/')[2];
  return {
    match: getCurrentMatch(state),
    id,
    isFetching: state.isFetching,
  }
};

const mapDispatchToProps = dispatch => ({
  fetchMatch: (id, api) => dispatch(fetchMatch(id, api)),
  addPlay: (matchId, play) => dispatch(addPlay(matchId, play)),
})

BoxScoreContainer = connect(mapStateToProps, mapDispatchToProps)(BoxScoreContainer);
export default BoxScoreContainer;

