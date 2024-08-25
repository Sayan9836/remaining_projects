let currTime;
function currentTime() {
  const date = new Date();
  currTime = date.toLocaleTimeString();
  const element = document.getElementById("time");
  element.innerText = currTime;
}
setInterval(currentTime, 1000);

//

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 1000);
})
  .then((result) => {
    return result * 2;
  })
  .then((result) => {
    return result * 2;
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

const operation1 = (cb) => {
  console.log("operation1");
  cb();
};

const operation2 = (cb) => {
  console.log("operation2");

  cb();
};

const operation3 = () => {
  console.log("operation3");
};

operation1(() => {
  operation2(() => {
    operation3();
  });
});
