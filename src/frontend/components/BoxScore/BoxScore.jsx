import React from 'react';
import styled from 'styled-components';
import Score from './Score';

const BoxScore = ({ match }) => (
  <div>
    {
      match ?
        <Score />
        :
        <h2> No match found </h2>
    }
  </div>
);

export default BoxScore;