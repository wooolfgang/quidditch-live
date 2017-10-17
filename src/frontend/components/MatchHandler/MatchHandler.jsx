import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PlaysHandler from './PlaysHandler';
import Players from './Players';
import { filterById, filterByIds, computeTeamStat } from '../../reducers/selectors';
import { submitPlay } from '../../actions/MatchActions';
import * as statTypes from '../../constants/StatTypes';

const StyledDiv = styled.div`
  display: flex;
  align-items: space-between;
  justify-content: center;
  width: 90%;
  height: 400px;
  margin: auto;
  margin-top: 40px;
  margin-bottom: 30px;
  padding: 20px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  background: ${props => props.theme.neutralTwo};
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
        playerId: undefined,
        teamId: undefined,
      }
    }
  }

  selectAction = action => {
    const { currentPlay } = this.state;
    const updatedPlay = { ...currentPlay, action: action };
    this.setState({ currentPlay: updatedPlay });
  }

  selectPlayer = (player, playerId, teamId) => {
    const { currentPlay } = this.state;
    const updatedPlay = { ...currentPlay, player, playerId, teamId };
    this.setState({ currentPlay: updatedPlay });
  }

  resetCurrentPlay = () => {
    const updatedPlay = { action: undefined, player: undefined, playerId: undefined, teamId: undefined };
    this.setState({ currentPlay: updatedPlay });
  }

  submitPlay = () => {
    this.props.submitPlay(this.props.match._id, this.state.currentPlay);
    this.resetCurrentPlay();
  }

  render() {
    const { teamA, teamB, teamAPlayers, teamBPlayers, teamAScore, teamBScore } = this.props;
    return (
      <StyledDiv>
        <Container >
          <Players
            onPlayerSelect={this.selectPlayer}
            players={teamAPlayers}
            currentPlayer={this.state.currentPlay.playerId}
            currentAction={this.state.currentPlay.action}
          />
        </Container>
        <Container>
          <PlaysHandler
            teamAName={teamA.name}
            teamBName={teamB.name}
            teamAScore={teamAScore}
            teamBScore={teamBScore}
            onActionSelect={this.selectAction}
            submitPlay={this.submitPlay}
            currentPlay={this.state.currentPlay.action}
          />
        </Container>
        <Container>
          <Players
            onPlayerSelect={this.selectPlayer}
            players={teamBPlayers}
            currentPlayer={this.state.currentPlay.playerId}
            currentAction={this.state.currentPlay.action}
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
    teamBPlayers: filterByIds(state.entities.players, state.entities.teams[teamBId].players),
    teamAScore: computeTeamStat(teamAId, ownProps.match.plays, statTypes.TEAM_SCORE),
    teamBScore: computeTeamStat(teamBId, ownProps.match.plays, statTypes.TEAM_SCORE),
  };
}

const mapDispatchToProps = dispatch => ({
  submitPlay: (play, matchId) => dispatch(submitPlay(play, matchId))
})

MatchHandler = connect(mapStateToProps, mapDispatchToProps)(MatchHandler);
export default MatchHandler;