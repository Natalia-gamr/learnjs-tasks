// Создать уведомление
// важность: 5
// Напишите функцию showNotification(options), которая создаёт уведомление: <div class="notification"> с заданным содержимым. 
// Уведомление должно автоматически исчезнуть через 1,5 секунды.

showNotification({
  style: {
    top: '10px', // 10px от верхней границы окна (по умолчанию 0px)
    right: '10px', // 10px от правого края окна (по умолчанию 0px)
  },
  html: "Hello!", // HTML-уведомление
  className: "welcome" // дополнительный класс для div (необязательно)
});

function showNotification(obj) {
  setInterval(() => {
    let div = document.createElement('div')
    document.body.append(div)
    div.classList.add('notification')

    let style = obj['style']

    for (let elem in style) {
      div.style[elem] = style[elem];
    }

    div.textContent = obj["html"];

    div.classList.add(obj["className"]);

    document.body.append(div);

    setTimeout(() => {
      div.remove();
    }, 1500);

    document.body.append(div)
    div.classList.add('notification')
  },2000)
}

