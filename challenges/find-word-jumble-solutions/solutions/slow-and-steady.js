/**
 * Slow and steady
 * Author: Nic Gordon
 * Description: Loop each letter of each word checking it against the jumble word
 */
export default function slowAndSteady(jumble, words) {
  const results = [];

  // Loop through each word
  words.forEach((word) => {
    // Break the words into arrays of letters
    const wordLetters = word.split('');
    const jumbleLetters = jumble.split('');

    // Loop through the letters in the word and compare against the jumble letters
    const successfulSolution = wordLetters.every((letter) => {
      const letterIndex = jumbleLetters.indexOf(letter);
      if (letterIndex < 0) {
        return false;
      }

      // Remove that letter from the jumble for the check of the following letters
      jumbleLetters.splice(letterIndex, 1);
      return true;
    });

    if (successfulSolution) {
      results.push(word);
    }
  });

  return results;
}
