import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Middle from './Middle';
import Players from './Players';
import { filterById, filterByIds } from '../../reducers';
import { submitPlay } from '../../actions';

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

const Container = styled.div`
  flex: 1;
`;

class MatchHandler extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPlay: {
        action: undefined,
        player: undefined,
        teamId: undefined,
      }
    }
  }

  selectAction = action => {
    const { currentPlay } = this.state;
    const updatedPlay = { ...currentPlay, action: action };
    this.setState({ currentPlay: updatedPlay });
  }

  selectPlayer = (player, teamId) => {
    const { currentPlay } = this.state;
    const updatedPlay = { ...currentPlay, player, teamId };
    this.setState({ currentPlay: updatedPlay });
  }

  resetCurrentPlay = () => {
    const updatedPlay = { action: undefined, player: undefined };
    this.setState({ currentPlay: updatedPlay });
  }

  submitPlay = () => {
    this.props.submitPlay(this.state.currentPlay, this.props.match._id);
  }

  render() {
    const { match, teamA, teamB, teamAPlayers, teamBPlayers } = this.props;
    return (
      <StyledDiv>
        <Container >
          <Players
            onPlayerSelect={this.selectPlayer}
            players={teamAPlayers}
          />
        </Container>
        <Container>
          <Middle
            match={match}
            teamA={teamA}
            teamB={teamB}
            onActionSelect={this.selectAction}
            submitPlay={this.submitPlay}
          />
        </Container>
        <Container>
          <Players
            onPlayerSelect={this.selectPlayer}
            players={teamBPlayers}
          />
        </Container>
      </StyledDiv>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const teamAId = ownProps.match.teams[0];
  const teamBId = ownProps.match.teams[1];
  return {
    teamA: filterById(state.entities.teams, teamAId),
    teamB: filterById(state.entities.teams, teamBId),
    teamAPlayers: filterByIds(state.entities.players, state.entities.teams[teamAId].players),
    teamBPlayers: filterByIds(state.entities.players, state.entities.teams[teamBId].players)
  };
}

const mapDispatchToProps = dispatch => ({
  submitPlay: (play, matchId) => dispatch(submitPlay(play, matchId))
})

MatchHandler = connect(mapStateToProps, mapDispatchToProps)(MatchHandler);
export default MatchHandler;