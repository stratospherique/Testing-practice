const reverseString = require('./reverseString');

test('should return a inverted string', () => {
  expect(reverseString('hello world')).toBe('dlrow olleh');
});