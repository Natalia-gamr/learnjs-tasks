// Цветные часы с использованием setInterval
// важность: 4
// Создайте цветные часы как в примере ниже:

let date = new Date()

function clock() {
  let date = new Date()

  let hoursBlock = document.querySelector('.hours');
  let hours = date.getHours();
  hoursBlock.innerHTML = hours < 10 ? '0' + hours : hours;

  let minutesBlock = document.querySelector('.minutes');
  let minutes = date.getMinutes();
  minutesBlock.innerHTML = minutes < 10 ? '0' + minutes : minutes ;
  
  let secondsBlock = document.querySelector('.seconds');
  let seconds = date.getSeconds() ;
  secondsBlock.innerHTML = seconds < 10 ? '0' +  seconds : seconds;
}

let timer;

function clockStart() {
  timer = setInterval(clock, 1000)
  clock();
}

function clockStop() {
  clearInterval(timer);
  timer = null;
}
