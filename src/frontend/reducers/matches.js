import { REQUEST_MATCHES, RECEIVE_MATCHES } from '../constants/ActionTypes';

const matches = (state = { isFetching: false, items: [] }, action) => {
  switch (action.type) {
    case REQUEST_MATCHES:
      return { ...state, isFetching: true };

    case RECEIVE_MATCHES:
      return { ...state, isFetching: false, items: state.items.concat(action.matches) };

    default:
      return state;
  }
};

export default matches;
