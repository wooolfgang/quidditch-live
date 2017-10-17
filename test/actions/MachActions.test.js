import * as actions from '../../src/frontend/actions/MatchActions';
import * as types from '../../src/frontend/constants/ActionTypes';

describe('requestMatches', () => {
  it('Returns an action', () => {
    const action = { type: types.MATCH_REQUEST }
    expect(actions.requestMatches()).toEqual(action);
  });
});

describe('receiveMatches', () => {
  it('Returns the currect action', () => {
    const action = { type: types.MATCH_RECEIVE, response: 'xxx' };
    expect(actions.receiveMatches('xxx')).toEqual(action);
  });
});

describe('setCurrentMatch', () => {
  it('Returns the correct action', () => {
    const action = { type: types.UI_SET_VIEWED_MATCH, matchId: 2 };
    expect(actions.setCurrentMatch(2)).toEqual(action);
  });
});

describe('addPlay', () => {
  it('Returns the correct action', () => {
    const action = { type: types.PLAY_ADD, play: { action: 'GOAL' }, matchId: 2 };
    expect(actions.addPlay(2, { action: 'GOAL' })).toEqual(action);
  })
});