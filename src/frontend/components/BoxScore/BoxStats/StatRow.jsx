import React from 'react';
import { string, number } from 'prop-types';

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

StatRow.propTypes = {
  name: string.isRequired,
  type: string.isRequired,
  fgMade: number.isRequired,
  fgAttemps: number.isRequired,
  blocks: number.isRequired,
  snitchCaught: number.isRequired,
};

export default StatRow;
