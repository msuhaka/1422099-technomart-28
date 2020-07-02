var writeUs = document.querySelector('.button-write-us');
var writeForm = document.querySelector('.modal-write-us');
var closeForm = document.querySelector('.closing-button');
var inputName = document.querySelector('.order-name');
var inputEmail = document.querySelector('.order-email');
var inputMessage = document.querySelector('.order-message');
var inputForm = document.querySelector('.form-in-modal');

var isStorageSupport = true;
var storage = '';

try {
  storage = localStorage.getItem('login');
//   storage = localStorage.getItem('email');
} catch (err) {
  isStorageSupport = false;
}

writeUs.addEventListener("click", function (evt) {
  evt.preventDefault();
  console.log('Открой модальное окно');
  writeForm.classList.add('popup-show');
  if (storage) {
    inputName.value = storage;
    // inputEmail.value = storage;
    inputEmail.focus();
  } else {
    inputName.focus();
  }
});

closeForm.addEventListener('click', function (evt) {
  evt.preventDefault();
  console.log('Закрой модальное окно');
  writeForm.classList.remove('popup-show');
  inputForm.classList.remove('modal-error');
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
            // localStorage.setItem('email', inputEmail.value);
          }
        }
      });



