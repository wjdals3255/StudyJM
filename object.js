// Object
// object = { key : value };

// 1. Literals and properties
const obj1 = {};            // 'object literal' syntax
const obj2 = new Object();  // 'object constructor' syntax

function print(person){
  console.log(person.name);
  console.log(person.age);
}

const JM = { name: 'jm', age: 30 };
print(JM);   

// 2. Computed properties
// key string type
console.log(JM.name);     // key 에 해당하는 값을 받아올때
console.log(JM['name']);  // 정확히 어떤 key 가 필요한지 모를때

function printValue (obj, key){
  console.log(obj[key]);
}
printValue(JM, 'name');
printValue(JM, 'age');

// 3. Preperty value shorthand
const person1 = {name: 'bob', age: 2};
const person2 = {name: 'steve', age: 3};
const person3 = {name: 'dave', age: 4};
const person4 = new Person('jeongmin', 30);
console.log(person4)


// 4. Constructor Function
function Person(name,age){
  // this = {}
  this.name = name;
  this.age = age;
  // return this;
}

// 5. in operator
console.log('name' in JM);
console.log('age' in JM);
console.log('random' in JM);

// 6. for..in vs for..of
// for (key in obj)
console.clear();
for (key in JM){
  console.log(key);
}

// for(calue of iterable)
const array = [1, 2, 3, 5];
for (value of array){
  console.log(value)
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = {name: 'jeong', age: '30'};
const user2 = user;
// user2.name = 'coder';
console.log(user);

// old way
const user3 = {};
for (key in user){
  user3[key] = user[key];
}
console.clear();
console.log(user3);

const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = { color: 'red'};
const fruit2 = { color: 'blue', size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size); 