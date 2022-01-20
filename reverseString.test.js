const reverseString = require('./reverseString.js');

describe("Reverse String", () => {
  test('of a string must be a', () => {
    const result = reverseString('a');

    expect(result).toBe('a');
  });

  test('of abc string must be cba', () => {
    const result = reverseString('abc');

    expect(result).toBe('cba');
  });

  test('of a empty string must throw an error', () => {
    const result = () => reverseString('');

    expect(result).toThrow('The string is empty');
  });
});
