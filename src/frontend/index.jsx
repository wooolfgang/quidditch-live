import React from 'react';
import ReactDOM from 'react-dom';
import { HashHistory as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import globalStyles from './assets/theme/global';
import App from './App';

globalStyles();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('mount-point'));

if (module.hot) {
  module.hot.accept();
}
