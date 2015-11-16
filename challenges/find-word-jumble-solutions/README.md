# Challenge: Find Word Jumble Solutions

Goal: Write the fastest function that finds all of the valid anagrams and sub-anagrams when given a jumbled 8 letter word.

Example: Given the jumble `NSCKIECH`, you function should not only come up with the anagram `CHICKENS`, but also all smaller words such as: 
```
I
IS
CHICK
HENS
SKIN
CHICKEN
// etc.
```

The script must export only one synchronous function and it will automatically be run as part of the tests.

The fastest function wins. Good luck!

## Requirements

- Fastest performing solution wins
- Must work in browser and node.js
- Your function will be called passing the jumble word (string) as the first argument, and the list of words to get your solutions from (array of strings) as the second argument
- Must not use any other third party module - apart from lodash which is allowed

## Testing

Run `grep=find-word-jumble-solutions npm run test`
Changing `test` to `test:watch` will keep the test harness alive and will run the tests every time you save.