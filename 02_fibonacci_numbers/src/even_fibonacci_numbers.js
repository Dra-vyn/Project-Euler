export const isEven = (num) => (num & 1) === 0;

export const evenFibonacciSum = (maxLimit) => {
  let current = 1;
  let next = 2;
  let future = current + next;
  let sum = 0;
  while (current < maxLimit) {
    if (isEven(current)) sum += current;
    current = next
    next = future
    future = current+ next;
  }
  return sum;
}