// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент < li >.Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все < li > за одну операцию в список ul.ingredients.
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const createItems = ingredients.map((ingredient) => {
  const itemIngredientsEl = document.createElement('li');
  itemIngredientsEl.classList.add('item');
  itemIngredientsEl.textContent = ingredient;
  return itemIngredientsEl;
});

const listIngredientsEl = document.querySelector('#ingredients');

listIngredientsEl.append(...createItems);

