import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { offline } from 'redux-offline';
import offlineConfig from 'redux-offline/lib/defaults';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';
import client from '../frontend/client';

const middlewares = [thunkMiddleware];

if (process.env.NODE_ENV !== 'production') {
  middlewares.push(createLogger());
}

offlineConfig.effect = async (effect) => {
  const {
    url, query, method, id,
  } = effect;

  if (method === 'patch' || method === 'get' || method === 'remove' || method === 'update') {
    return client.service(url)[method](id, query);
  }
  return client.service(url)[method](query);
};

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middlewares),
    offline(offlineConfig),
  ),
);

export default store;
