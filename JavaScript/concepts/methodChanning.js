const methodChanning = {
  price: 10,

  getPrice: function () {
    return this.price;
  },

  incrementPrice: function () {
    this.price++;
    return this;
  },
  doublePrice: function () {
    this.price = this.price * 2;
    return this;
  },
};

const val = methodChanning.incrementPrice().doublePrice().getPrice();
console.log(val);
