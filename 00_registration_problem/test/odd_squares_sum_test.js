import { assertEquals } from "@std/assert";
import { oddSquaresSum } from "../src/odd_squares_sum.js"

Deno.test('First 5 odd Sum Squares', () =>
  assertEquals(oddSquaresSum(5n), 35n));

Deno.test('First 10 odd Sum Squares', () =>
  assertEquals(oddSquaresSum(10n), 165n));

Deno.test('odd Sum Squares', () =>
  assertEquals(oddSquaresSum(545000n), 26979770833242500n));
