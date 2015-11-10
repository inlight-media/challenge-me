/**
 * Nested loops
 * Author: Nic Gordon
 * Description: Loop words, then letters, then check each other letter in the word for occurrences of that letter
 */
export default function nestedLoops(maxRepititions, words) {
  const results = [];

  let i = words.length;
  while (i--) {
    const word = words[i];
    if (word.length !== 8) {
      continue;
    }

    const checkedLetters = [];
    let valid = true;
    let j = 8;
    while (j-- > maxRepititions && valid) {
      const letter = word.charAt(j);
      if (checkedLetters.indexOf(letter) >= 0) {
        continue;
      }
      checkedLetters.push(letter);

      let letterCount = 0;
      let k = 8;
      while (k-- && valid) {
        letterCount += (word[k] === letter);
        if (letterCount > maxRepititions) {
          valid = false;
        }
      }
    }

    if (valid) {
      results.push(word);
    }
  }

  return results;
}
