/** Порядок подключения JS-модулей */

var anchors = document.querySelectorAll('a[href*="#"]');
var contacts = document.querySelector('.contacts');

anchors.forEach(function (anchor) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    contacts.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
});


var toggleBtn = document.querySelector('.header__btn');
var header = document.querySelector('.header');
var body = document.querySelector('body');

if(toggleBtn) {

  var hideMenu = function () {
    body.classList.remove('scroll-lock');
    header.classList.remove('opened');
  };

  var toggleMenu = function () {
    body.classList.toggle('scroll-lock');
    header.classList.toggle('opened');
  };


  var onEscKeyDown = function (evt) {
    if (evt.key === 'Escape') {
      hideMenu();
      document.removeEventListener('keydown', function (e) {
        onEscKeyDown(e);
      });
    }
  };

  var onWindowChange = function () {
    hideMenu();
  };

  document.addEventListener('DOMContentLoaded', onWindowChange);

  var width = window.innerWidth;
  window.addEventListener('resize', function () {
    if (window.innerWidth !== width) {
      hideMenu();
    }
  });

  toggleBtn.addEventListener('click', function (evt) {
    evt.preventDefault();
    toggleMenu();
    document.addEventListener('keydown', function (e) {
      onEscKeyDown(e);
    });
  });
}


var invalidClassName = 'invalid';
var inputs = document.querySelectorAll('input');

inputs.forEach(function (input) {
  input.addEventListener('invalid', function () {
    input.classList.add(invalidClassName);
  });

  input.addEventListener('input', function () {
    if (input.validity.valid) {
      input.classList.remove(invalidClassName);
    }
  });
});

