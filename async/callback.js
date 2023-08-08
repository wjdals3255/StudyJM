

// synchronous    
console.log("1"); //동기
setTimeout(() => console.log("2"), 1000);  //비동기 1초뒤 실행
console.log("3"); //동기

// Synchronous callback
function prinImmediatrly(print) {
  print();
}
prinImmediatrly(() => console.log('hello'));  //동기

// Asynchronous callback
function printWithDelay(print, timeout){
  setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 2000); // 비동기로 2초뒤 실행

// Callback Hell
class UserStorage {
  loginUser(id, password, onSuccess, onError){
    setTimeout(() => {
      if(
        (id === 'jm' && password === 'movv') ||
        (id === 'coder' && password === 'coding')
      ) {
        onSuccess(id);
      } else {
        onError(new Error('not found'))
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError){
    setTimeout(() => {
      if(user === 'jm'){
        onSuccess({name: 'jm', role: 'admin'});
      } else {
        onError(new Error('no access'));
      }
    }, 1000);
  }
} 

const userStorage = new UserStorage();
const id = prompt('enter your id')
const password = prompt('enter your password')
userStorage.loginUser(
  id,
  password,
  user => {
    userStorage.getRoles(
    user,
    userWithRole => {
      alert(
        `hello ${userWithRole.name}, you have a ${userWithRole.role} role`
      );
    },
      error => {
        console.log(error);
      }
    );
  },
  error => {
    console.log(error);
  }
);