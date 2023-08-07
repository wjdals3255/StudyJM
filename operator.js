// 1. String concatenation
console.log('my' + 'cat');
console.log('1' + 2);
console.log(`string literals : 1 + 2 = ${1 + 2}`);

// 2. Numeric operators
console.log(1 + 1);   //add
console.log(1 - 1);   //substract
console.log(1 / 1);   // divide
console.log(1 * 1);   // multiply
console.log(5 % 2);   // remainder
console.log(2 ** 3);  // exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`preIncrement: ${postIncrement}, counter: ${counter}`);
const preDecrement = --counter;
console.log(`preIncrement: ${preDecrement}, counter: ${counter}`);
const postDecrement = counter--;
console.log(`preIncrement: ${postDecrement}, counter: ${counter}`);

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; //x = x + y;
x -= y;
x *= y;
x /= y;

//5. comparison operator
console.log (10 < 6);
console.log (10 <= 6);
console.log (10 > 6);
console.log (10 >= 6);

//6. Logical operators || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2;

// || (or), 처음으로 true 면 멈춤
console.log(`or: ${value1 || value2 || cheak()}`);

// && (and), 모두 true 여야함
console.log(`and: ${value1 && value2 && cheak()}`);

// ! (not)
console.log(!value1);

function cheak(){
  for (let i = 0; i < 10; i++) {
    console.log('🤮');
  }
  return true;
}

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == (동등연산자)
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === (일치연산자)
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
console.log('===object equality===');
const jm1 = {name: 'jm'};
const jm2 = {name: 'jm'};
const jm3 = jm1;
console.log(jm1 == jm2);
console.log(jm1 === jm2);
console.log(jm1 === jm3);

// 8. Conditional operators : if
// if,  else if, else
const name = 'coder';
if (name === 'jm') {
  console.log('Welcome, Jm!');
}else if(name === 'coder'){
  console.log('You are amazing coder');
}else {
  console.log('unkwnon');
}

// 9. Ternary operator: ?
// condition ? value1 : value2;
console.log(name === 'jm' ? 'yes' : 'no'); 

// 10. Switch 
const browser = "chrome";
switch (browser) {
  case "IE":
    console.log('go away!');
    break;
  case "chrome":
  case "fierFox":
    console.log('love you!');
    break;
  default:
    console.log('same all');
    break;
}

// 11. Loops
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}

// do while
do {
  console.log(`do while: ${i}`);
  i--;
} while (i > 0);

// // for loop, for(begin; condition; step)
for (i = 3; i > 0; i--){
  console.log(`for: ${i}`);
}

// 왜 무한 루프에 빠지는것?
for (let i = 3; i > 0; i -= 2) {  //-= 를 주어 3,1이 출력되게 수정하였는데 이유를 아직 모르겠음
    console.log(`inline variable for: ${i}`)
    if( i === 1 ){
      break;
    }
} 

for (let i = 0; i < 11; i++) {
  if(i % 2 === 0){
    console.log(`q1. ${i}`);
  }
}

for (let i = 0; i < 11; i++) {
  if (i > 8){
    break;
  }
  console.log(`q2. ${i}`);
}