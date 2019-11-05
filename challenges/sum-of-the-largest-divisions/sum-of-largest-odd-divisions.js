// This is basically the solution two from the python notebook
const sum = n => {
  let ret = 0;
  let m = n;
  while (m > 0) {
    ret += Math.floor((m + 1) / 2) * Math.floor((m + 1) / 2);
    m = Math.floor(m / 2);
  }
  return Math.floor(ret);
};

const start = Date.now();
console.log(sum(100000000));
console.log("time spent", Date.now() - start, "ms");

// verify
// problem is here http://2ality.com/2012/07/large-integers.html
// Only 8 zeros, no 9 zeros

// This one will work
console.log(sum(100000000 - 1) - sum(100000000 - 2) === 100000000 - 1);
// 3333333333471362

console.log(Number.MAX_SAFE_INTEGER);
// 9007199254740991
// 333333333334181226 - this is the solution, which is larger than MAX_SAFE_INTEGER

// So this one will simply fail
console.log(sum(1000000000 - 1) - sum(1000000000 - 2) === 1000000000 - 1);
