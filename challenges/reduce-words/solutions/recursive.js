/**
 * Recursive
 * Author: Nic Gordon
 * Description: Tried to write a sweet recursive function to deal with it!
 */
function checkWord(maxRepititions, word) {
  // Loop through each letter
  function validateLetters(letters) {
     // Only maxReps letters left, even if they are the same letter it cannot be invalid
    if (letters.length <= maxRepititions) {
      return true;
    }

    // Get the first letter
    let letter = letters.splice(0, 1);
    let i = letters.length;
    // Loop through the word extracting any letters that are the same
    while (i--) {
      if (letters[i] === letter[0]) {
        letter = letter.concat(letters.splice(i, 1));
      }
    }

    // If this letter is repeated too many times then we can return false
    if (letter.length > maxRepititions) {
      return false;
    }

    return validateLetters(letters);
  }

  return validateLetters(word.split(''));
}

export default function recursive(maxRepititions, words) {
  const results = [];
  let i = words.length;
  while (i--) {
    const word = words[i];
    if (word.length === 8 && checkWord(maxRepititions, word)) {
      results.push(word);
    }
  }
  return results;
}
