"use strict";


let wrapper = document.querySelector('.wrapper');


let pageSlider = new Swiper('.page', {
    // Свої класи
    wrapperClass: 'page__wrapper',
    slideClass: 'page__screen',

    // Вертикальний слайдер
    direction: 'vertical',

    // Кількість слайдів для показу
    slidesPerView: 'auto',

    // Паралакс
    parallax: true,

    // Управління клавіатурою
    keyboard: {
        // вкл/викл
        enabled: true,

        // вкл/викл тільки коли слайдер в полі видимості
        onlyInViewport: true,

        // вкл/викл Управління клавіатури  pageUp pageDown
        pageUpDown: true,
    },

    // Управління колесом миші
    mousewheel: {
        // Чутливість колеса миші
        sensitivity: 1,
    },

    // Відключення функціонала, якщо слайдів менче чим потрібно
    watchOverflow: true,

    // Швидкість
    speed: 800,

    // Обновити слайд при зміні елементів слайдера
    observer: true,
    observeParents: true,
    observeSlideChildren: true,

    // Навігація
    pagination: {
        el: '.page__pagination',
        type: 'bullets',
        clickable: 'true',
        bulletClass: 'page__bullet',
        bulletActiveClass: 'page__bullet_active',
    },

    // Скрол
    scrollbar: {
        el: '.page__scroll',
        dragClass: 'page__drag-scroll',
        draggable: true,
    },
    // Відключити ініціалізацію
    init: false,

    // Подія
    on: {
        // Подія ініціалізації
        init: function () {
            menuSlider();
            setScrollType();
            // wrapper.classList.add('_loaded');
        },
        // Подія зміни слайда
        slideChange: function () {
            menuSliderRemove();
            menuLinks[pageSlider.realIndex].classList.add('_active');
        },
        resize: function () {
            setScrollType();
        }
    },
});

let menuLinks = document.querySelectorAll('.menu__link');

function menuSlider() {
    if (menuLinks.length > 0) {
        menuLinks[pageSlider.realIndex].classList.add('_active');
        for (let index = 0; index < menuLinks.length; index++) {
            const menuLink = menuLinks[index];
            menuLink.addEventListener('click', function (e) {
                menuSliderRemove();
                pageSlider.slideTo(index, 800);
                menuLink.classList.add('_active');
                e.preventDefault();
            });
        }
    }
}

function menuSliderRemove() {
    let menuLinkActive = document.querySelector('.menu__link._active');
    if (menuLinkActive) {
        menuLinkActive.classList.remove('_active');
    }
}

function setScrollType() {
    if (wrapper.classList.contains('_free')) {
        wrapper.classList.remove('_free');
        pageSlider.params.freeMode = false;
    }
    for (let index = 0; index < pageSlider.slides.length; index++) {
        const pageSlide = pageSlider.slides[index];
        const pageSlideContent = pageSlider.querySelector('.screen__content');
        if (pageSlideContent) {
            const pageSlideContentHeight = pageSlideContent.offsetHeight;
            if (pageSlideContentHeight > window.innerHeight) {
                wrapper.classList.add('_free');
                pageSlider.params.freeMode = true;
                break;

            }
        }
    }
}


pageSlider.init();


// function myFunction() {
//     var dots = document.getElementById("dots");
//     var moreText = document.getElementById("more");
//     var btnText = document.getElementById("myBtn");
//
//     if (dots.style.display === "none") {
//         dots.style.display = "inline";
//         btnText.innerHTML = "Read more";
//         moreText.style.display = "none";
//     } else {
//         dots.style.display = "none";
//         btnText.innerHTML = "Read less";
//         moreText.style.display = "inline";
//     }
// }
//