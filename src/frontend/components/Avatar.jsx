import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  padding: 10px;
  margin: 8px;
  display: inline-block;
  background: url(${props => props.imageUrl}) center center no-repeat;
`;

const Avatar = ({ imageUrl }) => (
  <StyledDiv imageUrl={imageUrl} />
);

export default Avatar;
