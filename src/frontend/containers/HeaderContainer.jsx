import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Header from '../components/Header/Header';
import { login, logout } from '../actions/UserActions';

const mapStateToProps = state => ({
  isAuthenticated: state.user.isAuthenticated,
  user: state.user.currentUser,
});

const mapDispatchToProps = dispatch => ({
  handleLogin: (username, password, api) => dispatch(login(username, password, api)),
  handleLogout: api => dispatch(logout(api)),
});

const HeaderContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
export default HeaderContainer;
