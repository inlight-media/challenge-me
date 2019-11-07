const _ = require('lodash');

const solutions = require('./solutions');

test('The ants go marching', () => {
  const assertions = [
    {
      input: {
        poleLength: 10,
        ants: [2, 6, 7],
      },
      output: { min: 4, max: 8 },
    },
    {
      input: {
        poleLength: 214,
        ants: [11, 12, 7, 13, 176, 23, 191],
      },
      output: { min: 38, max: 207 },
    },
  ];

  _.forIn(solutions, solution => {
    _.forEach(assertions, ({ input, output }) => {
      expect(solution(input)).toEqual(output);
    });
  });
});
