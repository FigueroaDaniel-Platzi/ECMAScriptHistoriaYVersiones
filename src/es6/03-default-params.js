function newUser(name, age, country) {
  var name = name || 'Daniel';
  var age = age || 30;
  var country = country || 'CL';
  console.log(name, age, country);
}

newUser();
newUser('Alfredo', 31, 'CA');