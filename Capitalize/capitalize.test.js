import capitalize from './capitalize';

test('It capitalize the first letter on a string', () => {
  expect(capitalize('hello, world')).toBe('Hello, world')
});