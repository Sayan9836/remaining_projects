//printing in the console
console.log("Hello world");

// display the variables;
let a,
  b = "sayan maity",
  Age = 24;
console.log(Age);
console.log(a);
console.log(b);

// constant
const Temp = 12.4,
  Name = "sayan";
console.log(Temp);
console.log(Name);

let goal = "happy journey";
let reference = goal;
console.log(reference);

const inf = Infinity;
const ninf = -Infinity;
const nan = NaN;

// boolean type
let tu = true;
let fa = false;

const blue = Symbol();
const white = Symbol("sayan");
blue === white; //get false;

let Myvlue;
console.log(Myvlue); // get undifine
Myvlue = null;
console.log(Myvlue); //get null

// OBJECT TYPES;
const obj = {}; // empty property of obj
obj.Age = 24;
console.log(obj.Age);

const abc = { name: "sandi", Age: 54 };

delete abc.Age; // deleting the properties;
console.log(abc);

// creating an array
const a1 = [1, 2, 3, 4];
const a2 = [1, 2, null, "five"];
const a3 = ["hello", "world", "array"];
// creating 2D array;
const a4 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(a4.length);
console.log(a1[0]);
a1[0] = "welcome"; // changing array element;
console.log(a1[0]);

// display date;
const dt = new Date(2022, 4, 28);
console.log(dt);

// Create Map
const roles = new Map();
roles.set(1, "User1");
roles.set(2, "User2");

// Create Set
const roles2 = new Set();
roles2.add("User3");
roles2.add("User4");

//Escaping
let str = "dont touch my bag,otherwise'you will be punished'";
let str1 = "he is a good person";
let str2 = 'we should not take,otherwise"that\'s thing"'; // Escaping

// String Concatenation
let temp = 20.5;
let str9 = "hello javascript" + temp + "\u00b0c";

//if and else Statement
let time = 9;
if (time < 12) {
  console.log("Good Morning");
} else if (time == 9) {
  console.log("Good Afternoon");
} else {
  console.log("Good Night");
}

//Switch Statement
let ans = 1;
switch (ans) {
  case 1:
    console.log("you have select javaScript");
    break;
  case 2:
    console.log("skjbajkdb");
    break;
  case 3:
    console.log("sdbs");
    break;
  default:
    console.log("wrong input");
    break;
}

//Loops

//while loop;
let phy = 10;
let klj = phy;
let rev = 0;
while (phy != 0) {
  let rem = phy % 10;
  rev = rev * 10 + rem;
  phy = phy / 10;
}
if (rev == klj) {
  console.log("palindrome");
}

// do while
let count = 0;
do {
  console.log(count);
  count++;
} while (count < 5);

// for Loop
//single variable
for (let i = 0; i < 5; i++) console.log(i);
//multiple variable
for (let i = 0, j = 5; i < 5; i++, j--) {
  console.log(i + "and" + j);
}
// nested forLoop
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(i + "," + j);
  }
  console.log("\n");
}

// for in Loop
const obj2 = { a: 1, b: 2, c: 3 };
// for every index in the array
for (let o in obj2) {
  console.log(o + ""); //printing every index of an array
  console.log(obj2[o] + ""); //printing every element of an array
}

// for of loop
let arr = [1, 2, 3, 4, 5];
// for every value in the array
for (let val of arr) console.log(val + ""); //printing every element of an array

// we can also print string using this loop
let str8 = "tuition";
for (let val1 of str8) console.log(val1 + "");

// operators:- +,-,*,%,/;

//pre and post increment operator
let j,
  x = 5;
j = ++x; // first increment ,then storing into j
console.log(j);
j = x++; // first storing into j,then increment;
console.log(j);
console.log(x);

// Strict(===)and Abstract(==) Equality
//not abstract(!=)and non strict(!==)

let m = 10;
str = "10";

// using abstract equality
console.log(m == str); // true , as it only check value,not type

//using strict equality
console.log(m === str); // false, as type is different

// converting string to number(typecasting)
console.log(m === Number(str)); // true,as both type and value is same

// type of operator
console.log(typeof 1);
console.log(typeof "daily");
console.log(typeof true);
console.log(typeof null);

// normal object decleration
const obj4 = { a20: 1, b20: 2, c20: 3 };
//Destructing Assingment Operator
const { a20, b20, c20 } = obj4;
console.log(a20);
console.log(b20);
console.log(c20);

// declare array
const arr3 = [1, 2, 3, 4, 5, 6, 7, 8];
//Destructing Assingment Operator
[([a21, b21, c21, ...rest] = arr3)]; //...rest ->spread Operator;
console.log(a21);
console.log(b21);
console.log(c21);
console.log(rest); // printing remaining elements;

//member ascess Operator(.)

const obj5 = { id: 1, name: "raj" };
console.log(obj5.name);

const car = { Cname: "BMW", momdel: "i8", year: 2002 };
console.log("Cname" in car); // using in Operator//true

// creating instance of an class;

class Model {
  constructor() {}
}

const C1 = new Model();
const C2 = new Model();

// instanceof Operator
console.log(C1 instanceof Model); //true

// delete Operator
const arr4 = [1, 2, 3, 4];
delete arr4[3]; // delete arr4 element
console.log(arr4);

//Conditional Operator
let print = "Hey EveryOne";
print = print ? `${print} my name is sayan` : "welcome";
console.log(print);

// label Statement used to control the flow more precisely
let a5 = 1;
label: while (a5 == 1) {
  console.log(a5);
  break label;
}
loop: while (a5 < 5) {
  if (a5 == 1) {
    continue loop;
  }
  console.log(a5);
  break loop;
}

// function syntax
function name1() {
  console.log("hello function");
}

name1(); // function calling
const f = name1;
//console.log(f());

// function argument
// parameterised function;
function demo(a, b) {
  return a + b;
}
console.log(demo(5, 5)); // passing value;

// Default argument
function f3(x = "default") {
  return "in function:x=" + x;
}
console.log(f3());

// Anonymous function
const f4 = function () {
  // statement
};
f4();

// function as an Object Properties;
const o = {
  name2: "Anonymous Function",
  invoke: function () {
    return "You call Me!" + this.name2;
  },
};

console.log(o.invoke());

// Arrow Notation //
//you can Omit the function keyword
//you can omit the {} if you have single statement
//you can omit the () if you have single argument

const f5 = () => "hey everyOne";
const f6 = (arg1) => "hello";
const f7 = (arg1, arg2) => {
  return arg1 + arg2;
};
console.log(f7());

const obj6 = {
  name3: "sayan",
  magic() {
    return "hello" + this.name3;
  },
};
console.log(obj6.magic()); // calling magic method

// Destructing Argument //use to extract values of object
//*************************************************************//

const o1 = {
  w1: "daily",
  w2: "tution",
  w3: "tutorial",
};
// create function
const getdata = ({ w1, w2, w3 }) => {
  return w1 + "" + w2 + "" + "" + w3;
};
console.log(getdata(o1));

let k = "hello";
let j2 = "3000";

const show = () => console.log(this.k + "sayan" + "i got" + this.j2);
const Make = () => console.log(this.k + "javaScript");

show();
Make();

// closure // using closure we can ascess the inner variable outside of the function

let closure;
{
  let block = "character";
  closure = function () {
    console.log(block);
  };
}
closure();

function counter() {
  let count = 0;
  return function () {
    return count++;
  };
}
let counter3 = counter();
console.log(counter3);

//IIFE(immediately invoked function expression)
//************************************************//

const f9 = (function () {
  let str = "Immediately invoked Expression";
  return str;
})(); // if we does not give () we will get reference of this function
//to immediately execute this function we use ()
console.log(f9);

//Using closure;
const f10 = (function () {
  let count = 1;
  return function () {
    return count++;
  };
})();
console.log(f10());
console.log(f10());
console.log(f10());

//console.log(x1);
//let x1=4;// error
//var x1=4;// undifine//this mechanism is called hosting;

// if we declare any variable by using "var" keyword we can ascess it every where;// no scoping
// can ascess variable outside the block;
// if we declare any variable by using "let" keyword we can ascess it only within that block;
//cannot ascess variable outside the block;

// javascript strict mode //
//"use Strict"

// Array //
//****************//

const arr5 = [
  { name4: "daily tution", videos: 120 },
  [
    function () {
      return "containing array";
    },
    "three",
  ],
];
console.log(arr5[1][0]); // reference of the function;
console.log(arr5[1][0]()); // calling the function;

// Array Operations //
//************************//

const arr6 = [1, 2, 3, 4, 5];
// push method return the length of the array after inserting the array element;
console.log(arr6.push(6));
// pop method will automatically delete the last element of an array;
console.log(arr6.pop());

console.log(arr6.unshift(0)); //insert 0 at the beginning;
console.log(arr6.shift());
console.log(arr6);

console.log(arr6.concat(8, 9, 10));

console.log(arr6.slice(2)); //start from 2;
console.log(arr6.slice(2, 4));
console.log(arr6.slice(-1)); // start from end;
arr6.splice(1, 0, 13, 14); // add 2 elements 13,14 after 1;
console.log(arr6);

arr6.splice(1, 2); // remove 2 elements after 1;
console.log(arr6);

const arr7 = [1, 2, 3, 4, 5];

arr7.copyWithin(1, 2);
console.log(arr7);

// map function;
const arr1 = [1, 2, 3, 4, 5];

// call arr1 and pass map function
const map1 = arr1.map((x) => x * 2);

console.log(arr1);
console.log(map1);

// creating object with two object element
const cart = [
  { product: "laptop", price: 20000 },
  { product: "mobile", price: 14000 },
];

const product = cart.map((x) => x.product);
const price = cart.map((x) => x.price);

console.log(product);
console.log(price);

const arr8 = [1, 2, 3, 4, 5];
arr8.fill("d", 1, 3);

console.log(arr8);
