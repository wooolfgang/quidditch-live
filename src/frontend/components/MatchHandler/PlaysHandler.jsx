import React from 'react';
import styled from 'styled-components';
import * as playTypes from '../../constants/PlayTypes';
import Play from './Play';

const Heading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  h3 {
    width: 125px;
    margin: 0px;
  }

  h2 {
    padding: 8px;
    border-radius: 999px;
    border: 1px solid ${props => props.theme.neutralThree};
    color: ${props => props.theme.bg};
    font-family: ${props => props.theme.serifFont};
  }
`

const PlaysContainer = styled.div`
  text-align: center;
`

const Button = styled.button`
  width: 100%;
  border: none;
  font-size: 13.5px;
  padding: 10px;
  color: white;
  cursor: pointer;
  background: ${props => props.theme.fg};

  :disabled {
    opacity: 0.8; 
    cursor: not-allowed;
  }
`

const PlaysHandler = ({ teamAName, teamBName, teamAScore, teamBScore, onActionSelect, submitPlay, currentPlay }) => (
  <div>
    <Heading>
      <h3>{teamAName} </h3>
      <h2>{teamAScore} </h2>
      VS
      <h2>{teamBScore} </h2>
      <h3>{teamBName} </h3>
    </Heading>
    <PlaysContainer>
      {
        Object.keys(playTypes).map(type =>
          <Play onClick={() => onActionSelect(type)} key={type} chosen={type === currentPlay}>
            {type.split('_').join(' ')}
          </Play>
        )
      }

    </PlaysContainer>
    <Button disabled={!currentPlay && true} onClick={submitPlay}>
      {!currentPlay ? 'CHOOSE A PLAY' : 'SUBMIT PLAY'}
    </Button>
  </div >
);

export default PlaysHandler;
