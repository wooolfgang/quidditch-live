import { connect } from 'react-redux';
import { number } from 'prop-types';
import StatRow from '../components/BoxScore/BoxStats/StatRow';
import { computePlayerStat } from '../reducers/selectors';
import * as statTypes from '../constants/StatTypes';

const mapStateToProps = (state, ownProps) => {
  const { _id, plays } = ownProps;
  return {
    fgMade: computePlayerStat(_id, plays, statTypes.FIELD_GOAL_MADE),
    fgAttemps: computePlayerStat(_id, plays, statTypes.FIELD_GOAL_ATTEMPS),
    blocks: computePlayerStat(_id, plays, statTypes.BLOCK_MADE),
    snitchCaught: computePlayerStat(_id, plays, statTypes.CATCH_SNITCH_MADE),
  };
};

const StatRowContainer = connect(mapStateToProps)(StatRow);

StatRowContainer.propTypes = {
  fgMade: number,
  fgAttemps: number,
  blocks: number,
  snitchCaught: number,
};

export default StatRowContainer;
