// enhanced object literals
function newUser(user, age, country, uId) {
  return {
    user,
    age,
    country,
    uId
  }
} 

console.log(newUser('DanielF', 30, 'CL', 1));