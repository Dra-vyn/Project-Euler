import { assertEquals } from "@std/assert";
import { evenFibonacciSum, isEven } from "../src/even_fibonacci_numbers.js";

Deno.test('Is 6 even', () => {
  assertEquals(isEven(6), true);
});

Deno.test('Is 5 even', () => {
  assertEquals(isEven(5), false);
});

Deno.test('Sum Of The Even-Valued Fibonacci Terms Below 10', () => {
  assertEquals(evenFibonacciSum(10), 10);
});

Deno.test('Sum Of The Even-Valued Fibonacci Terms Below 100', () => {
  assertEquals(evenFibonacciSum(100), 44);
});

Deno.test('Sum Of The Even-Valued Fibonacci Terms Below 1000', () => {
  assertEquals(evenFibonacciSum(1000), 798);
});

Deno.test('Sum Of The Even-Valued Fibonacci Terms Below 4 Million', () => {
  assertEquals(evenFibonacciSum(4000000), 4613732);
});
