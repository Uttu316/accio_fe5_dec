function api() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      rej("Hello");
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

getUser()
  .then((v) => {
    console.log(v);
  })
  .catch((err) => {
    console.log("Error", err);
  });
