import React from 'react';
import MatchPreviewList from '../Frontpage/MatchPreviewList';

const UserMatches = ({ matches }) => (
  <div>
    {
      matches &&
      <MatchPreviewList matches={matches} />
    }
  </div>
);

export default UserMatches;