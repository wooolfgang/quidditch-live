import deepFreeze from 'deep-freeze';
import { getCurrentMatch, filterById, filterByIds, filterByProp, computeTeamStat, computePlayerStat } from '../../src/frontend/reducers/selectors';
import * as statTypes from '../../src/frontend/constants/StatTypes';
import * as playTypes from '../../src/frontend/constants/PlayTypes';

describe('getCurrentMatch', () => {
  it('Returns the current match based on the viewed match on the state', () => {
    const state = {
      entities: {
        matches: {
          1: { id: 1 },
          2: { id: 2 }
        }
      },
      ui: {
        viewedMatchId: 1
      }
    }
    expect(getCurrentMatch(state)).toEqual({ id: 1 });
  });
});

describe('filterById', () => {
  it('Returns a single object based on the id', () => {
    const array = {
      1: {
        id: 1,
        name: 'Potato'
      }
    }
    deepFreeze(array);
    expect(filterById(array, 1)).toEqual({ id: 1, name: 'Potato' })
  })
});

describe('filterByIds', () => {
  it('Returns an array based on the passed ids', () => {
    const array = {
      1: {
        id: 1,
        name: 'Ex'
      },
      2: {
        id: 2,
        name: 'Bo'
      }
    }
    deepFreeze(array);
    expect(filterByIds(array, [1, 2])).toEqual([{ id: 1, name: 'Ex' }, { id: 2, name: 'Bo' }]);
  })
});

describe('computeScore', () => {
  const plays = [
    { action: 'GOAL_MADE', teamId: 1 },
    { action: 'GOAL_MADE', teamId: 2 },
    { action: 'GOAL_MADE', teamId: 1 },
    { action: 'GOAL_MISSED', teamId: 2 },
    { action: 'GOAL_MADE', teamId: 1 },
    { action: 'GOAL_MISSED', teamId: 1 },
    { action: 'GOAL_BLOCKED', teamId: 1 },
  ];
  deepFreeze(plays);
  it('Outputs the correct team score', () => {
    expect(computeTeamStat(1, plays, statTypes.TEAM_SCORE)).toEqual(30);
  })
  it('Outputs the goals made by the team', () => {
    expect(computeTeamStat(1, plays, statTypes.TEAM_GOALS_MADE)).toEqual(3);
  })
  it('Outputs the goal attemps by the team', () => {
    expect(computeTeamStat(1, plays, statTypes.TEAM_GOALS_ATTEMPS)).toEqual(4);
  })
  it('Outputs the blocks made by the team', () => {
    expect(computeTeamStat(1, plays, statTypes.TEAM_BLOCKS_MADE)).toEqual(1);
  })
})

describe('filterByProp', () => {
  it('Filters an array based on property', () => {
    const array = [
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 1 }
    ];
    deepFreeze(array);
    expect(filterByProp(array, 'id', 1)).toEqual([{ id: 1 }, { id: 1 }])
  })
})

describe('computePlayerStat', () => {
  it('Computes the stat of the player', () => {
    const plays = [
      { action: 'GOAL_MADE', playerId: 1 },
      { action: 'GOAL_MADE', playerId: 2 },
      { action: 'GOAL_MISSED', playerId: 1 },
      { action: 'GOAL_MADE', playerId: 2 },
      { action: 'GOAL_BLOCKED', playerId: 1 },
    ];
    deepFreeze(plays);
    expect(computePlayerStat(1, plays, statTypes.FIELD_GOAL_MADE)).toEqual(1);
    expect(computePlayerStat(1, plays, statTypes.FIELD_GOAL_ATTEMPS)).toEqual(2);
    expect(computePlayerStat(1, plays, statTypes.BLOCK_MADE)).toEqual(1);
  })
})