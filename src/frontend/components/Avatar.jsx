import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';

const StyledDiv = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  padding: 8px;
  margin: 6.5px;
  display: inline-block;
  background: url(${props => props.imageUrl}) center center no-repeat;
  width: ${props => props.width && props.width};
`;

const Avatar = ({ imageUrl, width }) => (
  <StyledDiv width={width} imageUrl={imageUrl} />
);

Avatar.propTypes = {
  imageUrl: string.isRequired,
  width: string,
};

export default Avatar;
