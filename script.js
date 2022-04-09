'use strict'

const slides = document.querySelectorAll('.baner__img'),
      slidesInner = document.querySelectorAll('.baner__inner'),
      tabs = document.querySelectorAll('.tabs__item'),
      prevBtn = document.getElementById('prev-btn'),
      nextBtn = document.getElementById('next-btn');

let slideIndex = 0;
let sildeTimer = setInterval(nextSlide, 3000);


//Функция определения активного слайда
function activeSlide(n) {
    //Проверяем что у slies не стоит класс active что бы не переназначать его
    if( ! slides[n].classList.contains('active')) {
        //Проходимя по массиву slides и у каждого элемента (const slide) убираем класс active
        for(const slide of slides) {
            slide.classList.remove('active');
        }
        //Активному слайду добавляем класс active
        slides[n].classList.add('active');
    }    
}

//Функция определения активного таба соответствующего слайду
function activeTab(n) {
    //Проверяем что у tabs не стоит класс active что бы не переназначать его
    if (! tabs[n].classList.contains('active')) {
        //Проходимя по массиву tabs и у каждого элемента (const tab) убираем класс active
       for(const tab of tabs) {
           tab.classList.remove('active');
       }
       //Активному табу добавляем класс active
       tabs[n].classList.add('active');
    }
}

//Общая функция для объединения всех действий смены и установки слайда
function changeSlide(slideIndex) {
    autoPlay();
    activeSlide(slideIndex);
    activeTab(slideIndex);
}

//Атопрокрутка слайдов 3сек
function autoPlay() {
    clearInterval(sildeTimer);
    sildeTimer = setInterval(nextSlide, 3000);
}

//Функиця переключения на следующий слайд
function nextSlide() {
    if(slideIndex == slides.length - 1) {
        slideIndex = 0;
        changeSlide(slideIndex)
    } else {
        slideIndex++;
        changeSlide(slideIndex)
    }
}

//Функиця переключения на предыдущий слайд
function prevSlide() {
    if(slideIndex == 0) {
        slideIndex = slides.length - 1;
        changeSlide(slideIndex)
    } else {
        slideIndex--;
        changeSlide(slideIndex)
    }
}
//устанавливаем действие по клику для каждого элемента массива tabs 
tabs.forEach(function(item, tabIndex) {
    item.addEventListener('click', function(){
        slideIndex = tabIndex;
        changeSlide(slideIndex);
    })
})

//прееключение слайдов по клику кнопки вперед назад
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);