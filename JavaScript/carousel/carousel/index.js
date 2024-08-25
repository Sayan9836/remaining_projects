const images = document.querySelectorAll(".image");
const nextBtn = document.querySelector(".right");
const prevBtn = document.querySelector(".left");
let count = 0;
images.forEach((img, i) => {
  img.style.left = `${i * 100}%`;
  console.log("hello");
});

nextBtn.onclick = () => {
  if (count < images.length - 1) {
    count++;
    slideImage();
  }
};
prevBtn.onclick = () => {
  if (count > 0) {
    count--;
    slideImage();
  }
};

const slideImage = () => {
  images?.forEach((img) => {
    img.style.transform = `translateX(-${count * 100}%)`;
  });
};
