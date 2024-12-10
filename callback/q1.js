function abc(p, q) {
  console.log("hello", p + q);
}

function xyz(callback) {
  let a = 2;
  let b = pqr(a);

  callback(a, b);
}

function pqr(x) {
  return x * x;
}

xyz(abc);
