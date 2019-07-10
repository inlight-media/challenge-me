import _ from 'lodash';
import should from 'should';
import solutions from '../solutions';

const tests = [
  [0, 0],
  [3, 5],
  [5, 11],
  [7, 21],
  [9, 31],
  [10, 36],
  [11, 47],
  [12, 50],
  // [1000000000, 333333333334181300], // @TODO: Confirm if correct value
];

function performTest(solutionName, fn) {
  let totalTime = 0;
  _.map(tests, (test) => {
    const input = test[0];
    const expected = test[1];
    const timer = process.hrtime();
    const result = fn(input);
    const time = process.hrtime(timer);
    const ms = time[0] * 1000 + time[1] / 1000000;
    should(result).equal(expected);
    totalTime += ms;
  });
  console.log(`${solutionName}: ${totalTime}ms`);
  return totalTime;
}

describe('odd-divisor', () => {
  it('run odd-divisor performance test', () => {
    const times = {};
    _.keys(solutions).forEach((solutionName) => {
      const ms = performTest(solutionName, solutions[solutionName]);
      times[solutionName] = ms;
    });
  });
});
