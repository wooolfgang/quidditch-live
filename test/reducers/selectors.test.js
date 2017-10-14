import { filterById, filterByIds, filterByProp, computeTeamScore, computePlayerStat } from '../../src/frontend/reducers/selectors';
import * as statTypes from '../../src/frontend/constants/StatTypes';

describe('filterById', () => {
  it('Returns a single object based on the id', () => {
    const array = {
      1: {
        id: 1,
        name: 'Potato'
      }
    }
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
    expect(filterByIds(array, [1, 2])).toEqual([{ id: 1, name: 'Ex' }, { id: 2, name: 'Bo' }]);
  })
});

describe('computeScore', () => {
  it('Outputs the score based on the plays made', () => {
    const plays = [
      { action: 'GOAL_MADE', teamId: '1' },
      { action: 'GOAL_MADE', teamId: '2' },
      { action: 'GOAL_MADE', teamId: '1' },
      { action: 'GOAL_MISSED', teamId: '2' },
      { action: 'GOAL_MADE', teamId: '1' }
    ]
    expect(computeTeamScore(plays, '1')).toEqual(30);
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
    expect(filterByProp(array, 'id', 1)).toEqual([{ id: 1 }, { id: 1 }])
  })
})

describe('computePlayerStat', () => {
  it('Computes the stat of the player', () => {
    const plays = [
      { action: 'GOAL_MADE', playerId: 1 },
      { action: 'GOAL_MADE', playerId: 2 },
      { action: 'GOAL_MISSED', playerId: 1 },
      { action: 'GOAL_MADE', playerId: 2 }
    ];
    expect(computePlayerStat(1, plays, statTypes.FIELD_GOAL_MADE)).toEqual(1);
  })
})