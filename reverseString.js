function reverseString(string) {
  if (string === '') {
    throw new Error('The string is empty');
  }

  return string.split('').reverse().join('');
}

module.exports = reverseString;
