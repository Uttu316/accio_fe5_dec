let counter = 0;

function incrementAsync() {
  setTimeout(() => {
    counter++;

    console.log(counter);
  }, Math.random() * 1000);
}

incrementAsync();
incrementAsync();
incrementAsync();
