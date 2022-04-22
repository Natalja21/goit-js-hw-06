// Напиши скрипт, который изменяет цвета фона элемента < body >
// через инлайн стиль при клике на button.change - color 
// и выводит значение цвета в span.color.
// Для генерации случайного цвета используй функцию getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const buttonChangeColor = document.querySelector('.change-color');
const spanColor = document.querySelector('.color');

const onChangeColor = () => {
  const changeColor = getRandomHexColor();
  document.body.style.backgroundColor = changeColor;
  spanColor.textContent = changeColor;
 
}

buttonChangeColor.addEventListener('click', onChangeColor);
