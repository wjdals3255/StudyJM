// Promise
// state : pending -> fulfilled or rejected 
// produce vs Consumer

// 1. Producer
// 새로운 프로미스가 만들어질 때는, executor라는 함수가 자동으로 실행한다
const proimse = new Promise((resolve, reject) => {
  // doing some heavy work (network, read files)
  console.log('doing somthing...')
  setTimeout(() => {
    resolve('jm');
    // reject(new Error('no network'));
  },2000);
}); 

// 2. Consumers: then, catch, finally
proimse
  .then((value) => {
    console.log(value);
  })
  .catch(error => {
    console.log(error)
  })
  .finally(() => {
    console.log('fianlly')  //성공과 실패 상관없이 실행됨
  })

  // 3. Promise chaining
  const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
  });

  fetchNumber
  .then(num => num * 2)
  .then(num => num * 3)
  .then(num => {
    return new Promise((resolve, reject) =>{
      setTimeout(() => resolve(num -1), 1000);
    });
  })
  .then(num => console.log(num));

  // 4. Error Handling
  const getHen = () =>
    new Promise((resolve, reject) => {
      setTimeout(() => resolve(`🐓`), 1000);
    })
  const getEgg = hen =>
    new Promise((resolve, reject) => {
      setTimeout(() => reject(new Error(`${hen} => 🥚`)), 1000);
    })
  const cook = egg =>
    new Promise((resolve, reject) => {
      setTimeout(() => resolve(`${egg} => 🍳`), 1000);
    });

  getHen() 
  .then(getEgg)
  .catch(error => {
    return '🥖'
  })
  .then(cook)
  .then(console.log)
  .catch(console.log)

  // .then(hen => getEgg(hen))
  // .then(egg => cook(egg))
  // .then(meal => console.log(meal));