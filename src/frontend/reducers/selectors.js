import * as statTypes from '../constants/StatTypes';

export const filterByIds = (array, ids) => ids.map(id => array[id]);
export const filterById = (array, id) => array[id];
export const filterByProp = (array, prop, propValue) => array.filter(arr => arr[prop] === propValue);

export const computeTeamScore = (plays, teamId) => plays.reduce((accumulator, play) => {
  if (play.action === 'GOAL_MADE' && play.teamId === teamId) {
    return accumulator + 10;
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
