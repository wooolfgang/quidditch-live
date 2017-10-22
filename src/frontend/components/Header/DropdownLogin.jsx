import React from 'react';
import styled from 'styled-components';
import client from '../../client';

const Container = styled.div`
  width: 100px;

  button {
    font-size: 15px;
    padding: 8px;
    color: white;
    border: 1px solid white;
    cursor: pointer;
    background: none;
    outline: none;
    transition: .5s;
    font-family: ${props => props.theme.normalFont};

    :hover {
      background: white;
      color: ${props => props.theme.secondary};
    }
  }

  .login-container {
    position: relative;
  }

  .login-form {
    z-index: 9999;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    padding: 20px;
    margin-top: 10px;
    width: 200px;
    right: 30px;
    background: white;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);

    input {
      width: 90%;
      padding: 8px;
      margin-bottom: 10px;
      border: 0;
      outline: 0;
      background: ${props => props.theme.neutralOne};
      font-weight: 300;
      border-radius: 2px;
      &:last-child {
        margin-bottom: 0;
      }
    }

    input[type="submit"] {
      background: ${props => props.theme.bg};
      color: white;
      cursor: pointer;
    }
  }
`;

class DropdownLogin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      viewed: false,
      username: '',
      password: '',
    }
  }

  componentDidMount() {
    document.addEventListener('click', this.handleOutsideClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleOutsideClick, false);
  }

  toggleView = () => {
    this.setState({ viewed: !this.state.viewed });
  }

  handleOutsideClick = (e) => {
    if (!this.node.contains(e.target)) {
      this.setState({ viewed: false });
    } else if (this.btnNode.contains(e.target)) {
      this.toggleView();
    }
  }

  handleLogin = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    this.props.handleLogin(username, password, client);
  }

  handleInput = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  }

  render() {
    return (
      <div ref={node => this.node = node}>
        <Container>
          <button ref={node => this.btnNode = node}>
            Sign In
          </button>
          <div className="login-container">
            {
              this.state.viewed ?
                <form className="login-form">
                  <input type="text" id="username" placeholder="Username" onChange={this.handleInput} />
                  <input type="password" id="password" placeholder="Password" onChange={this.handleInput} />
                  <input type="submit" value="SUBMIT" onClick={this.handleLogin} />
                </form> : undefined
            }
          </div>
        </Container>
      </div>
    )
  }
}

export default DropdownLogin;