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

export default extractNumbers;