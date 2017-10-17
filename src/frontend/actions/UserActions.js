import * as types from '../constants/ActionTypes';

const setUser = user => ({ type: types.USER_SET, user });
const setUserAuthenticated = authenticated => ({ type: types.USER_AUTHENTICATED, authenticated });
const removeUser = () => ({ type: types.USER_REMOVE });
const error = e => ({ type: types.USER_AUTHENTICATE_FAIL, error: e });

export const authenticate = api => async (dispatch) => {
  try {
    const token = await api.authenticate();
    const payload = await api.passport.verifyJWT(token.accessToken);
    const user = await api.service('api/users').get(payload.userId);
    dispatch(setUser(user));
    dispatch(setUserAuthenticated(true));
  } catch (e) {
    dispatch(error(e));
  }
};

export const login = (username, password, api) => async (dispatch) => {
  try {
    const token = await api.authenticate({
      username,
      password,
      strategy: 'local',
    });
    const payload = await api.passport.verifyJWT(token.accessToken);
    const user = await api.service('api/users').get(payload.userId);
    dispatch(setUser(user));
    dispatch(setUserAuthenticated(false));
  } catch (e) {
    dispatch(error(e));
  }
};

export const logout = api => async (dispatch) => {
  await api.logout();
  dispatch(removeUser());
};
