import { combineReducers } from 'redux';
import * as types from '../constants/ActionTypes';
import entities from './entities';
import user from './user';

export const result = (state = [], action) => {
  switch (action.type) {
    case types.MATCH_RECEIVE_SUCCESS:
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
    case types.MATCH_REQUEST:
      return true;

    case types.MATCH_RECEIVE_SUCCESS:
      return false;

    case types.MATCH_RECEIVE_FAIL:
      return false;

    default:
      return state;
  }
};

export const ui = (state = {}, action) => {
  switch (action.type) {
    case types.UI_SET_VIEWED_MATCH:
      return { ...state, viewedMatchId: action.matchId };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  entities,
  result,
  isFetching,
  ui,
  user,
});

export default rootReducer;
