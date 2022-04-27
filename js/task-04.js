// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.
// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.
const refs = {
    buttonDecrement: document.querySelector(' button[data-action="decrement"]'),
    buttonIncrement: document.querySelector(' button[data-action="increment"]'),
    counter: document.querySelector('#value')
}

let counterValue = 0;

const buttonDecrementValue = () => {
    counterValue -= 1;
    refs.counter.textContent = counterValue;
};

const buttonIncrementValue = () => {
    counterValue += 1;
    refs.counter.textContent = counterValue
};

refs.buttonDecrement.addEventListener('click', buttonDecrementValue);

refs.buttonIncrement.addEventListener('click', buttonIncrementValue);