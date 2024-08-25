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

myFun.myapply(obj, "hello", "world");