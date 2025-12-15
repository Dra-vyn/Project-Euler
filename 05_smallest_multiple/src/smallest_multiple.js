export const lcm = (num1, num2) => {
  let i = num1;

  while (i % num2 !== 0) {
    i += num1;
  }

  return i;
};

export const smallestMultiple = (maxLimit) => {
  let smallestNum = 1;

  for (let i = 2; i <= maxLimit; i++) {
    smallestNum = lcm(smallestNum, i);
  }

  return smallestNum;
};