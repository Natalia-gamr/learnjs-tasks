// Поведение "подсказка"
// важность: 5
// Напишите JS-код, реализующий поведение «подсказка».
// При наведении мыши на элемент с атрибутом data-tooltip, 
// над ним должна показываться подсказка и скрываться при переходе на другой элемент.

let tooltip = document.createElement('div');
tooltip.classList.add('tooltip')

document.addEventListener('mouseover', (e) => {
    let target = e.target

    if (target.tagName != 'BUTTON') return;

    let button = target;
    let tooltipText = button.dataset.tooltip;

    tooltip.innerHTML = tooltipText;
    document.body.append(tooltip);
    console.log(tooltipText);

    let coords = target.getBoundingClientRect();

    let left = coords.left + (target.offsetWidth - tooltip.offsetWidth) / 2
    let top = coords.top - tooltip.offsetHeight - 5

    if (left < 0) left = 0
    if (top < 0) top = coords.top + target.offsetHeight + 5

    tooltip.style.left = left + 'px'
    tooltip.style.top = top + 'px'
})

document.addEventListener('mouseout', (e) => {
    tooltip.remove();
})