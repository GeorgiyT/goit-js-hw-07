// Напиши скрипт который, при наборе текста в инпуте
// input#name - input(событие input), подставляет его
// текущее значение в span#name - output.Если инпут пустой,
// в спане должна отображаться строка'незнакомец'.

const inputEl = document.querySelector("#name-input");
const nameOutputEl = document.querySelector("#name-output");

const printy = function (element) {
  if (inputEl.value.length !== 0) {
    element.textContent = inputEl.value;
  } else {
    element.textContent = "незнакомец";
  }
};

inputEl.addEventListener("input", function () {
  printy(nameOutputEl);
});
