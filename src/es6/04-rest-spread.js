// La desestructuración (destructuring) consiste en extraer los valores de arrays o propiedades de objetos en distintas variables.

// arrays destructuring
let fruits = ['Apple', 'Banana'];
let [a, b] = fruits;
console.log(a, fruits[1]);

// objects destructuring
let user = {username: 'Daniel', age:34};
let {username, age} = user;
console.log(username, user.age);