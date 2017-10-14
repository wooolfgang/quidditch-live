import React from 'react';

const StatRow = ({ name, type, fgMade, fgAttemps, blocks, snitchCaught }) => (
  <tr>
    <td> {name} </td>
    <td> {type} </td>
    <td> {fgMade} </td>
    <td> {fgAttemps} </td>
    <td> {blocks} </td>
    <td> {snitchCaught} </td>
  </tr>
);

export default StatRow;
