const infoBtns = document.querySelectorAll('.info-dot')
const infoHints = document.querySelectorAll('.info-hint')

// Клик по кнопкам

for (let btn of infoBtns) {
  btn.addEventListener('click', function (event) {
    event.stopPropagation()
    // Hide all hints
    for (let hint of infoHints) {
    hint.classList.add('none')
  }
    // Show current hint
    this.parentNode.querySelector('.info-hint').classList.toggle('none')
  })
}

// Закрытие подсказки при клике по всему документу

document.addEventListener('click', function () {
  for (let hint of infoHints) {
    hint.classList.add('none')
  }
})

// Запрещаем всплытие события при клике на подсказки

for (let hint of infoHints) {
  hint.addEventListener('click', (event) => event.stopPropagation())
}

// Swiper slider

const swiper = new Swiper('.swiper', {
  // Optional parameters
  // direction: 'horizontal',
  loop: true,
  freeMode: true,

  slidesPerView: 1,
  spaceBetween: 42,

    // breakpoints
  breakpoints: {
        600: {
          slidesPerView: 2,
          spaceBetween: 20,
         },
        920: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1230: {
          slidesPerView: 4,
          spaceBetween: 42,
        },
  },
  // Navigation arrows
  navigation: {
    nextEl: '#sliderNext',
    prevEl: '#sliderPrev',
  },

})

// Tabs

const tabsBtns = document.querySelectorAll('[data-tab]')
const tabsProducts = document.querySelectorAll('[data-tab-value]')

for (let btn of tabsBtns) {
  btn.addEventListener('click', function () {
    console.log('CLick!')

    // Убираем активный класс у всех кнопок
    for (let btn of tabsBtns) {
      btn.classList.remove('tab-controls__btn--active')
    }

    // Добавляем активный класс к текущей кнопке
    this.classList.add('tab-controls__btn--active')

    // Получаем значение категории товаров, которые нужно включить
    console.log(this.dataset.tab)

    // Скрыть все товары и отобразить нужную категорию
    for (let product of tabsProducts) {
      // Проверка на отображение всех слайдов

      if (this.dataset.tab === 'all') {
        product.classList.remove('none')
      } else {
        if (product.dataset.tabValue === this.dataset.tab) {
          product.classList.remove('none')
        } else {
          product.classList.add('none')
        }
      }
    }

    // Update swaper

    swiper.update()
  })
}

// Mobile Nav

const mobileNavOpenBtn = document.querySelector('#open-mobile-nav-btn')
const mobileNavCloseBtn = document.querySelector('#close-mobile-nav-btn')
const mobileNav = document.querySelector('#mobile-nav')

mobileNavOpenBtn.onclick = function () {
  mobileNav.classList.add('mobile-nav-wrapper--open')
}

mobileNavCloseBtn.onclick = function () {
  mobileNav.classList.remove('mobile-nav-wrapper--open')
}


