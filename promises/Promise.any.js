const getUser = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      rej("User");
    }, 1000);
  });
}; //1000

const getConfig = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      rej("Config");
    }, 500);
  });
}; //500

const getPosts = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      rej("Posts");
    }, 1500);
  });
}; //1500

const p = Promise.any([getUser(), getConfig(), getPosts()]);

p.then((value) => {
  console.log(value);
}).catch((err) => {
  console.log(err);
});
