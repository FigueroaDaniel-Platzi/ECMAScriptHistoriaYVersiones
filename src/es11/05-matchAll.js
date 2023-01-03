const regex = /\b(Apple)+\b/g;
const fruit = 'Apple, Banana kiwi, etc etc';
for(const match of fruit.matchAll(regex)) {
  console.log(match);
}