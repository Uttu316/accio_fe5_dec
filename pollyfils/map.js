let arr = ["A", "B", "C"];

//Polyfill for map

Array.prototype.map = function (callback) {
  let arr = this;

  let data = [];

  for (let i = 0; i < arr.length; i++) {
    let value = callback(arr[i], i, arr);
    data.push(value);
  }

  return data;
};

let newArray = arr.map((item, index, arr) => {
  return item + index;
});

console.log(newArray);
