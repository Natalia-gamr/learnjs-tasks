// Получите данные о пользователях GitHub
// Создайте асинхронную функцию getUsers(names), которая получает на вход массив логинов пользователей GitHub, 
// запрашивает у GitHub информацию о них и возвращает массив объектов-пользователей.

// Информация о пользователе GitHub с логином USERNAME доступна по ссылке: https://api.github.com/users/USERNAME.

// Важные детали:
// На каждого пользователя должен приходиться один запрос fetch.
// Запросы не должны ожидать завершения друг друга. Надо, чтобы данные приходили как можно быстрее.
// Если какой-то запрос завершается ошибкой или оказалось, что данных о запрашиваемом пользователе нет, 
// то функция должна возвращать null в массиве результатов.

async function getUsers(names) {
    const url = 'https://api.github.com/users/'
    let arr = names.map(i => fetch(url + i)
        .then(res => res.ok ? res.json() : null)
        .catch(err => null))
    let result = await Promise.all(arr)
    console.log(result)
    return result
}

getUsers(['iliakan', 'remy', 'no.such.users'])