import { assertEquals } from "@std/assert";
import { findTriplet, pythagoreanTriplet } from "../src/pythagorean_triplet.js";

Deno.test('Triplet For m = 2 & n = 1', () => 
  assertEquals(findTriplet(2, 1), { a: 3, b: 4, c: 5 }));

Deno.test('Triplet For m = 3 & n = 1', () => 
  assertEquals(findTriplet(3, 1), {a: 8, b: 6, c: 10}));

Deno.test('Product Of One Pythagorean Triplet For Which a + b + c = 1000', () => 
  assertEquals(pythagoreanTriplet(1000), 31875000));