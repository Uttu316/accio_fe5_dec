let arr = ["A", "B", "C"];

Array.prototype.forEach = function (callback) {
  let arr = this;

  for (let i = 0; i < arr.length; i++) {
    callback(arr[i] + "Hey", i, arr);
  }
};

arr.forEach((item, index, arr) => {
  console.log(item, index, arr);
});
