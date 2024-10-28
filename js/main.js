function startTimer(duration, display) {
  let timer = duration,
    hours,
    minutes,
    seconds;
  setInterval(function () {
    hours = Math.floor(timer / 3600);
    minutes = Math.floor((timer % 3600) / 60);
    seconds = Math.floor(timer % 60);

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = hours + ":" + minutes + ":" + seconds;

    if (--timer < 0) {
      timer = 0; // Остановить таймер на нуле
    }
  }, 1000);
}


window.onload = function () {

  const twoHours = 2 * 60 * 60; // 2 часа в секундах
  const display = document.querySelector(".timer"); // Находим элемент с классом 'timer'
  startTimer(twoHours, display); // Запускаем таймер на 2 часа


  let input = document.getElementById("phone");
  var maskOptions = {
    mask: "+38(\\000)000-00-00",
    lazy: false,
  };
  let mask = IMask(input, maskOptions);
};



const today = new Date();
  const day = String(today.getDate()).padStart(2, '0');
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const year = today.getFullYear();

  const formattedDate = `Order date: ${day}.${month}.${year}`;
  document.querySelector('.date').textContent = formattedDate;




  const menu = document.querySelector('.menu')
  const openMenu = document.querySelector('.header__menu_active')
  const closeMenu = document.querySelector('.header__menu_close button')
  const closeMenuLinks = document.querySelectorAll('.header__menu_active  a')  

  menu.addEventListener('click', ()=>{
    openMenu.classList.add('active')
  })
  closeMenu.addEventListener('click', ()=>{
    openMenu.classList.remove('active')
  })
 

  closeMenuLinks.forEach((item) => {
    item.addEventListener('click', ()=>{
      openMenu.classList.remove('active')
    })
  })







const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}