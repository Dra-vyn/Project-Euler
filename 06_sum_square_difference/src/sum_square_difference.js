export const sumOfSquares = (n) => n * (n + 1) * (2 * n + 1) / 6;

export const squareOfSum = (n) => {
  const sum = n * (n + 1) / 2;
  return sum * sum;
}

export const difference = (maxLimit) =>
  squareOfSum(maxLimit) - sumOfSquares(maxLimit);

// export const sumOfSquares = (maxLimit) => {
//   let i = 1;
//   let sum = 0;
//   while (i <= maxLimit) {
//     sum += i * i;
//     i++;
//   }
//   return sum;
// }

// export const squareOfSum = (maxLimit) => {
//   let i = 1;
//   let sum = 0;
//   while (i <= maxLimit) {
//     sum += i
//     i++;
//   }
//   return sum * sum;
// }