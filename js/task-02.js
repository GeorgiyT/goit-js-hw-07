const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

// Напиши скрипт, который для каждого элемента массива ingredients
// создаст отдельный li, после чего вставит все li за одну операцию в
// список ul.ingredients.Для создания DOM - узлов используй
// document.createElement().

const ingredientsList = document.querySelector("#ingredients");

const ingredientsListTransformer = (list) => {
  let ingredientsListItems = [];
  list.forEach((ingredient) => {
    const item = document.createElement("li");
    item.textContent = ingredient;
    ingredientsListItems.push(item);
  });
  return ingredientsListItems;
};

ingredientsList.prepend(...ingredientsListTransformer(ingredients));
