function capitalize(str) {
  if (typeof str !== 'string') {
    throw new Error ('Please enter a valid string');
  }

  if (str === '') {
    throw new Error ('The string is empty');
  }

  return str.charAt(0).toUpperCase() + str.slice(1);
}

module.exports = capitalize;
