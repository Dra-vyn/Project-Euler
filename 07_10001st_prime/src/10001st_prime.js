export const isPrime = (num) => {

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }

  return true;
};

export const nthPrime = (n) => {
  const primes = [];
  let i = 2;

  while (primes.length < n) {
    if (isPrime(i)) primes.push(i);

    i++;
  }
  
  return primes.pop();
}