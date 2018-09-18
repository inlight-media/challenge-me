import _ from 'lodash';
import should from 'should';
import solutions from '../solutions';

function performTest(solutionName, fn) {
  const timer = process.hrtime();
  const result = fn(14);
  const time = process.hrtime(timer);
  const ms = time[0] * 1000 + time[1] / 1000000;
  console.log(`${solutionName}: ${ms}ms`);
  should(result).equal(21);
  return ms;
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
