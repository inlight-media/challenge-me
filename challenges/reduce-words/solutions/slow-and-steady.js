/**
 * Slow and Steady
 * Author: Ben Pearson
 * Description: I think this is a fairly slow way of processing the list
 */
module.exports = function slowAndSteady(maxRepeatedChars, words) {
  const result = [];
  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    // Ensure only words with 8 chars are processed
    if (word.length !== 8) {
      continue;
    }

    // If its 8 chars, loop over each char and use regex to
    // count number of occurences
    let include = true;
    for (let j = 0; j < word.length; j++) {
      const char = word.charAt(j);
      const occurrences = word.match(new RegExp(char, 'g') || []).length;

      // If exceeds max repeated occurrences then break out
      if (occurrences > maxRepeatedChars) {
        include = false;
        break;
      }
    }

    // Otherwise add to list of reduced words
    if (include) {
      result.push(word);
    }
  }
  return result;
};
