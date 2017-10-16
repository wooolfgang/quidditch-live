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
