/**
 * Sort
 * Author: Ben Pearson
 * Description: Using sort method to try to make it faster to process
 */

import _ from 'lodash';

module.exports = function sort(maxRepeatedChars, words) {
  return _.compact(
    words.map(word => {
      if (word.length !== 8) {
        return null;
      }
      const chars = word.split('');
      const sorted = chars.sort();
      const counter = {
        count: 0,
        char: null,
      };
      for (let i = 0; i < sorted.length; i++) {
        const char = chars[i];
        if (char !== counter.char) {
          counter.count = 1;
          counter.char = char;
        } else {
          counter.count++;
          if (counter.count > maxRepeatedChars) {
            return null;
          }
        }
      }
      return word;
    })
  );
};
