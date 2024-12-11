function getCheese() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Cheese");
    }, 1000);
  });
}

function getDough(cheese) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      rej(cheese + "Dough");
    }, 1000);
  });
}

function getCake(dough) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(dough + "Cake");
    });
  });
}

getCheese()
  .then((value) => {
    return getDough(value);
  })
  .then((v) => {
    return getCake(v);
  })
  .then((cake) => {
    console.log(cake);
  })
  .catch((err) => {
    cconsole.log(err);
  });
