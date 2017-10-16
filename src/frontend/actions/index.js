import { normalize } from 'normalizr';
import * as types from '../constants/ActionTypes';
import client from '../client';
import * as schema from './schema';

export const requestMatches = () => ({ type: types.MATCH_REQUEST });
export const receiveMatches = response => ({ type: types.MATCH_RECEIVE, response });

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

export const addPlay = (matchId, play) => ({
  type: types.PLAY_ADD,
  play,
  matchId,
});

export const fetchMatches = () => async (dispatch) => {
  dispatch(requestMatches());
  const matches = await client.service('api/matches').find();
  return dispatch(receiveMatches(normalize(matches, schema.matchListSchema)));
};

export const fetchMatch = id => async (dispatch) => {
  dispatch(requestMatches());
  const match = await client.service('api/matches').get(id);
  return dispatch(receiveMatches(normalize(match, schema.matchSchema)));
};
