// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input),
// подставляет его текущее значение в span#name - output.
// Если инпут пустой, в спане должна отображаться строка "Anonymous".

const inputEl = document.getElementById("name-input");

const nameOutputEl = document.getElementById("name-output");

const onInputChange = (event) => {  
    if (!event.currentTarget.value) {
        nameOutputEl.textContent = 'Anonymous';
    }
    else {
        nameOutputEl.textContent = event.currentTarget.value;
    }
};

inputEl.addEventListener('input', onInputChange);