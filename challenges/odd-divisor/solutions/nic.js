function getLargestOddFactor(number) {
  // Odd numbers should just return themselves
  if (number % 2 !== 0) {
    return number;
  }

  // For even numbers, divide by even numbers up to sqrt(number)
  const stop = Math.floor(Math.sqrt(number));
  for (let i = 2; i <= stop; i += 2) {
    if (number % i === 0 && (number / i) % 2 !== 0) {
      return number / i;
    }
  }

  return 1;
}

function sumFactors(number) {
  let total = 0;
  for (let i = 1; i <= number; i++) {
    total += getLargestOddFactor(i);
  }
  return total;
}

export default sumFactors;
