const extractNumbers = (numbers: string): { nums: number[], operator: string } => {
  let delimiter = /,|\*|\n/;
  let numbersToProcess = numbers;
  let operator = 'add';

  const customDelimiterMatch = numbers.match(/^\/\/(.+)\n/);
  if (customDelimiterMatch) {
    if (customDelimiterMatch[1] === "*") {
      delimiter = /\*/;
      operator = 'multiply';
    }
    else
      delimiter = new RegExp(customDelimiterMatch[1]);
    numbersToProcess = numbers.split("\n").slice(1).join("\n");
  }

  const nums = numbersToProcess.split(delimiter).map(num => parseInt(num, 10));
  return { nums, operator };
};

const checkForNegatives = (numbers: number[]): void => {
  const negatives = numbers.filter(num => num < 0);
  if (negatives.length > 0) {
    throw new Error(`Negatives not allowed: ${negatives.join(", ")}`);
  }
}

export { checkForNegatives, extractNumbers };