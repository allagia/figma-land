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


const toggleBtn = document.querySelector('.header__btn');
const header = document.querySelector('.header');
const body = document.querySelector('body');

if(toggleBtn) {

  const hideMenu = function () {
    body.classList.remove('scroll-lock');
    header.classList.remove('opened');
  };

  const toggleMenu = function () {
    body.classList.toggle('scroll-lock');
    header.classList.toggle('opened');
  };


  const onEscKeyDown = function (evt) {
    if (evt.key === 'Escape') {
      hideMenu();
      document.removeEventListener('keydown', function (e) {
        onEscKeyDown(e);
      });
    }
  };

  const onWindowChange = function () {
    hideMenu();
  };

  document.addEventListener('DOMContentLoaded', onWindowChange);

  let width = window.innerWidth;
  window.addEventListener('resize', () => {
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


