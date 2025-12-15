export const sumOfSquares = (n) => n * (n + 1) * (2 * n + 1) / 6;

export const squareOfSum = (n) => {
  const sum = n * (n + 1) / 2;
  return sum * sum;
}

export const difference = (maxLimit) =>
  squareOfSum(maxLimit) - sumOfSquares(maxLimit);