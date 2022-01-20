class Calculator {

  static add(a, b) {
    if (typeof a === 'undefined' || typeof b === 'undefined') {
      return;
    }

    return a + b;
  }

  static subtract(a, b) {
    if (typeof a === 'undefined' || typeof b === 'undefined') {
      return;
    }
    
    return a - b;
  }

  static divide(a, b) {
    if (typeof a === 'undefined' || typeof b === 'undefined') {
      return;
    }
    if (b === 0) {
      throw new Error('Division by zero is undefined');
    }

    return a / b;
  }

  static multiply(a, b) {
    if (typeof a === 'undefined' || typeof b === 'undefined') {
      return;
    }

    return a * b;
  }
}

module.exports = Calculator;
