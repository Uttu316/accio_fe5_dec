function api() {
  console.log("A");
  return new Promise((res, rej) => {
    console.log("B");
    setTimeout(() => {
      console.log("C");
      rej("Hello");
      console.log("D");
    }, 1000);
  });
}

async function getUser() {
  try {
    console.log("Start");

    const v = await api();

    console.log("End");

    return v;
  } catch (e) {
    console.log(e);
  }
}

console.log("P");
getUser()
  .then((v) => {
    console.log(v);
  })
  .catch((err) => {
    console.log("Error", err);
  })
  .finally(() => {
    console.log("F");
  });
console.log("X");
