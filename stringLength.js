function stringLength(string) {
  const length = string.length;

  if( length < 1 || length > 10) {
    throw new TypeError('string length error.');
  }

  return length;
}

module.exports = stringLength;
