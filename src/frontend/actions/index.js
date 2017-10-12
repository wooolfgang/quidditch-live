import { normalize } from 'normalizr';
import * as types from '../constants/ActionTypes';
import client from '../client';
import * as schema from './schema';

export const requestMatches = () => ({ type: types.REQUEST_MATCHES });
export const receiveMatches = response => ({ type: types.RECEIVE_MATCHES, response });

export const addPlay = (play, matchId) => ({ type: types.ADD_PLAY, play, matchId });

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

export const submitPlay = (play, matchId) => async (dispatch, getState) => {
  const newPlay = {
    ...play,
    timestamp: Date.now(),
  };
  const previousPlays = getState().entities.matches[matchId].plays;
  await client.service('api/matches').patch(matchId, { plays: [...previousPlays, newPlay] });
  dispatch(addPlay(newPlay, matchId));
};

