import { genMonthAgoDate } from '../index';

describe('genMonthAgoDate test', () => {
  test('without args', () => {
    expect(genMonthAgoDate()).toEqual(expect.any(String));
  });
  test('Parse is correct', () => {
    expect(genMonthAgoDate(new Date(2018, 1, 2))).toEqual('2018-01-01');
  });
});
