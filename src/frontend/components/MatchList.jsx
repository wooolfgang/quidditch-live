import React from 'react';
import styled from 'styled-components';
import MatchContainer from '../containers/MatchContainer';

const StyledDiv = styled.div`
  padding: 40px 40px;
`
const MatchList = ({ matches }) => {
  if (!matches || matches.length === 0) {
    return <p> Loading ... </p>
  }

  return (
    <StyledDiv>
      {
        matches.map(match => <MatchContainer match={match} key={match._id} />)
      }
    </StyledDiv>
  );
}

export default MatchList;