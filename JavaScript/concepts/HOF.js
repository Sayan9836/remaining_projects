const radius = [1, 2, 3, 4];

const area = (r) => {
  return Math.PI * Math.pow(r, 2);
};

const circumference = (r) => {
  return 2 * Math.PI * r;
};

const Diameter = (r) => {
  return 2 * r;
};

const calculate = (radius, logic) => {
  const output = [];

  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }
  return output;
};

Array.prototype.calculate = function (logic) {
  const output = [];

  for (let i = 0; i < this.length; i++) {
    output.push(logic(this[i]));
  }
  return output;
};

// console.log(radius.map(area));

console.log(radius.calculate(Diameter)); // same as map

// console.log(calculate(radius,area));
// console.log(calculate(radius,circumference));
console.log(calculate(radius, Diameter));

//polyfill for map ------
Array.prototype.myMap = function (logic) {
  const temp = [];

  for (let i = 0; i < this.length; i++) {
    temp.push(logic(this[i]));
  }

  return temp;
};

//polyfill for filter

Array.prototype.myFilter = function (logic) {
  const temp = [];

  for (let i = 0; i < this.length; i++) {
    if (logic(this[i], i, this)) {
      temp.push(this[i]);
    }
  }

  return temp;
};

// polyfill for reduce

Array.prototype.myReduce = function (logic, initialValue) {
  var accumulator = initialValue;

  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? logic(accumulator, this[i], i, this) : this[i];
  }

  return accumulator;
};

const nums1 = [1, 2, 3, 4];

const ans = nums1.myReduce((acc, curr, i, arr) => {
  return acc + curr;
}, 0);
console.log(ans);

Array.prototype.customMap = function (logic) {
  const temp = [];

  for (let i = 0; i < this.length; i++) {
    temp.push(logic(this[i], i));
  }

  return temp;
};

const results = [1, 2, 3, 4, 5].customMap((ele) => {
  return ele * 2;
});

Array.prototype.customFilter = function (logic) {
  let temp = [];

  for (let i = 0; i < this.length; i++) {
    if (logic(this[i], i)) {
      temp.push(this[i]);
    }
  }

  return temp;
};

const filteredResults = [1, 2, 3, 4, 5, 6, 7, 8].customFilter((ele) => {
  return ele % 2 === 0;
});

console.log(filteredResults);

Array.prototype.customReduce = function (logic, initialValue) {
  let accumulator = initialValue;
  for (let index = 0; index < this.length; index++) {
    accumulator = accumulator
      ? logic(accumulator, this[index], index)
      : this[index];
  }

  return accumulator;
};

const summation = [1, 2, 3, 4, 5].customReduce((acc, curr) => {
  return acc + curr;
});

console.log(summation);

Array.prototype.customSome = function (logic) {
  for (let index = 0; index < this.length; index++) {
    if (logic(this[index])) {
      return true;
    }
  }

  return false;
};

const isSome = [1, 2, 3, 4, 5, 6].customSome((ele) => {
  return ele % 2 === 0;
});

console.log(isSome);

Array.prototype.myReduce = function (logic, initialValue) {
  let accumulator = initialValue;

  for (let index = 0; index < this.length; index++) {
    accumulator = accumulator
      ? logic(accumulator, this[index], i)
      : this[index];
  }

  return accumulator;
};

Function.prototype.myapply = function (context = {}, args = []) {
  if (typeof this !== "function") {
    throw new TypeError("must be call on a function");
  }

  if (!Array.isArray(args)) {
    throw new TypeError("args must be array");
  }

  context.fn = this;
  context.fn(...args);
};

const obj = {
  firstname: "sayan",
  lastname: "maity",
};

function myFun(a, b) {
  console.log(this.firstname + " " + this.lastname + " " + a + " " + b);
}

myFun.myapply(obj, ["hello", "world"]);
