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