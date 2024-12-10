console.log("A");
const p = new Promise((resolve, reject) => {
  console.log("B");
  setTimeout(() => {
    console.log("C");
    const value = "Done";
    resolve(value);
  }, 2000);
});
console.log("D");
p.then((data) => {
  console.log("Hey", data);
}).catch((error) => {
  console.log("Error", error);
});
console.log("E");
