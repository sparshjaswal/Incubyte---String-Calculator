import add from './stringCalculator';

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
  test('returns sum for two numbers separated by \\n', () => {
    expect(add("1\n2")).toBe(3);
  });
  test('returns sum for two numbers separated by random delimiter', () => {
    expect(add("//;\n1;2")).toBe(3);
  });

  test('throws exception for negative numbers', () => {
    expect(() => add("1,-2,3")).toThrow("Negatives not allowed: -2");
    expect(() => add("//;\n1;-2;3")).toThrow("Negatives not allowed: -2");
  });

  test('throws exception for multiple negative numbers', () => {
    expect(() => add("1,-2,-3")).toThrow("Negatives not allowed: -2, -3");
    expect(() => add("//;\n1;-2;-3")).toThrow("Negatives not allowed: -2, -3");
  });
  test('ignores numbers greater than 1000', () => {
    expect(add("2,1001")).toBe(2);
    expect(add("//;\n1000;1001;2")).toBe(1002);
  });

  test('handles custom delimiter with multiple characters', () => {
    expect(add("//[***]\n1***2***3")).toBe(6);
  });

});
