// Event propagation

document.querySelector(".grandparent").addEventListener(
  "click",
  (e) => {
    console.log("grandparent");
  },
  true,
);

document.querySelector(".parent").addEventListener(
  "click",
  (e) => {
    console.log("parent");
    e.stopPropagation();
  },
  true,
);

document.querySelector(".child").addEventListener(
  "click",
  (e) => {
    console.log("child");
  },
  true,
);

// Event capturing -> first phase (top -> down)
// Event bubbling -> second phase (down -> top)

// Event delegation -> use one event handler instead of many

document.getElemenrtById("parent").addEventListener("click", (e) => {
  // if (e.target.tagName === "LI") {
  //     window.location.href = `/${e.target.id}`;
  // }

  if (e.target.dataset.uppercase !== undefined) {
    console.log("yup i am here");
  }
});
