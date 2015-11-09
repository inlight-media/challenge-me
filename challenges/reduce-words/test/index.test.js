import _ from 'lodash';
import should from 'should';
import solutions from '../solutions';

import fs from 'fs';
const words = fs.readFileSync(`${__dirname}/../data/words.txt`).toString().split('\n');

const maxRepeatedChars = 2;

function performTest(solutionName, fn) {
  const timer = process.hrtime();
  const result = fn(maxRepeatedChars, words);
  const totalTime = process.hrtime(timer);
  should(result).be.an.Array();
  result.length.should.equal(36654);
  return totalTime;
}

describe('reduce-words', () => {
  it('run reduce-words performance test', () => {
    const times = {};
    _.keys(solutions).forEach((solutionName) => {
      const time = performTest(solutionName, solutions[solutionName]);
      console.log(`${solutionName}: ${time[0]}.${time[1]}`);
      // Record the time in seconds
      times[solutionName] = time[0] + time[1] / 100000;
    });
    // @TODO: Print out the winner
  });
});
