import extractNumbers from "./utils";

const add = (numbers: string): number => {
  if (numbers.trim() === "") {
    return 0;
  }
  const numberArray = extractNumbers(numbers);
  return numberArray.reduce((sum, num) => sum + num, 0);
}

export default add;