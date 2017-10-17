import { normalize } from 'normalizr';
import * as types from '../constants/ActionTypes';
import * as schema from '../constants/Schema';

export const requestMatches = () => ({ type: types.MATCH_REQUEST });
export const receiveMatches = response => ({ type: types.MATCH_RECEIVE, response });
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
  dispatch(requestMatches());
  const matches = await api.service('api/matches').find();
  return dispatch(receiveMatches(normalize(matches, schema.matchListSchema)));
};

export const fetchMatch = (id, api) => async (dispatch) => {
  dispatch(requestMatches());
  dispatch(setCurrentMatch(id));
  const match = await api.service('api/matches').get(id);
  return dispatch(receiveMatches(normalize(match, schema.matchSchema)));
};
