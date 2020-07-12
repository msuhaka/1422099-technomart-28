var writeUs = document.querySelector('.button-write-us');
var writeForm = document.querySelector('.modal-write-us');
var closeButton = document.querySelectorAll('.closing-button');
var inputName = document.querySelector('.order-name');
var inputEmail = document.querySelector('.order-email');
var inputMessage = document.querySelector('.order-message');
var inputForm = document.querySelector('.form-in-modal');

/*------------------------------------catalog-script-----------------------------------------*/
var modalNotice = document.querySelector('.modal-buying-notice');
var buyLink = document.querySelectorAll('.button-buying');
var closeNotice = document.querySelector('.closing-button');
var makeOrder = document.querySelector('.order-button');
var makeShopping = document.querySelector('.shopping-button');

buyLink.forEach(function (entry) {
  entry.addEventListener('click', function (event) {
    event.preventDefault();
    console.log('Открой модальное окно');
    modalNotice.classList.add('popup-show');
  });
});

closeNotice.addEventListener('click', function (evt) {
  evt.preventDefault();
  console.log('Закрой модальное окно');
  modalNotice.classList.remove('popup-show');
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (modalNotice.classList.contains('popup-show')) {
      evt.preventDefault();
      console.log('Закрой модальное окно кнопкой ESC');
      modalNotice.classList.remove('popup-show');
    }
  }
});

/*--------------------------Всплывающая Форма-------------------------*/
var isStorageSupport = true;
var storage = '';

try {
  storage = localStorage.getItem('login');
} catch (err) {
  isStorageSupport = false;
}

writeUs.addEventListener('click', function (evt) {
  evt.preventDefault();
  console.log('Открой модальное окно');
  writeForm.classList.add('popup-show');
  if (storage) {
    inputName.value = storage;
    inputEmail.focus();
  } else {
    inputName.focus();
  }
});

closeButton.forEach(function (entry) {
  entry.addEventListener('click', function (event) {
    event.preventDefault();
    console.log('Закрой модальное окно');
    writeForm.classList.remove('popup-show');
    inputForm.classList.remove('modal-error');
    mapPopup.classList.remove('popup-show');
  });
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (writeForm.classList.contains('popup-show')) {
      evt.preventDefault();
      writeForm.classList.remove('popup-show');
      inputForm.classList.remove('modal-error');
    }
  }
});

inputForm.addEventListener('submit', function (evt) {
  if (!inputName.value || !inputEmail.value) {
    evt.preventDefault();
    inputForm.classList.add('modal-error');
    inputForm.offsetWidth = loginPopup.offsetWidth;
    inputForm.classList.add('modal-error')
  } else {
    if (isStorageSupport) {
      localStorage.setItem('login', inputName.value);
    }
  }
});

/*----------------------Всплывающая карта---------------------------------------*/
var mapPopup = document.querySelector('.map-popup');
var mapLink = document.querySelector('.link-map');

mapLink.addEventListener('click', function (evt) {
  evt.preventDefault();
  console.log('Открой модальное окно');
  mapPopup.classList.add('popup-show');
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains('popup-show')) {
      evt.preventDefault();
      console.log('Закрой модальное окно кнопкой ESC');
      mapPopup.classList.remove('popup-show');
    }
  }
});

/*-----------------------------------slider-------------------------------------*/
var prev = document.querySelector('.previous-slide');
var next = document.querySelector('.next-slide');
var dot = document.querySelectorAll('.dot');

prev.addEventListener('click', function (event) {
  console.log('Нажата кнопка previous')
  plusSlides(-1)
});

next.addEventListener('click', function (event) {
  console.log('Нажата кнопка next')
  plusSlides(1)
});

dot.forEach(function (rangeSlide) {
  rangeSlide.addEventListener('click', function (event) {
    event.preventDefault();
    console.log('Нажат кружок на слайдере')
    plusSlides(-1)
  });
});

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName('slider-item');
  var dots = document.getElementsByClassName('dot');
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
}

/*--------------------------------------services------------------------------*/
var serviceButton = document.querySelectorAll('.service-button');
var serviceTypes = document.querySelectorAll('.service-type');

serviceButton.forEach(function (button) {
  button.addEventListener('click', function (evt) {
    var serviceType = button.dataset.service;
    console.log('сменить слайд в блоке сервисов и услуг');
    openService(serviceType);
    openService(serviceType);
    openService(serviceType);
    evt.target.classList.add('active');
  });
});

function openService(serviceName) {
  for (var i = 0; i < serviceTypes.length; i++) {
    serviceTypes[i].classList.remove('active');
  }

  for (i = 0; i < serviceButton.length; i++) {
    serviceButton[i].classList.remove('active');
  }

  var currentServiceType = document.querySelector('#' + serviceName);
  currentServiceType.classList.add('active');
}
