import React from 'react';
import styled from 'styled-components';
import MatchPreviewContainer from '../../containers/MatchPreviewContainer';

const StyledDiv = styled.div`
  padding: 40px 40px;
`
const MatchPreviewList = ({ matches }) => {
  if (!matches || matches.length === 0) {
    return <p> Loading ... </p>
  }

  return (
    <StyledDiv>
      {
        matches.map(match => <MatchPreviewContainer match={match} key={match._id} />)
      }
    </StyledDiv>
  );
}

export default MatchPreviewList;