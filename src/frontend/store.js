import thunkMiddlware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { fetchMatches } from './actions';
import rootReducer from './reducers';

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddlware),
);

store.dispatch(fetchMatches()).then(() => console.log(store.getState()));
export default store;
