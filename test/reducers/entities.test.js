import { normalize } from 'normalizr';
import deepFreeze from 'deep-freeze';
import entities, { matches } from '../../src/frontend/reducers/entities';
import * as types from '../../src/frontend/constants/ActionTypes';
import { matchListSchema } from '../../src/frontend/actions/schema';

describe('Entities', () => {
  const initialState = {
    matches: {},
    players: {},
    teams: {}
  }
  deepFreeze(initialState);

  it('Returns the initial state when action type is not defined', () => {
    const action = { type: 'NOT_AN_ACTION' };
    expect(entities(initialState, action)).toEqual(initialState);
  });

  it('RECEIVE_MATCHES action populates new matches,players,teams', () => {
    const jsonData = [{ _id: 1, teams: [{ _id: 1, players: [{ _id: 1 }] }] }];
    const normalized = normalize(jsonData, matchListSchema);
    const action = { type: types.RECEIVE_MATCHES, response: normalized };
    const expectedState = { ...initialState, ...normalized.entities };
    expect(entities(initialState, action)).toEqual(expectedState);
  });
});

describe('Matches', () => {
  const initialState = {
    1: {
      _id: 1,
      plays: []
    }
  };
  deepFreeze(initialState);

  it('ADD_PLAY action adds a new play on the plays array of the match', () => {
    const play = { action: 'GOAL' };
    const action = { type: types.ADD_PLAY, play, matchId: 1 };
    const expectedState = {
      1: {
        _id: 1,
        plays: [play]
      }
    };
    expect(matches(initialState, action)).toEqual(expectedState);
  });
});
