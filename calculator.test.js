const calculator = require('./calculator.js');

describe("Calculate", () => {
  describe("Add", () => {
    test('if a number is undefined', () => {
      const result = calculator.add();

      expect(result).toBeUndefined();
    });

    test('1 + 0 is equal to 1', () => {
      const result = calculator.add(1, 0);

      expect(result).toBe(1);
    });

    test('1 + 2 is equal to 3', () => {
      const result = calculator.add(1, 2);

      expect(result).toBe(3);
    });
  })

  describe("Subtract", () => {
    test('if a number is undefined', () => {
      const result = calculator.subtract();

      expect(result).toBeUndefined();
    });

    test('1 - 0 is equal to 1', () => {
      const result = calculator.subtract(1, 0);

      expect(result).toBe(1);
    });

    test('2 + 1 is equal to 1', () => {
      const result = calculator.subtract(2, 1);

      expect(result).toBe(1);
    });
  })

  describe("Divide", () => {
    test('if a number is undefined', () => {
      const result = calculator.divide();

      expect(result).toBeUndefined();
    });

    test('if divisor is zero', () => {
      const result = () => calculator.divide(1, 0);

      expect(result).toThrow('Division by zero is undefined');
    });

    test('0 / 1 is equal to 0', () => {
      const result = calculator.divide(0, 1);

      expect(result).toBe(0);
    });

    test('4 / 2 is equal to 2', () => {
      const result = calculator.divide(4, 2);

      expect(result).toBe(2);
    });
  })

  describe('Multiply', () => {
    test('if a number is undefined', () => {
      const result = calculator.multiply();

      expect(result).toBeUndefined();
    });

    test('1 * 0 is equal to 0', () => {
      const result = calculator.multiply(1, 0);

      expect(result).toBe(0);
    });

    test('2 * 1 is equal to 2', () => {
      const result = calculator.multiply(2, 1);

      expect(result).toBe(2);
    });
  })
});
