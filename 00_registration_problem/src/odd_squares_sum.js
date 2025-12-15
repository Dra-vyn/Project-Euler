export const oddSquaresSum = (maxLimit) => {
  let sum = 0n;

  for (let i = 1n; i <= maxLimit; i += 2n) {
    sum += i * i;
  }
  
  return sum;
};
