// 1. function
function printHello(){
  console.log('Hello');
}

printHello();
function log(message){
  console.log(message);
}
log('DogManJM!');
log(1234);

// 2. Parameters
function changeName(obj) {
  obj.name = 'coder';
}
const JM = {name: 'JM'};
changeName(JM);
console.log(JM);

// 3. Default Parameters
function showMessage(message, from = 'unknown') {
  console.log(`${message} by ${from}`)
}
showMessage("hi");

// 4. Rest parameters
function printAll(...args) {
  for(let i = 0; i < args.length; i++){
    console.log(args[i]);
  }
  
  for(const arg of args){
    console.log(arg);
  }
}
printAll('movv', 'JM', '30');

// 5. Local scope
let gMessage = 'global';
function printMessage(){
  let messge = 'hello';
  console.log(messge);
  console.log(gMessage);
  function printA(){
    console.log(messge);
    let childMessge = 'hello'
  }
  // console.log(childMessge);
}
printMessage();

// 6. Return a value
function sum (a,b){
  return a + b ;
}
const result = sum(1, 2);
console.log(`sum: ${sum(1, 2)}`)

// 7. Early return, early exit
function upgradeUser(user){
  if(user.point <= 10){
    return;
  }
  // logic
}


// Callback
function randomQuiz(answer, printYes, printNo){
  if (answer === 'love you'){
    printYes();
  } else {
    printNo();
  }
}

const printYes = function(){
  console.log('yes!');
};

const printNo = function print(){
  console.log('no!');
};

randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

//Arrow function
const simplePrint = () => console.log('simplePrint!');
const add = ( a ,b ) => a + b;
const simpleMultiply = (a, b) => {
  return a * b;
};

// IIFE : Immediately Invoked Function Expression
(function hello() {
  console.log('IIFE');
})();