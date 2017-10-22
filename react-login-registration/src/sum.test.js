const sum = require('./sum.js');
import * as sum from '../../src/sagas/auth.saga';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});