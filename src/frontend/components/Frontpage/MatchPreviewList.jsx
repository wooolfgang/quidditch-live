import React from 'react';
import { array } from 'prop-types';
import styled from 'styled-components';
import MatchPreviewContainer from '../../containers/MatchPreviewContainer';

const StyledDiv = styled.div`
  padding: 40px 40px;
  margin: auto;
  width: 70%;
`;

const Heading = styled.h2`
  margin: 0px;
  padding: 5px;
  margin-bottom: 15px;
  width: 300px;
  font-size: 21px;
  border-bottom: 1px solid ${props => props.theme.neutralThree};
  font-family: ${props => props.theme.normalFont};
`;

const MatchesDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: auto;
`;

const MatchPreviewList = ({ matches }) => {
  return (
    <StyledDiv>
      <Heading> Live Matches</Heading>
      <MatchesDiv>
        {
          matches.map(match => <MatchPreviewContainer match={match} key={match._id} />)
        }
      </MatchesDiv>
    </StyledDiv>
  );
}

MatchPreviewList.propTypes = {
  matches: array.isRequired,
};

export default MatchPreviewList;