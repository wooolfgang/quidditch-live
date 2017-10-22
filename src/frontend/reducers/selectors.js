import * as statTypes from '../constants/StatTypes';
import * as playTypes from '../constants/PlayTypes';

export const getCurrentMatch = state => state.entities.matches[state.ui.viewedMatchId];

export const filterByIds = (array, ids) => ids.map(id => array[id]);
export const filterById = (array, id) => array[id];
export const filterByProp = (array, prop, propValue) => array.filter(arr => arr[prop] === propValue);

export const computeTeamStat = (teamId, plays, statType) => filterByProp(plays, 'teamId', teamId).reduce((accumulator, play) => {
  if (statType === statTypes.TEAM_SCORE) {
    if (play.action === playTypes.GOAL_MADE) {
      return accumulator + 10;
    } else if (play.action === playTypes.SNITCH_CAUGHT) {
      return accumulator + 30;
    }
  } else if (statType === statTypes.TEAM_GOALS_MADE && play.action === playTypes.GOAL_MADE) {
    return accumulator + 1;
  } else if (statType === statTypes.TEAM_GOALS_ATTEMPS && (play.action === playTypes.GOAL_MADE || play.action === playTypes.GOAL_MISSED)) {
    return accumulator + 1;
  } else if (statType === statTypes.TEAM_BLOCKS_MADE && play.action === playTypes.GOAL_BLOCKED) {
    return accumulator + 1;
  }
  return accumulator;
}, 0);

export const computePlayerStat = (playerId, plays, statType) => filterByProp(plays, 'playerId', playerId).reduce((accumulator, play) => {
  if (statType === statTypes.FIELD_GOAL_MADE && play.action === 'GOAL_MADE') {
    return accumulator + 1;
  } else if (statType === statTypes.FIELD_GOAL_ATTEMPS && (play.action === 'GOAL_MADE' || play.action === 'GOAL_MISSED')) {
    return accumulator + 1;
  }
  return accumulator;
}, 0);
