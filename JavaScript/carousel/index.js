const slides = document.querySelectorAll(".slide");
const prevButton = document.querySelector(".prevButton");
console.log(slides);

var a = 10;

setTimeout(() => {
  console.log("hello");
}, 3000);
let count = 0;
slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

const goPrev = () => {
  count--;
  slideImage();
};

const goNext = () => {
  count++;
  slideImage();
};

const slideImage = () => {
  slides.forEach((slide, index) => {
    if (count < 0) {
      count = 0;
      prevButton.style.display = "none";
      // prevButton.style.display = 'inherit'
    } else if (count >= slides.length - 1) {
      count = slides.length - 1;
    } else {
      slide.style.transform = `translateX(-${count * 100}%)`;
      prevButton.style.display = "inherit";
    }
  });
};
