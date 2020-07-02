var delivery = document.querySelector('.delivery');
var warranty = document.querySelector('.warranty');
var credit = document.querySelector('.credit');
var services = document.querySelectorAll('.service-list li');
var serviceButtonFirst = document.querySelector('.service-button-1');
var serviceButtonSecond = document.querySelector('.service-button-2');
var serviceButtonThird = document.querySelector('.service-button-3');


serviceButtonFirst.addEventListener('click', function (evt) {
  if (serviceButtonSecond.classList.contains('active-button') || serviceButtonThird.classList.contains('active-button')) {
    serviceButtonSecond.classList.remove('active-button');
    warranty.classList.remove('service-active');
    serviceButtonThird.classList.remove('active-button');
    credit.classList.remove('service-active');
    serviceButtonFirst.classList.add('active-button');
    delivery.classList.add('service-active');
  } else {
    serviceButtonFirst.classList.add('active-button');
    delivery.classList.add('service-active');
    console.log('индикатор активности на первой кнопке сервисов');
  }
});

serviceButtonSecond.addEventListener('click', function (evt) {
  if (serviceButtonFirst.classList.contains('active-button') || serviceButtonThird.classList.contains('active-button')) {
    serviceButtonFirst.classList.remove('active-button');
    delivery.classList.remove('service-active');
    serviceButtonThird.classList.remove('active-button');
    credit.classList.remove('service-active');
    serviceButtonSecond.classList.add('active-button');
    warranty.classList.add('service-active');
  } else {
    serviceButtonSecond.classList.add('active-button');
    warranty.classList.add('service-active');
    console.log('индикатор активности на второй кнопке сервисов');
  }
}); 

serviceButtonThird.addEventListener('click', function (evt) {
  if (serviceButtonSecond.classList.contains('active-button') || serviceButtonFirst.classList.contains('active-button') ) {
    serviceButtonFirst.classList.remove('active-button');
    delivery.classList.remove('service-active');
    serviceButtonSecond.classList.remove('active-button');
    warranty.classList.remove('service-active');
    serviceButtonThird.classList.add('active-button');
    credit.classList.add('service-active');
  } else {
    serviceButtonThird.classList.add('active-button');
    credit.classList.add('service-active');
    console.log('индикатор активности на третьей кнопке сервисов');
  }
});

