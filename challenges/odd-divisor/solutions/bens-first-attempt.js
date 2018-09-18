/**
 * Ben's First Attempt
 * Author: Ben Pearson
 */

function isEven(input) {
  return input % 2 === 0;
}

function halfUntilOdd(input) {
  const half = input / 2;
  return isEven(half) ? halfUntilOdd(half) : half;
}

function largestOddDivisor(input) {
  return isEven(input) ? halfUntilOdd(input) : input;
}

export default function bensFirstAttempt(input) {
  let result = 0;
  for (let i = 1; i <= input; i++) {
    result += largestOddDivisor(i);
  }
  return result;
}
