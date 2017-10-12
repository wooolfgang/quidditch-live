import { combineReducers } from 'redux';
import * as types from '../constants/ActionTypes';
import entities from './entities';

export const result = (state = [], action) => {
  switch (action.type) {
    case types.RECEIVE_MATCHES:
      if (action.response.result instanceof Array) {
        return [...action.response.result];
      }
      return [action.response.result];

    default:
      return state;
  }
};

export const isFetching = (state = false, action) => {
  switch (action.type) {
    case types.REQUEST_MATCHES:
      return true;

    case types.RECEIVE_MATCHES:
      return false;

    default:
      return state;
  }
};

export const filterByIds = (array, ids) => ids.map(id => array[id]);
export const filterById = (array, id) => array[id];

export const computeTeamScore = (plays, teamId) => plays.reduce((accumulator, play) => {
  if (play.action === 'GOAL_MADE' && play.teamId === teamId) {
    return accumulator + 10;
  }
  return accumulator;
}, 0);

const rootReducer = combineReducers({
  entities,
  result,
  isFetching,
});

export default rootReducer;
