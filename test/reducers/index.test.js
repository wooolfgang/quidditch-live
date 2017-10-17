import { normalize } from 'normalizr';
import deepFreeze from 'deep-freeze';
import { result, isFetching, ui } from '../../src/frontend/reducers';
import * as types from '../../src/frontend/constants/ActionTypes';
import { matchListSchema } from '../../src/frontend/constants/Schema';

describe('Result', () => {
  it('Returns the initial state when action type is not defined', () => {
    const initialState = [];
    deepFreeze(initialState);
    const action = { type: 'NOT_AN_ACTION' };
    expect(result(initialState, action)).toEqual(initialState);
  });

  it('Creates a new result state when action type is RECEIVE_MATCHES', () => {
    const initialState = [];
    deepFreeze(initialState);
    const jsonData = [{ _id: 1, teams: [{ _id: 1, players: [{ _id: 1 }] }] }];
    const normalized = normalize(jsonData, matchListSchema);
    const action = { type: types.MATCH_RECEIVE, response: normalized };
    expect(result(initialState, action)).toEqual([1]);
  });
});

describe('isFetchin', () => {
  const initialState = false;
  deepFreeze(initialState);

  it('Returns true when action REQUEST_MATCHES action is fired', () => {
    const action = { type: types.MATCH_REQUEST };
    expect(isFetching(initialState, action)).toEqual(true);
  })

  it('Returns false when action RECEIVE_MATCHES is fired', () => {
    const action = { type: types.MATCH_RECEIVE };
    expect(isFetching(initialState, action)).toEqual(false);
  })
})


describe('ui', () => {
  const initialState = {};
  deepFreeze(initialState);

  it('Returns a new match id when action UI_SET_VIEWED_MATCH is fired', () => {
    const action = { type: types.UI_SET_VIEWED_MATCH, matchId: 122 };
    expect(ui(initialState, action)).toEqual({ viewedMatchId: 122 });
  })
})
