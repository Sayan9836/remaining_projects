let flag1 = false;
let flag2 = false;
let flag3 = false;
let flag4 = false;

const menu1 = document.getElementsByClassName("menu1")[0];
const menu2 = document.getElementsByClassName("menu2")[0];
const menu3 = document.getElementsByClassName("menu3")[0];
const menu4 = document.getElementsByClassName("menu4")[0];

const content1 = document.getElementsByClassName("content1")[0];
const content2 = document.getElementsByClassName("content2")[0];
const content3 = document.getElementsByClassName("content3")[0];
const content4 = document.getElementsByClassName("content4")[0];

menu1.onclick = () => {
  if (flag1) {
    content1.style.display = "none";
    flag1 = false;
  } else {
    content1.style.display = "inherit";
    flag1 = true;
  }
};

menu2.onclick = () => {
  if (flag2) {
    content2.style.display = "none";
    flag2 = false;
  } else {
    content2.style.display = "inherit";
    flag2 = true;
  }
};

menu3.onclick = () => {
  if (flag3) {
    content3.style.display = "none";
    flag3 = false;
  } else {
    content3.style.display = "inherit";
    flag3 = true;
  }
};

menu4.onclick = () => {
  if (flag4) {
    content4.style.display = "none";
    flag4 = false;
  } else {
    content4.style.display = "inherit";
    flag4 = true;
  }
};
