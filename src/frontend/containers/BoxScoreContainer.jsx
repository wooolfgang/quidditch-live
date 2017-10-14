import React from 'react';
import { connect } from 'react-redux';
import BoxScore from '../components/BoxScore/BoxScore';
import { fetchMatch } from '../actions';
import { filterById } from '../reducers/selectors';
import Spinner from '../components/Spinner';

class BoxScoreContainer extends React.Component {
  componentDidMount() {
    const { fetchMatch, id } = this.props;
    fetchMatch(id);
  }

  componentDidUpdate(prevProps) {
    const { fetchMatch, id } = this.props;
    if (prevProps.id !== id) {
      fetchMatch(id);
    }
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
  fetchMatch: id => dispatch(fetchMatch(id))
})

BoxScoreContainer = connect(mapStateToProps, mapDispatchToProps)(BoxScoreContainer);
export default BoxScoreContainer;

