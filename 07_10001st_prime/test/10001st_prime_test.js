import { assertEquals } from "@std/assert";
import { isPrime, nthPrime } from "../src/10001st_prime.js";


Deno.test('Is 5 a Prime Number', () =>
  assertEquals(isPrime(5), true));

Deno.test('Is 8 a Prime Number', () =>
  assertEquals(isPrime(8), false));

Deno.test('5th Prime Number', () =>
  assertEquals(nthPrime(5), 11));

Deno.test('10th Prime Number', () =>
  assertEquals(nthPrime(10), 29));

Deno.test('10001th Prime Number', () =>
  assertEquals(nthPrime(10001), 104743));