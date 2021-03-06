import React from 'react';
import { object } from 'prop-types';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import FrontpageContainer from '../containers/FrontpageContainer';
import BoxScoreContainer from '../containers/BoxScoreContainer';
import MatchHandlerContainer from '../containers/MatchHandlerContainer';
import HeaderContainer from '../containers/HeaderContainer';
import UserMatchesContainer from '../containers/UserMatchesContainer';
import theme from '../assets/theme';

const Root = ({ store }) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Router>
        <div>
          <HeaderContainer />
          <Route exact path="/" component={FrontpageContainer} />
          <Route path="/boxscore/:id?/:id?" component={BoxScoreContainer} />
          <Route path="/match/:id" component={MatchHandlerContainer} />
          <Route path="/matches/" component={UserMatchesContainer} />
        </div>
      </Router>
    </ThemeProvider>
  </Provider>
);

Root.propTypes = {
  store: object.isRequired,
};

export default Root;