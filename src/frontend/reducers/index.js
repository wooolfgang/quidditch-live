import * as types from '../constants/ActionTypes';

const rootReducer = (state = { result: [], entities: { matches: {} } }, action) => {
  switch (action.type) {
    case types.REQUEST_MATCHES:
      return { ...state, isFetching: true };

    case types.RECEIVE_MATCHES:
      return { ...state, isFetching: false, ...action.response };

    default:
      return state;
  }
};

export const getMatches = state => state.result.map(id => state.entities.matches[id]);
export const getTeams = (state, filter) => filter.map(id => state.entities.teams[id]);

export default rootReducer;
