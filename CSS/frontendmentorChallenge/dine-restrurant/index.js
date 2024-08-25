const hamburger = document.getElementsByClassName("hamburger")[0];
const header = document.getElementsByTagName("header")[0];

const li = document.getElementsByTagName("li");
console.log(li);
const toolTip = document.getElementsByClassName("tooltip")[0];
let flag = false;
hamburger.onclick = () => {
  if (!flag) {
    header.style.left = "0";
    flag = true;
  } else {
    header.style.left = "-100vw";
    flag = false;
  }
};

for (let i = 0; i < li.length; i++) {
  li[i].addEventListener("mouseenter", () => {
    const div = document.createElement("div");
    div.className = "tooltip";
    div.textContent = li[i].textContent;
    li[i].appendChild(div);
    console.log("hello");
  });

  li[i].addEventListener("mouseleave", () => {
    const tooltip = document.querySelector(".tooltip");
    if (tooltip) {
      li[i].removeChild(tooltip);
    }
  });
}
