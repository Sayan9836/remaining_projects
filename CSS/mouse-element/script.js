const cursor = document.getElementsByClassName("cursor")[0];

let cnt = 0;
document.addEventListener("mousemove", (e) => {
  cursor.style.cssText =
    "left: " +
    e.clientX +
    "px; top: " +
    e.clientY +
    "px; visibility: " +
    "visible";
});

document.addEventListener("mouseleave", (e) => {
  cursor.style.visibility = "hidden";
});
