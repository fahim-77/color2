// const box = document.querySelectorAll(".color");
// const buttonGenerate = document.querySelector(".button");

// const setBg = () => {
//   box.forEach((item) => {
//     const randomColor = (
//       "0" +
//       Math.floor(Math.random() * 16777215)
//         .toString(16)
//         .toUpperCase()
//     ).slice(-6);
//     item.style.backgroundColor = `#${randomColor}`;
//     item.children[0].style.backgroundColor = `#${randomColor}`;
//     item.children[0].innerHTML = randomColor;
//     item.children[0].style.opacity = 1;
//   });
// };
// const copyHandler = (event) => {
//   navigator.clipboard.writeText(`#${event.target.innerHTML}`);
//   event.target.style.opacity = 0.2;
// };

// window.addEventListener("load", () => {
//   buttonGenerate.addEventListener("click", setBg);
//   box.forEach((item) => item.addEventListener("click", copyHandler));
// });

////////////////////////////////////////////////////////////////////////////

const copy = document.querySelectorAll(".fa-clone");
const lock = document.querySelectorAll(".fa-unlock-alt");
const buttonGenerate = document.querySelector(".button");
const box = document.querySelectorAll(".color");

const setBg = () => {
  box.forEach((item) => {
    const randomColor = (
      "0" +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .toUpperCase()
    ).slice(-6);
    item.style.backgroundColor = `#${randomColor}`;
    item.children[0].style.backgroundColor = `#${randomColor}`;
    item.children[1].innerHTML = randomColor;
  });
};
const copyHandler = (event) => {
  event.target.classList.remove("fa-clone");
  event.target.classList.add("fa-check");
  navigator.clipboard.writeText(
    `#${event.target.parentElement.parentElement.children[1].innerHTML}`
  );
};
const lockHandler = (event) => {
  event.target.classList.remove("fa-unlock-alt");
  event.target.classList.add("fa-lock");
};

window.addEventListener("load", () => {
  buttonGenerate.addEventListener("click", setBg);
  copy.forEach((item) => item.addEventListener("click", copyHandler));
  lock.forEach((item) => item.addEventListener("click", lockHandler));
});
