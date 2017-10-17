import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledDiv = styled.div`
  display: inline-block;
  width: 425px;
  height: 100px;
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: .2s;
`;

class MatchPreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alternateView: false,
    }
  }

  onHandleHover = (e) => {
    this.setState({ alternateView: true });
  }

  onHandleLeave = (e) => {
    this.setState({ alternateView: false });
  }

  render() {
    const { teams, match } = this.props;
    return (
      <StyledDiv onMouseEnter={e => this.onHandleHover(e)} onMouseLeave={e => this.onHandleLeave(e)}>
        {
          this.state.alternateView ?
            <Link to={`/boxscore/${match._id}`}> BOXSCORE </Link> :
            <div>
              <span> {teams[0].name}  VS  {teams[1].name} </span>
              <span> {match.dateStarted} </span>
            </div>
        }
      </StyledDiv>
    )
  }
}

export default MatchPreview;