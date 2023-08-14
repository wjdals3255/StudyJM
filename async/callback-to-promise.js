// Callback Hell
class UserStorage {
  loginUser(id, password){
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(
          (id === 'jm' && password === 'movv') ||
          (id === 'coder' && password === 'coding')
        ) {
          resolve(id);
        } else {
          reject(new Error('not found'))
          
        }
      }, 2000);
    });
  }

  getRoles(user){
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(user === 'jm'){
          resolve({name: 'jm', role: 'admin'});
        } else {
          reject(new Error('no access'));
        }
      }, 1000);
    });
  }
}

const a = getRules('jm')














const userStorage = new UserStorage();
const id = prompt('enter your id')
const password = prompt('enter your password')
userStorage
  .loginUser(id, password)
  .then(userStorage.getRoles) 
  .then(user => alert(`hello ${user.name}, you have a ${user.role} role`))
  .then(console.log);

