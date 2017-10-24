import React from 'react';
import styled from 'styled-components';
import uuidv1 from 'uuid/v1';
import FeaturedPlay from './FeaturedPlay';

const StyledDiv = styled.div`
  width: 70vw;
  height: 75%;
  margin: auto;
  display: flex;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
`;

const First = styled.div`
  flex: 3;
  background: #FAFAFA;
  display: flex;
  flex-direction: column;
  border-right: 1px solid ${props => props.theme.neutralOne};
`;

const Second = styled.div`
  flex: 2;
  overflow-y: scroll;
  flex-direction: column;
  background: white;
  padding: 8px;
  display: flex;
`;

const Team = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px;
`;

const TeamName = styled.p`
  font-size: 24px;
  padding-bottom: 8px;
  border-bottom: 1px solid lightgray;
  width: 100%;
  color: ${props => props.theme.secondary};
`;

const TeamScore = styled.p`
  font-size: 28px;
  padding: 10px;
  border-radius: 9999px;
  min-width: 30px;
  text-align: center;
  background: ${props => props.theme.fg};
  color: ${props => props.theme.neutralTwo};
`;

const P = styled.p`
  margin: auto;
  font-size: 18px;
  color: gray;
  padding: 7px;
  border-radius: 5px;
  border: 1px solid ${props => props.theme.neutralThree};  
  font-family: ${props => props.theme.normalFont};
`;

const FeaturedMatch = ({ teamAScore, teamBScore, teamAName, teamBName, plays, matchStarted }) => (
  <StyledDiv>
    <First>
      <Team>
        <TeamName>{teamAName}</TeamName>
        <TeamScore>{teamAScore}</TeamScore>
      </Team>
      <Team>
        <TeamName>{teamBName}</TeamName>
        <TeamScore>{teamBScore}</TeamScore>
      </Team>
    </First>
    <Second>
      {
        plays.length === 0 ?
          <P> No plays yet... </P>
          : plays.slice().reverse().map(play =>
            <FeaturedPlay
              playerId={play.playerId}
              player={play.player}
              action={play.action}
              timestamp={play.timestamp}
              matchStarted={new Date(matchStarted).getTime()}
              key={uuidv1()}
            />
          )
      }
    </Second>
  </StyledDiv>
);

export default FeaturedMatch;