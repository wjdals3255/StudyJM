// async & await


// 1. astnc 
async function fetchUser(){
    // do network reqeust is 10 secs...
  return 'jeong';
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await 
function delay(ms){
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(2000);
  return '🍎';
}

  async function getBanana() {
  await delay(1000);
  return '🍌';
}

async function pickFruits() {
  const applePromise = getApple();
  const bananaPromise = getBanana();
  const apple = await applePromise;
  const banana = await bananaPromise;
  return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// 3. useful Promise APIs
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then(fruits => 
    fruits.join(' | ')
  )
}

pickAllFruits().then(console.log);

// 제일먼저 수행되는 단 하나 'race'
function pickOnlyOne () {
  return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);