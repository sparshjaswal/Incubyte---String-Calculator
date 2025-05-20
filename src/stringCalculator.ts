import { extractNumbers, checkForNegatives } from "./utils";

const add = (numbers: string): number => {
  if (numbers.trim() === "") {
    return 0;
  }
  const { nums, operator } = extractNumbers(numbers);
  checkForNegatives(nums)
  if (operator === 'multiply') {
    return nums.filter(num => num <= 1000).reduce((acc, val) => acc * val, 1);
  }
  return nums.filter(num => num <= 1000).reduce((acc, val) => acc + val, 0);
}

export default add;