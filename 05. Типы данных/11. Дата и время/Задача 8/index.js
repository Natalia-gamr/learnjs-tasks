// Форматирование относительной даты
// важность: 4
// Напишите функцию formatDate(date), форматирующую date по следующему принципу:

// Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
// В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
// В противном случае, если меньше часа, вывести "m мин. назад".
// В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.

function formatDate(date) {
    let diff = new Date() - date;
    if (diff < 1000) {
        return 'прямо сейчас';
    } else if (diff < 60 * 1000) {
        return `${Math.floor(diff / 1000)} сек. назад`
    } else if (diff < 60 * 60 * 1000) {
        return `${Math.floor(diff / (60 * 1000))} мин. назад`
    } else {
        let day = date;
        day = [
            '0' + day.getDate(),
            '0' + (day.getMonth() + 1),
            '' + day.getFullYear(),
            '0' + day.getHours(),
            '0' + day.getMinutes()
        ].map(component => component.slice(-2));
        return day.slice(0, 3).join('.') + ' ' + day.slice(3).join(':');
    }
}

alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"
alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"
alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"
alert( formatDate(new Date(new Date - 86400 * 1000)) );