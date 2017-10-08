import { normalize } from 'normalizr';
import * as types from '../constants/ActionTypes';
import client from '../client';
import * as schema from './schema';

export const requestMatches = () => ({ type: types.REQUEST_MATCHES });
export const receiveMatches = response => ({ type: types.RECEIVE_MATCHES, response });

export const fetchMatches = () => async (dispatch) => {
  dispatch(requestMatches());
  const matches = await client.service('api/matches').find();
  return dispatch(receiveMatches(normalize(matches, schema.matchListSchema)));
};

