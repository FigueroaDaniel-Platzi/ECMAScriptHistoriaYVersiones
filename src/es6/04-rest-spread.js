// La desestructuración (destructuring) consiste en extraer los valores de arrays o propiedades de objetos en distintas variables.

// arrays destructuring
let fruits = ['Apple', 'Banana'];
let [a, b] = fruits;
console.log(a, fruits[1]);

// objects destructuring
let user = {username: 'Daniel', age:34};
let {username, age} = user;
console.log(username, user.age);

// spread operator
let person = {name: 'Daniel', age: 30};
let country = 'CL';

let data = {id: 1, ...person, country};
console.log(data);

// rest
function sum(num, ...values) {
  console.log(values);
  console.log(num + values[0]);
  return num + values[0];
}

sum(1, 1, 2, 3);