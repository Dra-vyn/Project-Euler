import { assertEquals } from "@std/assert";
import { greatestProduct, productInSeries } from "../src/largest_product_series.js";

Deno.test('Product In Series Of 4 Adjacent Digits', () => {
  const input = '24323';
  assertEquals(productInSeries(input, 4, 1),72)
});

Deno.test('Product In Series Of 5 Adjacent Digits', () => {
  const input = '45732';
  assertEquals(productInSeries(input, 5, 0), 840)
});

Deno.test('Greatest Product That Can Be Made by 4-Adjacent Digits', () => {
  const input = Deno.readTextFileSync("data/input.txt");
  assertEquals(greatestProduct(input, 4), 5832)
});

Deno.test('Greatest Product That Can Be Made by 13-Adjacent Digits', () => {
  const input = Deno.readTextFileSync("data/input.txt");
  assertEquals(greatestProduct(input, 13), 23514624000)
});