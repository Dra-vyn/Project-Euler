export const isMultipleOf = (num) => num % 3 === 0 || num % 5 === 0

export const sumOfMultiples = (maxLimit) => {
  let sum = 0;

  for (let i = 0; i < maxLimit; i++) {
    if (isMultipleOf(i)) sum += i; 
  }
  
  return sum;
}
