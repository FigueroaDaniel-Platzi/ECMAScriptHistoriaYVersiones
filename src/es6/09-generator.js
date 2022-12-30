function* itarate(array) {
  for(let value of array) {
    yield value; // I can use it to return
  }
}

const it = iterate(['Oscar', 'David', 'Ana', 'Daniel']);

console.log(it.next().value);