export const productInSeries = (string, noOfAdjacentDigits, i) => {
  let product = 1;

  for (let j = i + noOfAdjacentDigits - 1; j >= i; j--) {
      product *= parseInt(string[j]);
  }
  
  return product;
}

export const greatestProduct = (string, noOfAdjacentDigits) => {
  let largestProduct = 0;

  for (let i = 0; i + noOfAdjacentDigits < string.length; i++) {
    const product = productInSeries(string, noOfAdjacentDigits, i);

    if (largestProduct < product) largestProduct = product;
  }

  return largestProduct;
};