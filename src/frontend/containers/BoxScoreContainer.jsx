import React from 'react';
import { connect } from 'react-redux';
import BoxScore from '../components/BoxScore/BoxScore';
import { fetchMatch, addPlay } from '../actions/MatchActions';
import { filterById } from '../reducers/selectors';
import Spinner from '../components/Spinner';
import client from '../client';

class BoxScoreContainer extends React.Component {
  componentDidMount() {
    const { fetchMatch, id } = this.props;
    fetchMatch(id, client);
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
    const { match, isFetching, matchRouter } = this.props;
    return (
      <div>
        {
          !match ? <Spinner /> : <BoxScore {...this.props} />
        }
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id || ownProps.match.url.split('/')[2];
  return {
    match: filterById(state.entities.matches, id),
    id,
    isFetching: state.isFetching,
    matchRouter: ownProps.match,
  }
};

const mapDispatchToProps = dispatch => ({
  fetchMatch: (id, api) => dispatch(fetchMatch(id, api)),
  addPlay: (matchId, play) => dispatch(addPlay(matchId, play)),
})

BoxScoreContainer = connect(mapStateToProps, mapDispatchToProps)(BoxScoreContainer);
export default BoxScoreContainer;

