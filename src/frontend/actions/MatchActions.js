import { normalize } from 'normalizr';
import * as types from '../constants/ActionTypes';
import * as schema from '../constants/Schema';

export const requestMatches = () => ({ type: types.MATCH_REQUEST });
export const receiveMatchesSuccess = response => ({ type: types.MATCH_RECEIVE_SUCCESS, response });
export const receiveMatchesFail = error => ({ type: types.MATCH_RECEIVE_FAIL, error });
export const setCurrentMatch = id => ({ type: types.UI_SET_VIEWED_MATCH, matchId: id });

export const addPlay = (matchId, play) => ({
  type: types.PLAY_ADD, play, matchId,
});

export const submitPlay = (matchId, play) => {
  const playWithTimestamp = { ...play, timestamp: Date.now() };
  return {
    type: types.PLAY_SUBMIT,
    play: playWithTimestamp,
    matchId,
    meta: {
      offline: {
        effect: {
          url: '/api/matches', id: matchId, query: { $push: { plays: playWithTimestamp } }, method: 'update',
        },
        rollback: { type: types.PLAY_SUBMIT_ROLLBACK },
        commit: { type: types.PLAY_SUBMIT_COMMIT, play: playWithTimestamp, matchId },
      },
    },
  };
};

export const fetchMatches = api => async (dispatch) => {
  try {
    dispatch(requestMatches());
    const matches = await api.service('api/matches').find();
    return dispatch(receiveMatchesSuccess(normalize(matches, schema.matchListSchema)));
  } catch (e) {
    return dispatch(receiveMatchesFail(e));
  }
};

export const fetchMatch = (id, api) => async (dispatch) => {
  try {
    dispatch(requestMatches());
    dispatch(setCurrentMatch(id));
    const match = await api.service('api/matches').get(id);
    return dispatch(receiveMatchesSuccess(normalize(match, schema.matchSchema)));
  } catch (e) {
    return dispatch(receiveMatchesFail(e));
  }
};
