const extractNumbers = (numbers: string): number[] => {
  let delimiter = /,|\n/;
  let numbersToProcess = numbers;

  const customDelimiterMatch = numbers.match(/^\/\/(.+)\n/);
  if (customDelimiterMatch) {
    delimiter = new RegExp(customDelimiterMatch[1]);
    numbersToProcess = numbers.split("\n").slice(1).join("\n");
  }

  return numbersToProcess.split(delimiter).map(num => parseInt(num, 10));
}

const checkForNegatives = (numbers: number[]): void =>{
  const negatives = numbers.filter(num => num < 0);
  if (negatives.length > 0) {
    throw new Error(`Negatives not allowed: ${negatives.join(", ")}`);
  }
}

export { checkForNegatives, extractNumbers };