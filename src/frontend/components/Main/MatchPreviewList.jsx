import React from 'react';
import styled from 'styled-components';
import MatchPreviewContainer from '../../containers/MatchPreviewContainer';

const StyledDiv = styled.div`
  padding: 40px 40px;
`
const MatchPreviewList = ({ matches }) => {
  return (
    <StyledDiv>
      {
        matches.map(match => <MatchPreviewContainer match={match} key={match._id} />)
      }
    </StyledDiv>
  );
}

export default MatchPreviewList;