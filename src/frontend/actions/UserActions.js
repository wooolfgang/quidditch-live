import * as types from '../constants/ActionTypes';

export const loginUser = user => ({
  type: types.USER_AUTHENTICATE_SUCCESS, isAuthenticated: true, user,
});

export const logoutUser = () => ({ type: types.USER_LOGOUT, isAuthenticated: false });
export const error = e => ({ type: types.USER_AUTHENTICATE_FAIL, error: e });

export const authenticate = api => async (dispatch) => {
  try {
    const token = await api.authenticate();
    const payload = await api.passport.verifyJWT(token.accessToken);
    const user = await api.service('api/users').get(payload.userId);
    dispatch(loginUser(user));
    return user;
  } catch (e) {
    dispatch(logoutUser());
    return dispatch(error(e));
  }
};

export const login = (api, username, password) => async (dispatch) => {
  try {
    const token = await api.authenticate({
      username,
      password,
      strategy: 'local',
    });
    const payload = await api.passport.verifyJWT(token.accessToken);
    const user = await api.service('api/users').get(payload.userId);
    dispatch(loginUser(user));
    return user;
  } catch (e) {
    return dispatch(error(e));
  }
};

export const logout = api => async (dispatch) => {
  try {
    await api.logout();
    return dispatch(logoutUser());
  } catch (e) {
    console.log(e);
  }
};
