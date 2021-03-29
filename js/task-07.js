// Напиши скрипт, который реагирует на изменение значения
// input#font - size - control(событие input) и изменяет инлайн
// - стиль span#text обновляя свойство font - size.В результате при
// перетаскивании ползунка будет меняться размер текста.

const fontSizeControlEl = document.querySelector("#font-size-control");
const textToChangeEl = document.querySelector("#text");

fontSizeControlEl.addEventListener("input", () => {
  textToChangeEl.style.fontSize = fontSizeControlEl.value + "px";
});
