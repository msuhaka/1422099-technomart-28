var slider = document.querySelector('.slider-item');
var nextSlide = document.querySelector('.slider-list::before');
var previousSlide = document.querySelector('.slider-list::after');
var firstSlide = document.querySelector('.first-slide');
var secondSlide = document.querySelector('.second-slide');

// nextSlide.addEventListener('click', function (evt) {
//   slider.classList.toggle('active');
// });

previousSlide.addEventListener('click', function (evt) {
  slider.classList.toggle('active');
});
