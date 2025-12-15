import { assertEquals } from "@std/assert";
import { isPalindrome, largestPalindromeProduct } from "../src/largest_palindrome_product.js";

Deno.test('Is 1001 A Palindrome Number', () =>
  assertEquals(isPalindrome(1001), true));

Deno.test('Is 1010 A Palindrome Number', () =>
  assertEquals(isPalindrome(1010), false));

Deno.test('Largest Palindrome Made From The Product of Two 2-Digit Numbers', () =>
  assertEquals(largestPalindromeProduct(10, 99), 9009));

Deno.test('Largest Palindrome Made From The Product of Two 3-Digit Numbers', () =>
  assertEquals(largestPalindromeProduct(100, 999),  906609));
