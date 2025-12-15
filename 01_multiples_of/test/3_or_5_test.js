import { assertEquals } from "@std/assert";
import { sumOfMultiples, isMultipleOf } from "../src/3_or_5.js";

Deno.test('Is 11 A Multiple Of 3 or 5', () =>
  assertEquals(isMultipleOf(11), false));

Deno.test('Is 18 A Multiple Of 3 or 5', () =>
  assertEquals(isMultipleOf(18), true));

Deno.test('Is 5 A Multiple Of 3 or 5', () =>
  assertEquals(isMultipleOf(5), true));

Deno.test('Is 15 A Multiple Of 3 or 5', () =>
  assertEquals(isMultipleOf(15), true));

Deno.test('Sum Of All The Multiples Of 3 or 5 Below 10', () =>
  assertEquals(sumOfMultiples(10), 23));

Deno.test('Sum Of All The Multiples Of 3 or 5 Below 100', () =>
  assertEquals(sumOfMultiples(100), 2318));

Deno.test('Sum Of All The Multiples Of 3 or 5 Below 1000', () =>
  assertEquals(sumOfMultiples(1000), 233168));