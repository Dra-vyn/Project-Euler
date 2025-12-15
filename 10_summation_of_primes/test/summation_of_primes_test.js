import { assertEquals } from "@std/assert";
import { isPrime, sumOfPrimes } from "../src/summation_of_primes.js";

Deno.test('Is 2 a Prime Number', () =>
  assertEquals(isPrime(2), true));

Deno.test('Is 10 a Prime Number', () =>
  assertEquals(isPrime(10), false));

Deno.test('Sum Of All Primes Below 10', () =>
  assertEquals(sumOfPrimes(10), 17));

Deno.test('Sum Of All Primes Below 2 Million', () =>
  assertEquals(sumOfPrimes(2000000), 142913828922));
