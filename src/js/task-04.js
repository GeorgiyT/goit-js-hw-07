// Создай переменную counterValue в которой будет хранится текущее
// значение счетчика.
// Создай функции increment и decrement для увеличения и
// уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и
// обновление интерфейса

let counterValue = 0;

const actions = document.querySelector("#counter");
const valueOutput = actions.querySelector("#value");

const increment = function (terget) {
  counterValue += 1;
  terget.textContent = counterValue;
};

const decrement = function (terget) {
  counterValue -= 1;
  terget.textContent = counterValue;
};

const buttonDecrement = actions.firstElementChild;
buttonDecrement.addEventListener("click", function () {
  decrement(valueOutput);
});

const buttonIncrement = actions.lastElementChild;
buttonIncrement.addEventListener("click", function () {
  increment(valueOutput);
});
