import _ from 'lodash';
import should from 'should';
import solutions from '../solutions';

import fs from 'fs';
const words = fs.readFileSync(`${__dirname}/../data/words.txt`).toString().split('\n');

// Test with 3 different 8-letter words
const jumbles = ['batching', 'chickens', 'diamonds'];
const expectedSolutionsCount = [169, 127, 215];

function performTest(solutionName, fn) {
  let output = '';
  let totalTime = 0;

  jumbles.forEach((jumble, index) => {
    const timer = process.hrtime();
    const result = fn(jumble, words);
    const time = process.hrtime(timer);

    should(result).be.an.Array();
    result.length.should.equal(expectedSolutionsCount[index]);

    const ms = time[0] * 1000 + time[1] / 1000000;
    totalTime += ms;

    output += `"${jumble}" - ${ms}ms; `;
  });

  console.log(`${solutionName}: ${output} TOTAL - ${totalTime}ms`);
  return totalTime;
}

describe('find-word-jumble-solutions', () => {
  it('run find-word-jumble-solutions performance test', () => {
    const times = {};
    _.keys(solutions).forEach((solutionName) => {
      const ms = performTest(solutionName, solutions[solutionName]);
      // Record the time in seconds
      times[solutionName] = ms;
    });
    // @TODO: Print out the winner
  });
});
