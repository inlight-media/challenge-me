/**
 * Regex filter
 * Author: Nic Gordon
 * Description: Filter the list of words down using regex, before using slow an steady
 */
module.exports = function regexFilter(jumble, words) {
  const results = [];

  // Prepare the regex which will filter the word list down considerably
  const filterRegex = new RegExp(`^[${jumble}]+$`);
  const filteredWords = [];

  let i = words.length;
  while (i--) {
    const word = words[i];
    if (filterRegex.test(word)) {
      filteredWords.push(word);
    }
  }

  // Loop through each word
  let j = filteredWords.length;
  while (j--) {
    const word = filteredWords[j];
    // Break the words into arrays of letters
    const wordLetters = word.split('');
    const jumbleLetters = jumble.split('');

    // Loop through the letters in the word and compare against the jumble letters
    const success = wordLetters.every(letter => {
      const letterIndex = jumbleLetters.indexOf(letter);
      if (letterIndex < 0) {
        return false;
      }

      // Remove that letter from the jumble for the check of the following letters
      jumbleLetters.splice(letterIndex, 1);
      return true;
    });

    if (success) {
      results.push(word);
    }
  }

  return results;
};
