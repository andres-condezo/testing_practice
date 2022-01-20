const capitalize = require('./capitalize.js');

describe("Capitalize String", () => {
  test('if is not a string', () => {
    const result = () => capitalize(1);

    expect(result).toThrow('Please enter a valid string');
  });

  test('of a empty string must throw an error', () => {
    const result = () => capitalize('');

    expect(result).toThrow('The string is empty');
  });

  test('microverse must be Microverse', () => {
    const result = capitalize('microverse');

    expect(result).toBe('Microverse');
  });
});
