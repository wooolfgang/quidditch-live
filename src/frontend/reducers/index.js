import { combineReducers } from 'redux';
import * as types from '../constants/ActionTypes';

export const entitiesInitState = { matches: {}, players: {}, teams: {} };

export const entities = (state = entitiesInitState, action) => {
  switch (action.type) {
    case types.REQUEST_MATCHES:
      return { ...state, isFetching: true };

    case types.RECEIVE_MATCHES:
      return { ...state, isFetching: false, ...action.response.entities };

    default:
      return state;
  }
};

export const result = (state = [], action) => {
  switch (action.type) {
    case types.RECEIVE_MATCHES:
      return [...action.response.result];

    default:
      return state;
  }
};

export const getMatches = (matches, filter) => filter.map(id => matches[id]);
export const getTeams = (teams, filter) => filter.map(id => teams[id]);
export const getMatchById = (matches, id) => matches[id];

const rootReducer = combineReducers({
  entities,
  result,
});

export default rootReducer;
