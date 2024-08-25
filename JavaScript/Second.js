
// Advance JavaScript //

const obj = { name5: "string", value: 45 };
for (let f in obj) {
    console.log(f);
}

const obj1 = {};

// create reference
const y = obj1;
// now create property
y.d = "property created using reference";

console.log(obj1.d);// we have created a object property using reference variable;

// class Module {
//     constructor(a, b) {
//         this.a = a;
//         this.b = b;

//     }
//     function show() {
//     console.log(a + b);
// }
// }

// create instance of the class
// const obj2 = new Module(10, 15);
// obj2.show();
// const obj3 = new Module();

//console.log(obj2 instanceof Module);

let f = function () {
    this.a = 1;
    this.b = 2;
}
let o = new f();// creating an instance of the function;
o.d = 5;

f.prototype.b = 3;// override property b if it does not exist
f.prototype.a = 4;// Override property a if it does not exist

console.log(o.a);
console.log(o.b);
console.log(o.c);
console.log(o.d);

console.log(o);

console.log(f);
console.log(f.prototype);

// Static methods

class staticexample {
    // declare a constructor
    constructor() {
        // console.log(staticexample.oncall());
        console.log(this.constructor.oncall());
    }
    static oncall() {
        return "this is a static method";
    }
    static oncall2() {
        return this.oncall;
    }
}

const st = new staticexample();
//console.log(st.oncall());//error;

//console.log(staticexample.oncall2());


//       Inheritance          //

class person {
    constructor(fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }
}

class Age extends person {
    constructor(age) {
        super("sayan", "ayan");
        this.age = age;
    }
    show1() {
        console.log(this.fname + "," + this.lname);
        console.log(this.age);
    }
}
// creating instance of class Age
const d = new Age(23);
d.show1();

// prototype inheritance //
//prototype chaining//
//***********************************//
// prototype is the hidden property of an object;

let car = {
    model: "tata",
    wheel: "four",
    show() {
        console.log("hii" + this.model + "your car has" + this.wheel + "wheels");
    }
};

let bike = {
    cc: 250,
    __proto__: car // created proto property of bike object and specify the car object
};

let bicycle = {
    Gear: 5,
    __proto__: bike // created proto property of bicycle object and specify the bike object
}

// specify__ proto property to bike object 
//bike.__proto__ = car;
//console.log(bike);

console.log(bike.cc);

// ascess car property using bike object 
console.log(bike.wheel);
console.log(bike.model);
console.log("***************************")
// ascess car property using bicycle object 
console.log(bicycle.model);
console.log(bicycle.wheel);

// class
class Employee {
    constructor(name1) {
        this.name1 = this.name1;
        this.age1 = 20;
    }
    Empname() {
        console.log(this.name1);
    }
}

// child class
class member extends Employee {
    constructor(name1, salary) {
        super(name1);// calling parent class constructor using child class parameter
        this.name1 = name1;
        this.salary = salary;
        this.age1 = 30;
    }
    // override Empname method() of parent class;
    Empname() {
        console.log(this.age + "," + this.name1 + "and" + this.salary);
    }              
}

// create instance:
const mb = new member("sayan", 35000);
mb.Empname();

const dt = new Date();
console.log(dt);
console.log(dt.toString());

//                    Maps                   //

const Mymap = new Map();

let keystring = "keystring", keyObj = {}, keyfunc = function () { };

// Using set method() to set key value pair
Mymap.set(keystring, "KeystringValue");
Mymap.set(keyObj, "KeyObjValue");
Mymap.set(keyfunc, "KeyfuncValue");

console.log(Mymap.size);

// using get method to get the content of the map;
console.log(Mymap.get(keystring));
console.log(Mymap.get(keyObj));
console.log(Mymap.get(keyfunc));

//Mymap.set(NaN, "Not a number");
//console.log(Mymap.get(NaN));

// iterate map key and values

for (let [key, value] of Mymap) {
    console.log(key + " " + value);
}

// another way to create object in map
const Newmap = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three']

]);

Newmap.forEach(function (key, value) {
    console.log(key + " " + value);
})

//       WEAK MAP       //

// weak map cannot be iterated
//means we cannot ascess the key of weakmap

//null.something=garbage values;

// call weakmap constructor()
let weakmap = new WeakMap();

let obj2 = {}, obj3 = {};

weakmap.set(obj2, "sayan");
weakmap.set(obj3, "kunal");

console.log(weakmap.get(obj2));
console.log(weakmap.get(obj3));


// for (let [key, value] of weakmap) {
//     console.log(key + " " + value);// error
// }


//           Set()          //

//dulicate values are not allowed;

const set = new Set();

set.add(1);
set.add(2);
set.add(2);// not inserted
set.add({ a: "one", b: "two" });
console.log(set);

//another way to create set object
const set1 = new Set([1, 2, 3, 4]);
set1.delete(4);
console.log(set1);

// iterate
set1.forEach(value => {
    console.log(value);
})
//iterate
for (let item in set1) {
    console.log(item);
}

//        WeakSet()      //

const ws = new WeakSet();
let obj4 = {}, obj5 = {};
ws.add(obj4);
ws.add(obj5);
ws.delete(obj4);
console.log(ws);


//     Exception handling   //

// only works for run-time error
try {
    variable
    console.log("Try block");
} catch (e) {
    console.log(e.message);
    console.log(e.name);
    console.log(e.stack);
} finally {
    console.log("this will always execute");
}

//             Regular Expression             //

let str = "Welcome to daily tution";

//let reg = new RegExp("daily");// long expression
let reg = /TO/i;// short expression
console.log(str.search(reg));

// Using query selector we can ascess any html tag using id,class,name
let para = document.querySelector("#para1");
console.log(para);
para.innerHTML = "paragraph";

let sub = document.querySelector("input[type=submit]");
// add class to html submit;
sub.classList.add("submit");

//          NewDOM element           //

// Creating new paragraph
let p1 = document.createElement("p");
let p2 = document.createElement("p");

// adding text to the element
p1.textContent = "First Paragraph";
p1.textContent = "Second paragraph";

const content = document.querySelector("content");
content.appendChild(p1);
document.body.appendChild(p2);


























































































































































































































































































