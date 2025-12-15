const triplet = {
  a: (m, n) => (m * m) - (n * n),
  b: (m, n) => 2 * m * n,
  c : (m, n) => (m * m) + (n * n),
}

export const findTriplet = (m, n) => {
  const a = triplet.a(m, n);
  const b = triplet.b(m, n);
  const c = triplet.c(m, n);

  return { a, b, c };
}

export const pythagoreanTriplet = (maxLimit) => {

  for (let m = 2; m < maxLimit; m++) {
    for (let n = 1; n < m; n++) {
      const { a, b, c } = findTriplet(m, n);

      if ((a + b + c) === 1000) return a * b * c;
    }
  }
}