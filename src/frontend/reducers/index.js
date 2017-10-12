import { combineReducers } from 'redux';
import * as types from '../constants/ActionTypes';
import entities from './entities';

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
export const getTeamById = (teams, id) => teams[id];

const rootReducer = combineReducers({
  entities,
  result,
});

export default rootReducer;
