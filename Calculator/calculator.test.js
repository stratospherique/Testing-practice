const Calculator = require('./calculator');

test('should return the result of addition', () => {
  const calculator = new Calculator();
  expect(calculator.add(7, 8)).toEqual(15);
})