import { assertEquals } from "@std/assert";
import { difference, squareOfSum, sumOfSquares } from "../src/sum_square_difference.js";

Deno.test("Sum Of Squares of First 10 Natural Numbers", () =>
  assertEquals(sumOfSquares(10), 385));

Deno.test("Square Of Sum Of First 10 Natural Numbers", () =>
  assertEquals(squareOfSum(10), 3025));

Deno.test("Diff Btw Sum Of Squares Of First 10 Numbers & Square Of Sum", () =>
  assertEquals(difference(10), 2640));

Deno.test("Sum Of Squares of First 100 Natural Numbers", () =>
  assertEquals(sumOfSquares(100), 338350));

Deno.test("Square Of Sum Of First 100 Natural Numbers", () =>
  assertEquals(squareOfSum(100), 25502500));

Deno.test("Diff Btw Sum Of Squares Of First 100 Numbers & Square Of Sum", () =>
  assertEquals(difference(100), 25164150));
