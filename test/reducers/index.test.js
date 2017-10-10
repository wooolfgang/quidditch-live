import { normalize } from 'normalizr';
import { entities, result, entitiesInitState, getMatches, getTeams, getMatchById } from '../../src/frontend/reducers';
import * as types from '../../src/frontend/constants/ActionTypes';
import { matchListSchema } from '../../src/frontend/actions/schema';

describe('Entities', () => {
  it('Returns the initial state when action type is not defined', () => {
    const initialState = entitiesInitState;
    const action = { type: 'NOT_AN_ACTION' };
    expect(entities(initialState, action)).toEqual(initialState);
  });
  it('REQUEST_MATCHES action modifies isFetching: true', () => {
    const initialState = entitiesInitState;
    const action = { type: types.REQUEST_MATCHES };
    const expectedState = { ...initialState, isFetching: true };
    expect(entities(initialState, action)).toEqual(expectedState);
  });
  it('RECEIVE_MATCHES action populates new matches,players,teams', () => {
    const initialState = entitiesInitState;
    const jsonData = [{ _id: 1, teams: [{ _id: 1, players: [{ _id: 1 }] }] }];
    const normalized = normalize(jsonData, matchListSchema);
    const action = { type: types.RECEIVE_MATCHES, response: normalized };
    const expectedState = { ...entitiesInitState, isFetching: false, ...normalized.entities };
    expect(entities(initialState, action)).toEqual(expectedState);
  });
});

describe('Result', () => {
  it('Returns the initial state when action type is not defined', () => {
    const initialState = [];
    const action = { type: 'NOT_AN_ACTION' };
    expect(result(initialState, action)).toEqual(initialState);
  });
  it('Creates a new result state when action type is RECEIVE_MATCHES', () => {
    const initialState = [];
    const jsonData = [{ _id: 1, teams: [{ _id: 1, players: [{ _id: 1 }] }] }];
    const normalized = normalize(jsonData, matchListSchema);
    const action = { type: types.RECEIVE_MATCHES, response: normalized };
    expect(result(initialState, action)).toEqual([1]);
  });
});

describe('getMatches', () => {
  it('Filters the matches array with the corresponding ids', () => {
    const matches = {
      1: {
        _id: 1,
      },
      2: {
        _id: 2,
      },
    };
    const filter = [1, 2];
    expect(getMatches(matches, filter)).toEqual([{ _id: 1 }, { _id: 2 }]);
  });
});

describe('getTeams', () => {
  it('Filters the teams array with the corresponding ids', () => {
    const teams = {
      1: {
        _id: 1,
      },
      2: {
        _id: 2,
      },
    };
    const filter = [1];
    expect(getTeams(teams, filter)).toEqual([{ _id: 1 }]);
  });
});

describe('getMatchesById', () => {
  it('Filters the matches with the corresponding id', () => {
    const matches = {
      1: {
        _id: 1
      },
      5: {
        _id: 5
      }
    }
    expect(getMatchById(matches, 5)).toEqual({ _id: 5 });
  })
})
