export const isPalindrome = (num) => {
  const numStr = num.toString();
  return numStr.split("").reverse().join("") === numStr;
};

export const largestPalindromeProduct = (minLimit, maxLimit) => {
  let largestPalindrome = 0;

  for (let i = maxLimit; i > minLimit; i--) {
    for (let j = maxLimit; j > minLimit; j--) {
      const product = i * j;

      if (isPalindrome(product) && product > largestPalindrome) {
        largestPalindrome = product;
      }
      
    }
  }
  return largestPalindrome;
};
