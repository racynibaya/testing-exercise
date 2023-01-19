const sum = require('./sum');

test('adds 1 + 2 = 1', () => {
  expect(sum(1, 2)).toBe(3);
});
