const controlsBoxRenderButton = document.querySelector(
  "button[data-action=render]"
);
const controlsBoxDestroyButton = document.querySelector(
  "button[data-action=destroy]"
);
const controlsBoxInputField = document.querySelector("div#controls input");
const boxToInsert = document.querySelector("#boxes");
boxToInsert.style.display = "flex";
boxToInsert.style.flexWrap = "wrap";

const randomRGBColor = function () {
  return `rgb(${Math.ceil(Math.random() * 255 - 1)},${Math.ceil(
    Math.random() * 255 - 1
  )},${Math.ceil(Math.random() * 255 - 1)})`;
};

const createAndInsertDivs = function () {
  if (
    +controlsBoxInputField.value <=
      +controlsBoxInputField.getAttribute("max") &&
    +controlsBoxInputField.value > +controlsBoxInputField.getAttribute("min")
  ) {
    let boxexMassive = [];
    for (let i = 0; i < +controlsBoxInputField.value; i++) {
      boxexMassive[i] = document.createElement("div");
      boxexMassive[i].style.width = `${30 + i * 10}px`;
      boxexMassive[i].style.height = `${30 + i * 10}px`;
      boxexMassive[i].style.backgroundColor = randomRGBColor();
    }
    boxToInsert.append(...boxexMassive);
  } else {
    alert("Out of range!");
  }
};

controlsBoxRenderButton.addEventListener("click", createAndInsertDivs);
controlsBoxDestroyButton.addEventListener("click", () => {
  boxToInsert.innerHTML = "";
});
