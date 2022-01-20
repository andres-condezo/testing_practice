const stringLength = require('./stringLength');

describe("length", () => {
  test('of abc string must be 3', () => {
    const result = stringLength('abc');

    expect(result).toBe(3);
  });

  test('of a empty string must throw an error', () => {
    const result = () => stringLength('12345678910');

    expect(result).toThrow(TypeError);
  });
});
