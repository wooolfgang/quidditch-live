import React from 'react';
import { connect } from 'react-redux';
import BoxScore from '../components/BoxScore/BoxScore';
import { fetchMatch, addPlay } from '../actions';
import { filterById } from '../reducers/selectors';
import Spinner from '../components/Spinner';
import client from '../client';

class BoxScoreContainer extends React.Component {
  componentDidMount() {
    const { fetchMatch, id } = this.props;
    fetchMatch(id);
    this.initListeners();
  }

  componentDidUpdate(prevProps) {
    const { fetchMatch, id } = this.props;
    if (prevProps.id !== id) {
      fetchMatch(id);
    }
  }

  initListeners() {
    const { addPlay } = this.props;
    client.service('api/matches').on('patched', (match) => {
      const latestPlay = match.plays[match.plays.length - 1];
      addPlay(latestPlay, match._id);
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
    matchRouter: ownProps.match
  }
};

const mapDispatchToProps = dispatch => ({
  fetchMatch: id => dispatch(fetchMatch(id)),
  addPlay: (play, matchId) => dispatch(addPlay(play, matchId)),
})

BoxScoreContainer = connect(mapStateToProps, mapDispatchToProps)(BoxScoreContainer);
export default BoxScoreContainer;

