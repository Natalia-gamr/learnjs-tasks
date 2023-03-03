// Тормозящий (throttling) декоратор
// важность: 5
// Создайте «тормозящий» декоратор throttle(f, ms), который возвращает обёртку, 
// передавая вызов в f не более одного раза в ms миллисекунд. Те вызовы, которые попадают в период «торможения», 
// игнорируются.
// Отличие от debounce – если проигнорированный вызов является последним во время «задержки», то он выполняется в конце.

function f(a) {
  console.log(a)
}

function throttle(f, ms) {
  let isReady = false;

  return function(...args) {
    let tmp = args;
      if (isReady) {
          return;
      }
    
      f.apply(this, args);
      isReady = true;

      setTimeout(() => {
        isReady = false;
        f.apply(this, tmp);
      }, ms);
      
    }
}

let f1000 = throttle(f, 1000);

f1000(1); // показывает 1
f1000(2); // (ограничение, 1000 мс ещё нет)
f1000(3); // (ограничение, 1000 мс ещё нет)
