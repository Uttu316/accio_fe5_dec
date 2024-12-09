let arr = ["Vishal", "Aman", "Ravi", "Swetha", "Satakshi"];

if (typeof Array.protoype.at !== "function") {
  Array.protoype.at = function (position) {
    const array = this;
    //object refrence from where the function called

    return array[position];
  };
}
