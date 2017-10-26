import React from 'react';
import { bool, object, func } from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Header from '../components/Header/Header';
import { login, logout, authenticate } from '../actions/UserActions';
import client from '../client';

class HeaderContainer extends React.Component {
  static propTypes = {
    isAuthenticated: bool.isRequired,
    user: object,
    authenticate: func.isRequired,
    handleLogin: func.isRequired,
    handleLogout: func.isRequired,
  }

  async componentDidMount() {
    const { authenticate } = this.props;
    await authenticate(client);
  }

  render() {
    return (
      <Header {...this.props} />
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.user.isAuthenticated,
  user: state.user.currentUser,
});

const mapDispatchToProps = dispatch => ({
  authenticate: api => dispatch(authenticate(api)),
  handleLogin: (api, username, password) => dispatch(login(api, username, password)),
  handleLogout: api => dispatch(logout(api)),
});

HeaderContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(HeaderContainer));
export default HeaderContainer;
