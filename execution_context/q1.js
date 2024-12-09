let a = 2;
let b = 4;

function abc(p, q) {
  let f = 3;

  let v = xyz(f, b);

  return v + a;
}

function xyz(p, q) {
  return p + q + 2;
}

let z = abc(a, b);

console.log(z);
