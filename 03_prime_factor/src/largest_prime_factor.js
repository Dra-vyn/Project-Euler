export const isPrime = (num) => {

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }

  return true;
};

export const primeFactor = (value) => {
  let num = value
  let largestPrimeFactor = 0;

  for (let i = 2; i <= num; i++) {
    if (num % i === 0 && i > largestPrimeFactor && isPrime(i)) {
      largestPrimeFactor = i;
      num = num / i;
    }
  }
  
  return largestPrimeFactor;
};