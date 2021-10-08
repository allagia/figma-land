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

