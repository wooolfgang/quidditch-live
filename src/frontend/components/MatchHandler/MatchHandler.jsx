import React from 'react';
import styled from 'styled-components';
import Middle from './Middle';
import Players from './Players';

const StyledDiv = styled.div`
  display: flex;
  align-items: space-between;
  justify-content: center;
  width: 90%;
  height: 400px;
  border: 1px solid lightgray;
  margin: auto;
  margin-top: 50px;
  padding: 20px;
`;

const LeftContainer = styled.div`
  flex: 1;
`;

const MiddleContainer = styled.div`
  flex: 1;
`;

const RightContainer = styled.div`
  flex: 1;
`;

class MatchHandler extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPlay: {
        action: undefined,
        player: undefined,
      }
    }
  }

  selectAction = action => {
    const { currentPlay } = this.state;
    const updatedPlay = { ...currentPlay, action: action };
    this.setState({ currentPlay: updatedPlay });
  }

  selectPlayer = player => {
    const { currentPlay } = this.state;
    const updatedPlay = { ...currentPlay, player: player };
    this.setState({ currentPlay: updatedPlay });
  }

  resetCurrentPlay = () => {
    const updatedPlay = { action: undefined, player: undefined };
    this.setState({ currentPlay: updatedPlay });
  }

  render() {
    const { match } = this.props;
    return (
      <StyledDiv>
        <LeftContainer >
          <Players
            onPlayerSelect={this.selectPlayer}
          />
        </LeftContainer>
        <MiddleContainer>
          {
            match ?
              <Middle
                match={match}
                onActionSelect={this.selectAction}
              /> : undefined
          }
        </MiddleContainer>
        <RightContainer>
          <Players
            onPlayerSelect={this.selectPlayer}
          />
        </RightContainer>
      </StyledDiv>
    );
  }
}

export default MatchHandler;