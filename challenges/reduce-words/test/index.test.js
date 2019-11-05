import _ from 'lodash';
import fs from 'fs';

import solutions from '../solutions';

const words = fs
  .readFileSync(`${__dirname}/../data/words.txt`)
  .toString()
  .split('\n');

// The max number of any one char that is allowed
const maxRepeatedChars = 2;
// Expected length of the reduced array result based on maxRepeatedChars
const expectedLength = [0, 8267, 36654, 40482, 40647][maxRepeatedChars];

function performTest(solutionName, fn) {
  const timer = process.hrtime();
  const result = fn(maxRepeatedChars, words);
  const time = process.hrtime(timer);
  const ms = time[0] * 1000 + time[1] / 1000000;
  console.log(`${solutionName}: ${ms}ms`);
  expect(_.isArray(result)).toBe(true);
  expect(result).toHaveLength(expectedLength);
  return ms;
}

describe('reduce-words', () => {
  test('run reduce-words performance test', () => {
    const times = {};
    _.keys(solutions).forEach(solutionName => {
      const ms = performTest(solutionName, solutions[solutionName]);
      // Record the time in seconds
      times[solutionName] = ms;
    });
    // @TODO: Print out the winner
  });
});
