// map,filter,reduce,call,apply,bind,promise.all,promise.allsettle,promise.race,promise.any

// promise.race()

const race = (promises) => {
  return new Promise((resolve, reject) => {
    promises.forEach((each) => {
      each().then(resolve, reject);
    });
  });
};

const promise1 = async () => {
  const responce = await fetch(
    "https://jsonplaceholder.typicode.com1/todosaks/klm",
  );

  if (!responce.ok) {
    throw new Error("feched failed bro");
  }
  return await responce.json();
};

const promise2 = async () => {
  const responce = await fetch("https://jsonplaceholder.typicode.com/todos/2");
  return await responce.json();
};

const promise3 = async () => {
  const responce = await fetch("https://jsonplaceholder.typicode.com/todos/3");
  return await responce.json();
};

race([promise1, promise2, promise3])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

//  js is always pass by value

const obj = {
  name: "sayan",
};

const random = (obj) => {
  obj = { name: "ayan" };
};

random(obj);

console.log(obj);

// generator function

/* can stop the execution in midway and can continue from that point later on */

function* generator() {
  yield 1;
  yield 2;
}

const iterator = generator();

console.log(iterator.next());
console.log(iterator.next());

var scope = "global scope";
function check() {
  var scope = "local scope";
  function f() {
    return scope;
  }
  return f;
}

console.log(check()());

// x = 3;
let x;
console.log(x);
