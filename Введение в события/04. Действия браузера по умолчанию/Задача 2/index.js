// Поймайте переход по ссылке
// важность: 5
// Сделайте так, чтобы при клике на ссылки внутри элемента id="contents" пользователю выводился вопрос о том, 
// действительно ли он хочет покинуть страницу, и если он не хочет, то прерывать переход по ссылке.
// Содержимое #contents может быть загружено динамически и присвоено при помощи innerHTML. 
// Так что найти все ссылки и поставить на них обработчики нельзя. Используйте делегирование.
// Содержимое может иметь вложенные теги, в том числе внутри ссылок, например, <a href=".."><i>...</i></a>.
// Открыть песочницу для задачи.

let contents = document.querySelector('#contents')

contents.addEventListener('click', (e) => {
    let target = e.target.closest('a')

    if (target && contents.contains(target)) {
        let isVisited = confirm(`Leave for ${target.getAttribute('href')}?`)
        if (!isVisited) {
            e.preventDefault();
        }
    }
})