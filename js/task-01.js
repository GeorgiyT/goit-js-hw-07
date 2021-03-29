const categoriesListEl = document.querySelector("#categories");

// Посчитает и выведет в консоль количество категорий в ul#categories,
//   то есть элементов li.item. Получится 'В списке 3
// категории.'.
const categoriesListElAmount = categoriesListEl.children.length;
console.log(`В списке ${categoriesListElAmount} категории.`);

// Для каждого элемента li.item в списке ul#categories, найдет
// и выведет в консоль текст заголовка элемента (тега h2) и
// количество элементов в категории (всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4

const categoriesListElItem = document.querySelectorAll("#categories .item");

const getCategory = (categories) => {
  categories.forEach((element) => {
    console.log(`Категория: ` + element.firstElementChild.textContent);
    console.log(
      `Количество элементов: ` + element.lastElementChild.children.length
    );
  });
};

getCategory(categoriesListElItem);

// ----------------------------------------------------------------------------

// let getEl = (x) => document.querySelector(x);

// let liItem = [...getEl("#categories").querySelectorAll(".item")];
// console.log(`В списке ${liItem.length} категорий`);
// console.log("__________________");

// console.log(liItem);

// for (let i = 0; i < liItem.length; i++) {
//   console.log(`Категория:` + liItem[i].querySelector("h2").textContent);
//   console.log(
//     `Количество элементов:` + liItem[i].querySelectorAll("li").length
//   );
// }
