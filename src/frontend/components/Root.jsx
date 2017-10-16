import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import Main from './Main';
import Header from './Header/Header';
import BoxScoreContainer from '../containers/BoxScoreContainer';
import MatchHandlerContainer from '../containers/MatchHandlerContainer';
import theme from '../assets/theme';

const Root = ({ store }) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={Main} />
          <Route path="/boxscore/:id?/:id?" component={BoxScoreContainer} />
          <Route path="/match/:id" component={MatchHandlerContainer} />
        </div>
      </Router>
    </ThemeProvider>
  </Provider>
);

export default Root;