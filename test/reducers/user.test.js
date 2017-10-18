import deepFreeze from 'deep-freeze';
import * as types from '../../src/frontend/constants/ActionTypes';
import user from '../../src/frontend/reducers/user';

describe('User', () => {
  const initialState = { currentUser: undefined, isAuthenticated: false, error: undefined };

  it('Returns the intial state when action is not defined', () => {
    const action = { type: 'NOT_AN_ACTION' };
    deepFreeze(initialState);
    expect(user(initialState, action)).toEqual(initialState);
  });

  it('Adds a new user and makes isAuthenticated true and error undefined when loginUser is dispatched', () => {
    const action = { type: types.USER_AUTHENTICATE_SUCCESS, user: { name: 'Li Arolf' }, isAuthenticated: true };
    const initialState = { currentUser: undefined, isAuthenticated: false, error: 'x' };
    deepFreeze(initialState);
    const expectedState = {
      currentUser: action.user,
      isAuthenticated: true,
      error: undefined,
    }
    expect(user(initialState, action)).toEqual(expectedState);
  });

  it('Removed the user and makes isAuthenticated to false when logoutUser is dispatched', () => {
    const action = { type: types.USER_LOGOUT, isAuthenticated: false };
    const initialState = { currentUser: { name: 'Cool guy' }, isAuthenticated: true, error: 'xxx' };
    deepFreeze(initialState);
    const expectedState = {
      currentUser: undefined,
      isAuthenticated: false,
      error: undefined,
    }
    expect(user(initialState, action)).toEqual(expectedState);
  });

  it('Adds an error when error is dispatched', () => {
    const action = { type: types.USER_AUTHENTICATE_FAIL, error: 'Failed to authenticated' };
    deepFreeze(initialState);
    const expectedState = {
      currentUser: undefined,
      isAuthenticated: false,
      error: action.error
    }
    expect(user(initialState, action)).toEqual(expectedState);
  });
});