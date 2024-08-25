let count = 0;
const getData = () => {
  console.log("Feching data", count++);
};

function debouncing(d) {
  let timer;
  return function () {
    // let context = this
    // args = arguments
    clearTimeout(timer);
    timer = setTimeout(() => {
      getData();
    }, d);
  };
}

const result = debouncing(300);
