const object1 = {
  name: "Nitishkumar S",
  age: 22,
};

const object2 = {
  age: 22,
  name: "Nitishkumar S",
};

JSON.stringify(object1) === JSON.stringify(object2);
// false

console.log(object1, object2);
// true
