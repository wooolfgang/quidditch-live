import React from 'react';
import styled from 'styled-components';

const Player = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 999px;
  display: inline-block;
  border: 1px solid gray;
  cursor: pointer;
`

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  width: 50%;
  margin: auto;
  margin-bottom: 15px;
`;

const Players = () => (
  <div>
    <Container>
      <Player />
    </Container>
    <Container>
      <Player />
      <Player />
      <Player />
    </Container>
    <Container>
      <Player />
      <Player />
    </Container>
    <Container>
      <Player />
    </Container>
  </div>
);

export default Players;