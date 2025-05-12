import { extractNumbers, checkForNegatives } from "./utils";

const add = (numbers: string): number => {
  if (numbers.trim() === "") {
    return 0;
  }
  const numberArray = extractNumbers(numbers);
  checkForNegatives(numberArray);
  return numberArray.filter(num => num <= 1000).reduce((sum, num) => sum + num, 0);
}

export default add;