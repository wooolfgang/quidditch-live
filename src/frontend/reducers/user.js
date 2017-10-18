import * as types from '../constants/ActionTypes';

const initialState = { currentUser: undefined, isAuthenticated: false, error: undefined };

const user = (state = initialState, action) => {
  switch (action.type) {
    case types.USER_AUTHENTICATE_SUCCESS:
      return {
        ...state,
        currentUser: action.user,
        isAuthenticated: action.isAuthenticated,
        error: undefined,
      };

    case types.USER_LOGOUT:
      return {
        ...state,
        currentUser: undefined,
        isAuthenticated: action.isAuthenticated,
        error: undefined,
      };

    case types.USER_AUTHENTICATE_FAIL:
      return {
        ...state,
        error: action.error,
      };

    default:
      return state;
  }
};

export default user;
