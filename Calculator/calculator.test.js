import Calculator from './calculator';

test('should return the result of addition', () => {
  expect(Calculator.add(7, 8)).toEqual(15);
});

test('should return the result of a substraction', () => {
  expect(Calculator.substract(7, 5)).toBe(2);
});

test('should return the result of a division', () => {
  expect(Calculator.divide(10, 2)).toBe(5);
});

test('should return the result of a multiplication', () => {
  expect(Calculator.multiply(10, 50)).toBe(500);
});
