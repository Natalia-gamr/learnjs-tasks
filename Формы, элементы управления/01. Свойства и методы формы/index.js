// Добавьте пункт к выпадающему списку
// важность: 5
// Имеется <select>:
// Выведите значение и текст выбранного пункта.
// Добавьте пункт: <option value="classic">Классика</option>.
// Сделайте его выбранным.

let select = genres.options[genres.selectedIndex]
alert(select.value)
alert(select.text)

let newOption = new Option("Классика", "classic")
genres.append(newOption)

newOption.selected = true