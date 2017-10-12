import { combineReducers } from 'redux';
import * as types from '../constants/ActionTypes';

export const matches = (state = {}, action) => {
  switch (action.type) {
    case types.RECEIVE_MATCHES:
      return { ...state, ...action.response.entities.matches };

    case types.SELECT_PLAYER_ACTION:

      return {
        ...state,
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
