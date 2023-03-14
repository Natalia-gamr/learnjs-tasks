// Модальное диалоговое окно с формой
// важность: 5
// Создайте функцию showPrompt(html, callback), которая выводит форму с сообщением (html), полем ввода и кнопками OK/ОТМЕНА.

// Пользователь должен ввести что-то в текстовое поле и нажать Enter или кнопку «OK», 
// после чего должна вызываться функция callback(value) со значением поля.
// Если пользователь нажимает Esc или кнопку «ОТМЕНА», тогда вызывается callback(null).
// В обоих случаях нужно завершить процесс ввода и закрыть диалоговое окно с формой.
// Требования:
// Форма должна быть в центре окна.
// Форма является модальным окном, это значит, что никакое взаимодействие с остальной частью страницы невозможно, 
// пока пользователь не закроет его.
// При показе формы, фокус должен находиться сразу внутри <input>.
// Клавиши Tab/Shift+Tab должны переключать фокус между полями формы, не позволяя ему переходить к другим элементам страницы.


const container = document.getElementById('prompt-form-container');
const form = document.getElementById('prompt-form');
const message = document.getElementById('prompt-message');
const button = document.querySelector('.show');

button.onclick = () => {
    showPrompt("Введите что-нибудь...умное: )", function (value) {
        alert(value);
    });
}

function showPrompt(html, callback) {
    document.body.style.overflow = 'hidden';
    container.style.display = 'block'
    container.style.backgroundColor = 'rgba(0, 0, 0, .3)';
    message.innerHTML = html;
    form.text.focus();

    form.addEventListener('click', clickHandler);
    document.addEventListener('keydown', keyDownHandler);

    function clickHandler(e) {
        const target = e.target;

        e.preventDefault();

        const okBtn = form.querySelector('[type="submit"]');
        const text = form.text.value;

        if (target === okBtn && text) {
            callback(`Вы ввели: ${text}`);
            hidePrompt();
        }

        if (target === form.cancel) {
            callback(`Вы ввели: ${null}`);
            hidePrompt();
        }
    }

    function keyDownHandler(e) {
        if (e.code === 'Escape') {
            callback(`Вы ввели: ${null}`);
            hidePrompt();
        }
    }

    const firstElem = form.elements[0];
    const lastElem = form.elements[form.elements.length - 1];

    lastElem.addEventListener('keydown', tabHandler);

    function tabHandler(e) {
        if (e.code === 'Tab' && !e.shiftKey) {
            e.preventDefault();
            firstElem.focus();
        }
    }

    function hidePrompt() {
        container.style.display = 'none';
        document.body.style.overflow = 'auto';
        form.reset()
        form.removeEventListener('click', clickHandler);
        document.removeEventListener('keydown', keyDownHandler);
        lastElem.removeEventListener('keydown', tabHandler);
    }
}