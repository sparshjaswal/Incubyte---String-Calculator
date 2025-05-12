import  add from './stringCalculator';

describe('StringCalculator - Function Version', () => {
  test('returns 0 for empty string', () => {
    expect(add("")).toBe(0);
  });

  test('returns number for single number', () => {
    expect(add("1")).toBe(1);
  });

  test('returns sum for two numbers', () => {
    expect(add("1,2")).toBe(3);
  });
  test('returns sum for two numbers seprated by \\n', () => {
    expect(add("1\n2")).toBe(3);
  });
});
