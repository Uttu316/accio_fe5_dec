async function getUser() {
  throw new Error("Hello");
}

getUser()
  .then((v) => {
    console.log(v);
  })
  .catch((err) => {
    console.log("Error", err);
  });
