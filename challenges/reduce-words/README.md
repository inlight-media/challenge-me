# Challenge: Reduce Words

Goal: Find the fastest function that reduces an array of words to only the words that are 8 characters long and have less than the maximum amount of repeated characters in them. The expected result is an array.

For instance, if the rule is to have a maximum of 2 repeated characters in a word then words such as "aardvark" or "zyzzyvas" would be excluded as well as any words less than 8 characters.

The script must export only one synchronous function and it will automatically be run as part of the tests.

The fastest function wins. Good luck!

## Requirements

- Fastest performing solution wins
- Must work in browser and node.js
- Must not use any other third party module - apart from lodash which is allowed.
- Must result in an array of length: 36,654 with only 8 letter words
