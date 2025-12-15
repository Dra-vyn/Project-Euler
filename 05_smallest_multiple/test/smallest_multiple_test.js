import { assertEquals } from "@std/assert";
import { lcm, smallestMultiple } from "../src/smallest_multiple.js";

Deno.test('LCM of 5 & 8', () => 
  assertEquals(lcm(5, 8), 40))

Deno.test('LCM of 3 & 2', () => 
  assertEquals(lcm(3, 2), 6))

Deno.test('Smallest Multiple Of Numbers From 1 to 10', () => 
assertEquals(smallestMultiple(10), 2520))

Deno.test('Smallest Multiple Of Numbers From 1 to 20', () => 
assertEquals(smallestMultiple(20), 232792560))