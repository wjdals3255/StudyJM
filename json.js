// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringify(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const poodle = {
  name: "Chungbae",
  color: "white",
  size: "null",
  birthDate: new Date(),
  jump: () => {
    console.log(`${name} can jump`);
  },
};

json = JSON.stringify(poodle);
console.log(json);

json = JSON.stringify(poodle, ["name", "color"]);
console.log(json);

json = JSON.stringify(poodle, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === "name" ? "jeongmin" : value;
});
console.log(json);
 
// 2. JSON yo Object
// parse(json)
console.clear();
json = JSON.stringify(poodle);
const obj = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);
poodle.jump();
// obj.jump();

console.log(poodle.birthDate.getDate());
console.log(obj.birthDate.getDate());