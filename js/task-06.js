// Напиши скрипт, который при потере фокуса на инпуте(событие blur),
// проверяет его содержимое на правильное количество введённых символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data - length.
// Если введено подходящее количество символов, то border инпута становится зелёным,
// если неправильное - красным.
// Для добавления стилей, используй CSS - классы valid и invalid,
// которые мы уже добавили в исходные файлы задания.

const inputEl = document.getElementById('validation-input');

const onValidationInputBlur = (event) => {
    if (event.currentTarget.value.length === +event.currentTarget.dataset.length) {
        event.currentTarget.classList.add('valid');
        event.currentTarget.classList.remove('invalid');
    }
    else {
        event.currentTarget.classList.add('invalid'); 
        event.currentTarget.classList.remove('valid')
    };
}

inputEl.addEventListener('blur', onValidationInputBlur);