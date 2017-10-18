import * as types from '../../src/frontend/constants/ActionTypes';
import * as actions from '../../src/frontend/actions/UserActions';

describe('loginUser', () => {
  it('Returns the correct action', () => {
    const action = {
      type: types.USER_AUTHENTICATE_SUCCESS, isAuthenticated: true, user: { name: 'x' }
    };
    expect(actions.loginUser({ name: 'x' })).toEqual(action);
  });
});

describe('logoutUser', () => {
  it('Returns the correct action', () => {
    const action = {
      type: types.USER_LOGOUT,
      isAuthenticated: false
    }
    expect(actions.logoutUser()).toEqual(action);
  });
});

describe('error', () => {
  it('Returns the correct action', () => {
    const action = {
      type: types.USER_AUTHENTICATE_FAIL,
      error: 'Not authenticated'
    }
    expect(actions.error('Not authenticated')).toEqual(action);
  });
});

