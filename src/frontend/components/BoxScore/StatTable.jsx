import React from 'react';
import styled from 'styled-components';
import StatRowContainer from '../../containers/StatRowContainer';

const StyledTable = styled.table`
  text-align: center;

  th {
    width: 200px;
    padding: 5px;
  }

  td {
    width: 200px;
    padding: 5px;
  }
`

const StatTable = ({ players, plays }) => (
  <StyledTable>
    <thead>
      <tr>
        <th> Name </th>
        <th> Type </th>
        <th> FG Made </th>
        <th> FG Attemps </th>
        <th> Blocks </th>
        <th> Snitch Caught </th>
      </tr>
    </thead>
    <tbody>
      {
        players.map(player => <StatRowContainer {...player} plays={plays} />)
      }
    </tbody>
  </StyledTable>
);

export default StatTable;