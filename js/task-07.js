// Напиши скрипт, который реагирует на изменение значения input#font - size - control(событие input) 
// и изменяет инлайн - стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться размер текста.

const controlFont = document.getElementById("font-size-control");

const text = document.getElementById("text");

text.style.fontSize = controlFont.value + "px";

const changeFontSize = (event) => text.style.fontSize = event.currentTarget.value + "px";

controlFont.addEventListener('input', changeFontSize);