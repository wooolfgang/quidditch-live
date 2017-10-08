import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import globalStyles from './assets/theme/global';
import Root from './components/Root';

globalStyles();

ReactDOM.render(<Root store={store} />, document.getElementById('mount-point'));

if (module.hot) {
  module.hot.accept();
}
