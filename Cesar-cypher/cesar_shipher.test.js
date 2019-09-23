import cesarShipher from './cesar_shipher';

test('should give cyphered version of a string while keeping the same case', () => {
  expect(cesarShipher('I am done', 1)).toEqual('J bn epof');
});

test('should give cyphered version of a string while ignoring ponctuations', () => {
  expect(cesarShipher('? am done!', 1)).toEqual('? bn epof!');
});

test('should give cyphered version of a string while wrapping on edge ', () => {
  expect(cesarShipher('? am done!', 1)).toEqual('? bn epoz!');
});