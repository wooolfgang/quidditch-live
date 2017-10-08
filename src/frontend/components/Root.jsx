import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import App from './App';
import Header from './Header';
import theme from '../assets/theme';

const Root = ({ store }) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Router>
        <div>
          <Header />
          <Route path="/" component={App} />
        </div>
      </Router>
    </ThemeProvider>
  </Provider>
);

export default Root;