import { combineReducers } from 'redux';
import * as types from '../constants/ActionTypes';
import entities from './entities';

export const result = (state = [], action) => {
  switch (action.type) {
    case types.MATCH_RECEIVE:
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

    case types.MATCH_RECEIVE:
      return false;

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  entities,
  result,
  isFetching,
});

export default rootReducer;
