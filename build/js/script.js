'use strict';

var ESC_KEY = 'Escape';

var popup = document.querySelector('.jewellery-popup');

if (popup) {
  var popupOpen = document.querySelector('.portfolio__loup');
  var popupClose = popup.querySelector('.jewellery-popup__button-cross');
  var overlay = document.querySelector('.overlay');

  var onCartPopupEscPress = function (evt) {
    if (evt.key === ESC_KEY) {
      closeCartPopup();
    }
  };

  var openPopup = function () {
    popup.classList.remove('jewellery-popup--hidden');
    overlay.classList.remove('overlay--hidden');
    document.addEventListener('keydown', onCartPopupEscPress);
  };

  var closeCartPopup = function () {
    popup.classList.add('jewellery-popup--hidden');
    overlay.classList.add('overlay--hidden');
    document.removeEventListener('keydown', onCartPopupEscPress);
  };

  popupOpen.addEventListener('click', openPopup);

  popupClose.addEventListener('click', closeCartPopup);

  overlay.addEventListener('click', closeCartPopup);
}
