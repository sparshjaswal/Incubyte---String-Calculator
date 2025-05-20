import { extractNumbers, checkForNegatives } from './utils';

describe('extractNumbers', () => {
  test('extracts numbers with default delimiters', () => {
    expect(extractNumbers("1,2,3")).toEqual({ "nums": [1, 2, 3], "operator": "add" });
    expect(extractNumbers("1\n2,3")).toEqual({ "nums": [1, 2, 3], "operator": "add" });
  });

  test('extracts numbers with custom single-character delimiter', () => {
    expect(extractNumbers("//;\n1;2;3")).toEqual({ "nums": [1, 2, 3], "operator": "add" });
  });

});

describe('checkForNegatives', () => {
  test('throws error for single negative number', () => {
    expect(() => checkForNegatives([1, -2, 3])).toThrow("Negatives not allowed: -2");
  });

  test('throws error for multiple negative numbers', () => {
    expect(() => checkForNegatives([1, -2, -3])).toThrow("Negatives not allowed: -2, -3");
  });

  test('does not throw error for all positive numbers', () => {
    expect(() => checkForNegatives([1, 2, 3])).not.toThrow();
  });

  test('does not throw error for empty array', () => {
    expect(() => checkForNegatives([])).not.toThrow();
  });
});
