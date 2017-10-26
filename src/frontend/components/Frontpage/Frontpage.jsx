import React from 'react';
import { array, object } from 'prop-types';
import styled from 'styled-components';
import MatchPreviewList from './MatchPreviewList';
import FeaturedMatchContainer from '../../containers/FeaturedMatchContainer';

const StyledDiv = styled.div`
  min-height: calc(100vh - 70px);
`;

const UpperContainer = styled.div`
  height: 50vh;
  background: ${props => props.theme.fg};
`;

const Banner = styled.div`
  height: 12%;
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  font-family: ${props => props.theme.normalFont};

  span {
    color: white;
    margin: auto;
  }
`;

const Frontpage = ({ matches, featuredMatch }) => (
  <StyledDiv>
    <UpperContainer>
      <Banner>
        <span> Quidditch Live helps you create, manage, and track games in real-time. </span>
      </Banner>
      {
        featuredMatch &&
        <FeaturedMatchContainer featuredMatch={featuredMatch} />
      }
    </UpperContainer>
    <MatchPreviewList matches={matches} />
  </StyledDiv>
);

Frontpage.propTypes = {
  matches: array.isRequired,
  featuredMatch: object,
};

export default Frontpage;