import * as utils from '../../src/utils';

describe('getPercentage', () => {
  it('Gives the percentage', () => {
    expect(utils.getPercentage(4, 100)).toEqual(4);
    expect(utils.getPercentage(101, 100)).toEqual(101);
  });
});

describe('getTimestampdiff', () => {
  it('Gives the difference of two timestamps', () => {
    expect(utils.getTimestampDiff(400, 500)).toEqual(-100);
    expect(utils.getTimestampDiff(600, 405)).toEqual(195);
  });
});

describe('timestampToDate', () => {
  it('Converts timestamp to days:hours:minutes:seconds format', () => {
    expect(utils.timestampToDate(6000)).toEqual('00:00:00:06');
    expect(utils.timestampToDate(36000)).toEqual('00:00:00:36');
    expect(utils.timestampToDate(82800000)).toEqual('00:23:00:00');
    expect(utils.timestampToDate(172800000 + (60 * 1000 * 12))).toEqual('02:00:12:00');
  });
});

