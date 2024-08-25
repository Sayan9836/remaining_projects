function abc() {
  var b = 900;
  return function x() {
    var a = 7;
    return function y() {
      console.log(a, b);
    };
  };
}

abc()()();

userObj = {
  name: "sayan",
  age: 28,
};

function userInfo(obj) {
  return function (userInfo) {
    return obj[userInfo];
  };
}

let res = userInfo(userObj);
console.log(res("name"));
