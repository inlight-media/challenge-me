import _ from 'lodash';
import fs from 'fs';

import solutions from '../solutions';

const words = fs
  .readFileSync(`${__dirname}/../data/words.txt`)
  .toString()
  .split('\n');

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

    expect(_.isArray(result)).toBe(true);
    expect(result).toHaveLength(expectedSolutionsCount[index]);

    const ms = time[0] * 1000 + time[1] / 1000000;
    totalTime += ms;

    output += `"${jumble}" - ${ms}ms; `;
  });

  console.log(`${solutionName}: ${output} TOTAL - ${totalTime}ms`);
  return totalTime;
}

describe('find-word-jumble-solutions', () => {
  test('run find-word-jumble-solutions performance test', () => {
    const times = {};
    _.keys(solutions).forEach(solutionName => {
      const ms = performTest(solutionName, solutions[solutionName]);
      // Record the time in seconds
      times[solutionName] = ms;
    });
    // @TODO: Print out the winner
  });
});
