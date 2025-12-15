import { assertEquals } from "@std/assert"
import { primeFactor, isPrime } from "../src/largest_prime_factor.js";

Deno.test('Is 2 a Prime Number', () =>
  assertEquals(isPrime(2), true));

Deno.test('Is 4 a Prime Number', () =>
  assertEquals(isPrime(4), false));

Deno.test('Largest Prime Factor Of 13195', () =>
  assertEquals(primeFactor(13195), 29));

Deno.test('Largest Prime Factor Of 600851475143', () =>
  assertEquals(primeFactor(600851475143), 6857));
