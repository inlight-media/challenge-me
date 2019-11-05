# Sum of The Largest Odd Divisions of Continuous Positive Integers

Define function f as the solution to get the largest odd divisor of n, n is a positive integer, e.g. when n = 44, then f(44)=11.

Now given n, calculate the value of f(1) + f(2) + f(3) + ... + f(n).

For example:
n=7

S(7) = f(1) + f(2) + f(3) + f(4) + f(5) + f(6) + f(7) = 1 + 1 + 3 + 1 + 5 + 3 + 7 = 21

Input: 1 ≤ n ≤ 1000000000, or even larger if your solution works well.

Please note that there is a time limit for you function S(n): 1s

## Python 2.7.15

The main idea of the challenge is all in this [notebook](assets/Thinking_in_Math.ipynb).

Python 3 also work but requires some minor changes in `Solution Two`.

## Javascript

Javascript also works but needs more logic for numbers that are larger than the largest safe integer.

Check [here](sum-of-largest-odd-divisions.js) to understand more.
