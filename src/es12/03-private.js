// Declarando
class User {};

// Instancia de una clase
// const newUser = new User;

class User {
  // Métodos
  greeting() {
    return 'Hello';
  }
}

const daniFigue = new User();
console.log(daniFigue.greeting());
const bebeloper = new User(); // Another instance
console.log(bebeloper.greeting());

// Constructor
class User {
  constructor() {
    console.log('New user');
  }
  greeting() {
    return 'Hello';
  }
}
const david = new User();

// this
class User {
  constructor(name) {
    this.name = name;
  }
  // Métodos
  speak() {
    return 'Hello';
  } 
  greeting() {
    return `${this.speak()} ${this.name}`; // Using template literals
  }
}

const ana = new User('Anna');
console.log(ana.greeting());

// Setters and Getters
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  // Métodos
  #speak() {
    return 'Hello';
  } 
  greeting() {
    return `${this.speak()} ${this.name}`; // Using template literals
  }
  // Set and Get
  get #uAge() {
    return this.age;
  }
  set #uAge(n) {
    return this.age = n;
  }
}

const bebeloper1 = new User('David', 15);
console.log(bebeloper1.uAge); // Using getter
console.log(bebeloper1.uAge = 20); // Using setter