var modalNotice = document.querySelector('.modal-buying-notice');
var buyLink = document.querySelectorAll('.button-buying');
var closeNotice = document.querySelector('.closing-button');


buyLink.forEach(function (entry) {
    entry.addEventListener("click", function (event){
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