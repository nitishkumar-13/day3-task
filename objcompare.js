const object1 = {
  name: "Nitishkumar S",
  age: 22,
};

const object2 = {
  age: 22,
  name: "Nitishkumar S",
};

if (Object.keys(object1).length === Object.keys(object2).length) {
  console.log("same the length value")

  for (let key in object1) {
    if (object1[key] === object2[key]) {
      console.log(key + "same value");
    }
    else {
      console.log(key + "don't have same value");
    }
  }
}
else {
  console.log("It's Different");
}
