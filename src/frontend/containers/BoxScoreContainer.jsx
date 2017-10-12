import React from 'react';
import { connect } from 'react-redux';
import BoxScore from '../components/BoxScore/BoxScore';
import { fetchMatch } from '../actions';
import { filterById } from '../reducers';
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
    const { match, isFetching } = this.props;
    return (
      <div>
        {
          !match ? <Spinner /> : <BoxScore {...this.props} />
        }
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  match: filterById(state.entities.matches, ownProps.match.params.id),
  id: ownProps.match.params.id,
  isFetching: state.isFetching,
});

const mapDispatchToProps = dispatch => ({
  fetchMatch: id => dispatch(fetchMatch(id))
})

BoxScoreContainer = connect(mapStateToProps, mapDispatchToProps)(BoxScoreContainer);
export default BoxScoreContainer;

