import _ from 'lodash';
import should from 'should';
import solutions from '../solutions';

import fs from 'fs';
const words = fs.readFileSync(`${__dirname}/../data/words.txt`).toString().split('\n');

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
  should(result).be.an.Array();
  result.length.should.equal(expectedLength);
  return ms;
}

describe('reduce-words', () => {
  it('run reduce-words performance test', () => {
    const times = {};
    _.keys(solutions).forEach((solutionName) => {
      const ms = performTest(solutionName, solutions[solutionName]);
      // Record the time in seconds
      times[solutionName] = ms;
    });
    // @TODO: Print out the winner
  });
});
