import * as playTypes from '../frontend/constants/PlayTypes';

export const getPercentage = (value = 0, total = 100) => (value / total) * 100;
export const getTimestampDiff = (timeNow, timeStarted) => timeNow - timeStarted;
export const timestampToDate = (timestamp) => {
  const ms = 1000;
  const dayinMs = ms * 60 * 60 * 24;
  const hourInMs = ms * 60 * 60;
  const minInMs = ms * 60;
  const secondInMs = ms;
  const constants = [dayinMs, hourInMs, minInMs, secondInMs];
  const results = [];
  let remainder = timestamp;

  constants.forEach((constant) => {
    let quotient = remainder / constant >= 1 ? Math.floor(remainder / constant) : 0;
    quotient = quotient < 10 ? `0${quotient}` : quotient;
    remainder = timestamp % constant;
    results.push(quotient);
  });

  return results.join(':');
};

export const getRandomFromArray = (array) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

export const playStatement = (type, name) => {
  if (type === playTypes.GOAL_MADE) {
    return `${name} scored a goal!`;
  } else if (type === playTypes.GOAL_BLOCKED) {
    return `${name} blocked a goal!`;
  } else if (type === playTypes.GOAL_MISSED) {
    return `${name} missed a goal :(`;
  } else if (type === playTypes.SNITCH_APPEARS) {
    return 'The snitch has appeared in the game!';
  } else if (type === playTypes.SNITCH_CAUGHT) {
    return `The snitch has been caught by ${name}`;
  }
};
