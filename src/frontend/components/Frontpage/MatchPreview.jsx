import React from 'react';
import { number, string } from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledDiv = styled.div`
  display: inline-block;
  flex: 1;
  min-width: 300px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 5px;
  background: ${props => props.theme.neutralFour};
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  font-family: ${props => props.theme.normalFont};  
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 200px;
  justify-content: space-around;
  align-items: space-around;
`;

const Team = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 20px;
  font-family: ${props => props.theme.normalFont};
`;

const TeamName = styled.span`
  font-size: 18px;
  padding-bottom: 8px;
  width: 100%;
  margin-right: 50px;
  color: gray;
  border-bottom: 1px solid ${props => props.theme.neutralTwo};
`;

const TeamScore = styled.span`
  font-size: 20px;
  padding: 10px;
  border-radius: 9999px;
  min-width: 30px;
  text-align: center;
  color: gray;
`;

const StyledLink = styled(Link) `
  text-decoration: none !important;
  margin-bottom: 7px;

  :hover {
    text-decoration: underline !important;
  }
`;

class MatchPreview extends React.Component {
  state = { alternateView: false }
  static propTypes = {
    teamAScore: number.isRequired,
    teamBScore: number.isRequired,
    teamAName: string.isRequired,
    teamAName: string.isRequired,
    matchId: string.isRequired,
  }

  onHandleHover = (e) => {
    this.setState({ alternateView: true });
  }

  onHandleLeave = (e) => {
    this.setState({ alternateView: false });
  }

  render() {
    const { teamAScore, teamAName, teamBScore, teamBName, matchId } = this.props;
    return (
      <StyledDiv onMouseEnter={e => this.onHandleHover(e)} onMouseLeave={e => this.onHandleLeave(e)}>
        {
          this.state.alternateView ?
            <LinkContainer>
              <StyledLink to={`/boxscore/${matchId}`}> BOXSCORE </StyledLink>
              <StyledLink to={`/boxscore/playbyplay/${matchId}`}> PLAY BY PLAY </StyledLink>
              <StyledLink to={`/boxscore/playbyplay/${matchId}`}> TEAM COMPARISON </StyledLink>
            </LinkContainer>
            :
            <Container>
              <Team>
                <TeamName> {teamAName} </TeamName>
                <TeamScore> {teamAScore} </TeamScore>
              </Team>
              <Team>
                <TeamName> {teamBName} </TeamName>
                <TeamScore> {teamBScore} </TeamScore>
              </Team>
            </Container>
        }
      </StyledDiv>
    )
  }
}

export default MatchPreview;