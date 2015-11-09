/**
 * Regex
 * Author: Ben Pearson
 * Description: Using regex method to try to make it faster to process
 */

import _ from 'lodash';

export default function regex(maxRepeatedChars, words) {
  // Get all alphabet chars
  const alpha = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
    'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
    's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
  ];
  // Create regex string (looks similar to /a.*a.*a|b.*b.*b|c.*c.*c/)
  const regexStr = alpha.map((char) => Array(maxRepeatedChars + 1).join(`${char}.*`) + char).join('|');
  // Create regex object
  const regexp = new RegExp(regexStr);
  return _.compact(words.map((word) => {
    if (word.length !== 8) {
      return null;
    }
    if (!regexp.test(word)) {
      return word;
    }
  }));
}
