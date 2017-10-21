import React from 'react';
import styled from 'styled-components';
import Avatar from '../Avatar';
import client from '../../client';

const Container = styled.div`
  width: 40px;

  .logout-container {
    position: relative;
  }

  .logout {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    margin-top: 10px;
    width: 110px;
    height: 85px;
    right: 5px;
    background: white;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  }

  #logout-btn {
    border: none;
    color: #333;
    font-size: 13px;
    background: none;
    outline: none;
    cursor: pointer;
    padding: 5px;
    width: 100%;
    margin: auto;

    :hover {
      background: ${props => props.theme.bg};
      color: white;
    }
  }
`;

const StyledDiv = styled.div`
  width: 37.5px;
  height: 37.5px;
  margin: auto;
  border-radius: 999px;
  border: 1px solid ${props => props.theme.neutralOne};
  background: url(${props => props.imageUrl}) center center no-repeat;
  cursor: pointer;
  transition: .1s;

  :hover {
    opacity: 0.9;
  }
`;

class DropdownUser extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      viewed: false
    }
  }

  componentDidMount = () => {
    document.addEventListener('click', this.handleOutsideClick, false);
  }

  componentWillUnmount = () => {
    document.removeEventListener('click', this.handleOutsideClick, false);
  }

  handleOutsideClick = (e) => {
    if (!this.node.contains(e.target)) {
      this.setState({ viewed: false });
    }
  };

  toggleView = () => {
    this.setState({ viewed: !this.state.viewed });
  }

  handleLogout = () => {
    this.props.handleLogout(client);
  }

  render() {
    const { user } = this.props;
    return (
      <div ref={node => this.node = node}>
        <Container>
          <StyledDiv
            ref={node => this.btnNode = node}
            imageUrl={`https://api.adorable.io/avatars/30/${user._id}`}
            onClick={this.toggleView}
          />
          <div className="logout-container">
            {
              this.state.viewed ?
                <div className="logout">
                  <button id="logout-btn" onClick={this.handleLogout}> Logout </button>
                </div> : undefined
            }
          </div>
        </Container>
      </div>
    )
  }
}

export default DropdownUser;