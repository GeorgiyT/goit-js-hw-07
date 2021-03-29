const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("change", () => {
  if (parseInt(inputEl.value.length) === parseInt(inputEl.dataset.length)) {
    if (inputEl.classList.contains("invalid")) {
      inputEl.classList.remove("invalid");
    }
    inputEl.classList.add("valid");
  } else {
    if (inputEl.classList.contains("valid")) {
      inputEl.classList.remove("valid");
    }
    inputEl.classList.add("invalid");
  }
});
