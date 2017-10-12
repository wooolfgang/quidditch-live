import { combineReducers } from 'redux';
import * as types from '../constants/ActionTypes';

export const matches = (state = {}, action) => {
  switch (action.type) {
    case types.RECEIVE_MATCHES:
      return { ...state, ...action.response.entities.matches };

    case types.ADD_PLAY:
      return {
        ...state,
        [action.matchId]: {
          ...state[action.matchId], plays: state[action.matchId].plays.concat(action.play),
        },
      };

    default:
      return state;
  }
};

export const players = (state = {}, action) => {
  switch (action.type) {
    case types.RECEIVE_MATCHES:
      return { ...state, ...action.response.entities.players };

    default:
      return state;
  }
};

export const teams = (state = {}, action) => {
  switch (action.type) {
    case types.RECEIVE_MATCHES:
      return { ...state, ...action.response.entities.teams };

    default:
      return state;
  }
};

const entities = combineReducers({
  matches,
  players,
  teams,
});

export default entities;
