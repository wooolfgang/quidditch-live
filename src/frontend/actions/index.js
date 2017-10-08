import * as types from '../constants/ActionTypes';
import client from './client';

export const requestMatches = () => ({ type: types.REQUEST_MATCHES });

export const receiveMatches = matches => ({ type: types.RECEIVE_MATCHES, matches });

export const fetchMatches = () => async (dispatch) => {
  dispatch(requestMatches());
  const matches = await client.service('api/matches').find();
  dispatch(receiveMatches(matches));
};

