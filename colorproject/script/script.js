const copy = document.querySelectorAll(".fa-clone");
const lock = document.querySelectorAll(".fa-unlock-alt");
const buttonGenerate = document.querySelector(".button");

////////// Create Random Color /////////
function createRandomColor() {
  const randomColor = (
    "0" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .toUpperCase()
  ).slice(-6);
  return randomColor;
}

////////// Generate New Random Color //////////
const newRandomColor = () => {
  const box = document.querySelectorAll(".color-unlock");
  box.forEach((item) => {
    if (item.children[0].children[1].classList[1] === "fa-unlock-alt") {
      item.children[0].children[0].classList.remove("fa-check");
      item.children[0].children[0].classList.add("fa-clone");
    }
    const randomColor = createRandomColor();
    item.style.backgroundColor = `#${randomColor}`;
    item.children[1].innerHTML = randomColor;
  });
};

////////// copy //////////
const copyHandler = (event) => {
  event.target.classList.remove("fa-clone");
  event.target.classList.add("fa-check");
  navigator.clipboard.writeText(
    `#${event.target.parentElement.parentElement.children[1].innerHTML}`
  );
};

////////// Lock & Unlock //////////
const lockHandler = (event) => {
  if (event.target.classList[1] === "fa-unlock-alt") {
    event.target.classList.remove("fa-unlock-alt");
    event.target.classList.add("fa-lock");
    event.target.parentElement.parentElement.classList.remove("color-unlock");
  } else if (event.target.classList[1] === "fa-lock") {
    event.target.classList.remove("fa-lock");
    event.target.classList.add("fa-unlock-alt");
    event.target.parentElement.parentElement.classList.add("color-unlock");
  }
};

window.addEventListener("load", () => {
  buttonGenerate.addEventListener("click", newRandomColor);
  copy.forEach((item) => item.addEventListener("click", copyHandler));
  lock.forEach((item) => item.addEventListener("click", lockHandler));
});
